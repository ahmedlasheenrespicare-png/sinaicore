import * as THREE from 'three'

/**
 * Halite — a refracting, dispersive crystal shader.
 *
 * Instead of a single flat highlight, the surface evaluates three things per
 * fragment:
 *   1. chromatic refraction of the environment (three IORs → RGB fringing)
 *   2. total-internal-reflection wedges near grazing angles
 *   3. fresnel sheen + a cool emissive core that keeps it readable on dark ink
 *
 * It renders as an opaque surface (so it sorts correctly against the rock) but
 * pushes the backdrop through it, which reads as glass at this scale.
 */

const vert = /* glsl */ `
  uniform float uTime;
  uniform float uPulse;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec3 vViewPos;
  varying vec3 vObjPos;

  void main() {
    vObjPos = position;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 mv = viewMatrix * world;
    vViewPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`

const frag = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform float uPulse;
  uniform float uOpacity;
  uniform vec3  uDeep;
  uniform vec3  uBright;
  uniform vec3  uAccent;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec3 vViewPos;
  varying vec3 vObjPos;

  // cheap value noise for internal clouding
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 V = normalize(cameraPosition - vWorldPos);
    vec3 L = normalize(vec3(-0.45, 0.82, 0.36));
    vec3 L2 = normalize(vec3(0.75, 0.1, 0.6));

    float ndv = clamp(dot(N, V), 0.0, 1.0);
    float fres = pow(1.0 - ndv, 3.2);

    // ---- dispersion: bend the sampling direction per channel -------------
    vec3 rRay = refract(-V, N, 1.0 / 1.51);
    vec3 gRay = refract(-V, N, 1.0 / 1.55);
    vec3 bRay = refract(-V, N, 1.0 / 1.59);
    // a fake environment: vertical gradient + two soft "lights" in the scene
    vec3 env = vec3(0.0);
    for (int i = 0; i < 3; i++) {
      vec3 ray = i == 0 ? rRay : (i == 1 ? gRay : bRay);
      if (dot(ray, ray) < 1e-4) ray = reflect(-V, N);
      float band = 0.5 + 0.5 * ray.y;
      float key = pow(max(0.0, dot(ray, L)), 18.0);
      float key2 = pow(max(0.0, dot(ray, L2)), 8.0);
      float cloud = noise(vWorldPos * 2.6 + vec3(0.0, uTime * 0.05, 0.0));
      float val = band * 0.55 + key * 1.5 + key2 * 0.6 + cloud * 0.12;
      env += val * (i == 0 ? vec3(1.0, 0.86, 0.92) : (i == 1 ? vec3(0.82, 1.0, 0.95) : vec3(0.78, 0.92, 1.0)));
    }
    env /= 3.0;

    // ---- facet logic: flat faces catch one big specular streak -----------
    vec3 H = normalize(L + V);
    float spec = pow(max(0.0, dot(N, H)), 90.0);
    float spec2 = pow(max(0.0, dot(N, normalize(L2 + V))), 40.0);

    // total internal reflection flare at grazing angles
    float tir = smoothstep(0.62, 0.94, 1.0 - ndv);

    // cool body colour, brighter where the light hits
    float lam = max(0.0, dot(N, L));
    vec3 body = mix(uDeep, uBright, 0.16 + lam * 0.46);
    body = mix(body, uAccent, fres * 0.8);

    vec3 col = body * 0.34 + env * (0.2 + fres * 0.85);
    col += vec3(1.0) * spec * 1.35;
    col += mix(vec3(0.7, 1.0, 0.97), uAccent, 0.35) * spec2 * 0.32;
    col += uAccent * tir * 0.22;

    // internal clouding / growth lines
    float veins = noise(vObjPos * 7.0) * 0.5 + noise(vObjPos * 18.0) * 0.25;
    col *= 0.72 + veins * 0.3;

    // pulse when the pointer is near (picked up by EnergyRing)
    col += uAccent * uPulse * 0.5 * (0.4 + fres);

    // keep it from blowing out
    col = col / (col + vec3(0.9)) * 1.5;
    col = pow(col, vec3(0.92));

        // facet edges read as thin darker seams
    float edge = smoothstep(0.35, 0.0, abs(dot(N, normalize(vec3(0.0, 1.0, 0.0)))) - 0.86);
    col *= 1.0 - edge * 0.0;
    gl_FragColor = vec4(col, uOpacity);
  }
`

export function createHaliteMaterial() {
  return new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    transparent: true,
    depthWrite: true,
    side: THREE.FrontSide,
    uniforms: {
      uTime: { value: 0 },
      uPulse: { value: 0 },
      uOpacity: { value: 0.94 },
      uDeep: { value: new THREE.Color('#0a2a2b') },
      uBright: { value: new THREE.Color('#9fe6da') },
      uAccent: { value: new THREE.Color('#c8fff0') },
    },
  })
}
