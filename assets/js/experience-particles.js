/* SinaiCore Particle Morph — crystal -> granules/tablets -> bag -> globe.
   Lightweight particle system (no heavy GLB files), scrubbed by GSAP ScrollTrigger
   via window.__morph {from, to, progress, rotY}. */
(function(){
  "use strict";
  function init(){
    var wrap = document.getElementById("webgl-wrap");
    var canvas = document.getElementById("particles-canvas");
    if(!wrap || !canvas || typeof THREE === "undefined") return;
    var renderer;
    try{ renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true, antialias:true}); }
    catch(e){ return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, .4, 9.5);
    scene.add(new THREE.AmbientLight(0xffffff, .8));
    var key = new THREE.DirectionalLight(0xffffff, 1.2); key.position.set(4,6,6); scene.add(key);
    var rim = new THREE.DirectionalLight(0x7ec3e8, .8); rim.position.set(-5,3,-4); scene.add(rim);

    var N = 3500;
    function rand(a,b){ return a + Math.random()*(b-a); }
    /* Shape A: salt crystal (octahedron surface) */
    function shapeCrystal(){
      var pts = [];
      for(var i=0;i<N;i++){
        var v = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1));
        if(v.lengthSq() < .01) v.set(1,0,0);
        v.normalize();
        var m = Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z));
        v.divideScalar(m).multiplyScalar(1.55);
        pts.push(v);
      }
      return pts;
    }
    /* Shape B: granules pile + water-softening tablets (cylinders) */
    function shapeGranules(){
      var pts = [];
      var tablets = [];
      for(var tx=-1; tx<=1; tx++) for(var ty=-1; ty<=1; ty++) for(var tz=0; tz<2; tz++)
        tablets.push(new THREE.Vector3(tx*.85, ty*.85, -.6+tz*1.1));
      for(var i=0;i<N;i++){
        if(i % 5 < 2 && tablets.length){ /* tablet surface */
          var c = tablets[Math.floor(Math.random()*tablets.length)];
          var a = Math.random()*Math.PI*2, h = rand(-.09,.09), r = .34;
          var p = new THREE.Vector3(c.x + Math.cos(a)*r, c.y + Math.sin(a)*r, c.z + h);
          if(Math.random() < .35) p.set(c.x + rand(-r,r), c.y + rand(-r,r), c.z + (Math.random()<.5? .09 : -.09));
          pts.push(p);
        } else { /* granules in pile */
          var v = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1)).normalize().multiplyScalar(Math.pow(Math.random(),.5)*1.45);
          pts.push(v);
        }
      }
      return pts;
    }
    /* Shape C: jumbo bag box surface */
    function shapeBag(){
      var pts = [], W=2.3, H=2.9, D=.95;
      for(var i=0;i<N;i++){
        var face = Math.floor(Math.random()*6), u = rand(-.5,.5), v = rand(-.5,.5), p;
        if(face===0) p = new THREE.Vector3(u*W, v*H, D/2);
        else if(face===1) p = new THREE.Vector3(u*W, v*H, -D/2);
        else if(face===2) p = new THREE.Vector3(u*W, H/2, v*D);
        else if(face===3) p = new THREE.Vector3(u*W, -H/2, v*D);
        else if(face===4) p = new THREE.Vector3(W/2, v*H, u*D);
        else p = new THREE.Vector3(-W/2, v*H, u*D);
        pts.push(p);
      }
      return pts;
    }
    /* Shape D: dotted globe (continents only) */
    var CONTINENTS = [
      [-35,70,-10,35],   /* Africa lat/lon box approx */
      [36,72,3,32],      /* Europe */
      [5,55,60,180],     /* Asia */
      [15,72,-170,-50],  /* N America */
      [-55,15,-82,-35],  /* S America */
      [-40,-10,112,155], /* Australia */
      [22,32,25,35]      /* Egypt highlight */
    ];
    function inContinent(lat, lon){
      for(var i=0;i<CONTINENTS.length;i++){
        var c = CONTINENTS[i];
        if(lat>=c[0] && lat<=c[1] && lon>=c[2] && lon<=c[3]) return true;
      }
      return false;
    }
    function latLonToVec(lat, lon, r){
      var phi = (90-lat)*Math.PI/180, theta = (lon+180)*Math.PI/180;
      return new THREE.Vector3(-r*Math.sin(phi)*Math.cos(theta), r*Math.cos(phi), r*Math.sin(phi)*Math.sin(theta));
    }
    function shapeGlobe(){
      var pts = [], tries = 0;
      while(pts.length < N && tries < N*30){
        tries++;
        var lat = rand(-58, 78), lon = rand(-180, 180);
        if(inContinent(lat, lon)) pts.push(latLonToVec(lat, lon, 1.95));
      }
      while(pts.length < N) pts.push(latLonToVec(rand(-50,70), rand(-170,170), 1.95));
      return pts;
    }
    var SHAPES = [shapeCrystal(), shapeGranules(), shapeBag(), shapeGlobe()];
    var COLORS = [
      new THREE.Color(0xffffff), new THREE.Color(0xbfe3f5),
      new THREE.Color(0xffffff), new THREE.Color(0x7ec3e8),
      new THREE.Color(0x1A6B9C), new THREE.Color(0xffffff),
      new THREE.Color(0x7ec3e8), new THREE.Color(0x1A6B9C)
    ];
    var delays = []; for(var d=0; d<N; d++) delays.push(Math.random()*.45);

    var geo = new THREE.BufferGeometry();
    var pos = new Float32Array(N*3), col = new Float32Array(N*3);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    /* Round sprite texture */
    var sc = document.createElement("canvas"); sc.width=sc.height=64;
    var sx = sc.getContext("2d");
    var sg = sx.createRadialGradient(32,32,0,32,32,32);
    sg.addColorStop(0,"rgba(255,255,255,1)"); sg.addColorStop(.4,"rgba(255,255,255,.85)"); sg.addColorStop(1,"rgba(255,255,255,0)");
    sx.fillStyle=sg; sx.fillRect(0,0,64,64);
    var sprite = new THREE.CanvasTexture(sc);
    var mat = new THREE.PointsMaterial({size:.085, map:sprite, vertexColors:true, transparent:true, opacity:.95, depthWrite:false, blending:THREE.AdditiveBlending});
    var points = new THREE.Points(geo, mat);
    var group = new THREE.Group(); group.add(points); scene.add(group);

    /* Export routes from Egypt (Arish/Suez) — visible in globe scene */
    var routes = new THREE.Group(); scene.add(routes);
    var egypt = latLonToVec(31, 32, 1.95);
    var dests = [[50,10],[35,105],[-25,25],[40,-100],[-15,-60],[-25,135]];
    var routeMats = [];
    dests.forEach(function(dd){
      var end = latLonToVec(dd[0], dd[1], 1.95);
      var mid = egypt.clone().add(end).multiplyScalar(.5).normalize().multiplyScalar(2.9);
      var curve = new THREE.QuadraticBezierCurve3(egypt, mid, end);
      var pts2 = curve.getPoints(48);
      var g2 = new THREE.BufferGeometry().setFromPoints(pts2);
      var m2 = new THREE.LineBasicMaterial({color:0xc96a1b, transparent:true, opacity:0});
      routes.add(new THREE.Line(g2, m2)); routeMats.push(m2);
      var dot = new THREE.Mesh(new THREE.SphereGeometry(.07,10,10), new THREE.MeshBasicMaterial({color:0xc96a1b, transparent:true, opacity:0}));
      dot.position.copy(end); routes.add(dot); routeMats.push(dot.material);
      var src = new THREE.Mesh(new THREE.SphereGeometry(.09,10,10), new THREE.MeshBasicMaterial({color:0xff8c42, transparent:true, opacity:0}));
      src.position.copy(egypt); routes.add(src); routeMats.push(src.material);
    });

    function resize(){
      var w = wrap.clientWidth || window.innerWidth, h = wrap.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize); resize();

    var clock = new THREE.Clock();
    var tmp = new THREE.Vector3(), tmpC = new THREE.Color();
    function animate(){
      requestAnimationFrame(animate);
      if(document.hidden) return;
      var m = window.__morph || {from:0, to:0, progress:0, rotY:0};
      var A = SHAPES[m.from], B = SHAPES[m.to];
      var time = clock.getElapsedTime();
      for(var i=0;i<N;i++){
        var lt = Math.max(0, Math.min(1, (m.progress*1.45 - delays[i])));
        lt = lt*lt*(3-2*lt); /* smoothstep */
        tmp.copy(A[i]).lerp(B[i], lt);
        tmp.y += Math.sin(time*1.2 + i*.01)*.03; /* gentle float */
        pos[i*3]=tmp.x; pos[i*3+1]=tmp.y; pos[i*3+2]=tmp.z;
        tmpC.copy(COLORS[m.from*2]).lerp(COLORS[m.to*2 + (i%2)], lt);
        col[i*3]=tmpC.r; col[i*3+1]=tmpC.g; col[i*3+2]=tmpC.b;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
      group.rotation.y = (m.rotY||0) + time*.08;
      group.rotation.x = .18;
      /* Routes fade in only when globe is formed */
      var globeAmt = (m.to===3) ? m.progress : (m.from===3 ? 1-m.progress : 0);
      routeMats.forEach(function(mm){ mm.opacity = Math.max(0, Math.min(1, globeAmt*1.4)) * (.65 + .35*Math.sin(time*2.2)); });
      routes.rotation.y = group.rotation.y;
      renderer.render(scene, camera);
    }
    wrap.hidden = false;
    canvas.style.position = "absolute"; canvas.style.inset = "0";
    canvas.style.width = "100%"; canvas.style.height = "100%";
    animate();
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ setTimeout(init, 60); });
  } else { setTimeout(init, 60); }
})();
