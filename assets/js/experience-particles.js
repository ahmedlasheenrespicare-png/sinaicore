/* SinaiCore Particle Morph v19 — crystal -> granules/tablets -> bag -> globe.
   8000 particles, ACES tone mapping, soft shadows, sparkles, export arcs. */
(function(){
  "use strict";
  function init(){
    var wrap = document.getElementById("webgl-wrap");
    var canvas = document.getElementById("particles-canvas");
    if(!wrap || !canvas || typeof THREE === "undefined") return;
    var renderer;
    try{ renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true, antialias:true}); }
    catch(e){ return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, window.innerWidth < 900 ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputEncoding = THREE.sRGBEncoding;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, .5, 9.2);
    /* Realistic lighting: key + fill + rim + ambient */
    scene.add(new THREE.AmbientLight(0xdfeaf5, .55));
    var key = new THREE.DirectionalLight(0xffffff, 1.35); key.position.set(5,7,6); scene.add(key);
    var fill = new THREE.DirectionalLight(0x9fc8e8, .5); fill.position.set(-6,2,4); scene.add(fill);
    var rim = new THREE.DirectionalLight(0x7ec3e8, .9); rim.position.set(-4,4,-6); scene.add(rim);
    var spot = new THREE.SpotLight(0xffffff, .7, 30, .5, .6); spot.position.set(0,8,4); scene.add(spot);

    /* Adaptive budget: lighter on small screens (perf requirement) */
    var N = window.innerWidth < 900 ? 4200 : 8000;
    function rand(a,b){ return a + Math.random()*(b-a); }
    /* A: crystal — faceted octahedron with slight jitter for sparkle */
    function shapeCrystal(){
      var pts = [];
      for(var i=0;i<N;i++){
        var v = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1));
        if(v.lengthSq() < .01) v.set(1,0,0);
        v.normalize();
        var m = Math.max(Math.abs(v.x), Math.abs(v.y), Math.abs(v.z));
        v.divideScalar(m).multiplyScalar(1.6);
        v.x += rand(-.04,.04); v.y += rand(-.04,.04); v.z += rand(-.04,.04);
        pts.push(v);
      }
      return pts;
    }
    /* B: granules pile + water-softening tablets (3x3x2 grid of cylinders) */
    function shapeGranules(){
      var pts = [], tablets = [];
      for(var tx=-1; tx<=1; tx++) for(var ty=-1; ty<=1; ty++) for(var tz=0; tz<2; tz++)
        tablets.push(new THREE.Vector3(tx*.9, ty*.9, -.65+tz*1.2));
      for(var i=0;i<N;i++){
        if(i % 5 < 2){
          var c = tablets[Math.floor(Math.random()*tablets.length)];
          var a = Math.random()*Math.PI*2, r = .36;
          var p = new THREE.Vector3(c.x + Math.cos(a)*r, c.y + Math.sin(a)*r, c.z + rand(-.1,.1));
          if(Math.random() < .3) p.set(c.x + rand(-r,r), c.y + rand(-r,r), c.z + (Math.random()<.5? .1 : -.1));
          pts.push(p);
        } else {
          var v = new THREE.Vector3(rand(-1,1), rand(-1,1), rand(-1,1)).normalize().multiplyScalar(Math.pow(Math.random(),.45)*1.5);
          pts.push(v);
        }
      }
      return pts;
    }
    /* C: jumbo bag box — denser on front face (printed area) */
    function shapeBag(){
      var pts = [], W=2.4, H=3.0, D=1.0;
      for(var i=0;i<N;i++){
        var face = Math.random() < .4 ? 0 : Math.floor(Math.random()*6), u = rand(-.5,.5), v = rand(-.5,.5), p;
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
    /* D: dotted globe — tighter continent boxes, Egypt highlighted */
    var CONTINENTS = [
      [-35,70,-10,35],[36,72,3,32],[5,55,60,180],[15,72,-170,-50],[-55,15,-82,-35],[-40,-10,112,155],[22,32,25,35]
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
      while(pts.length < N && tries < N*40){
        tries++;
        var lat = rand(-58, 78), lon = rand(-180, 180);
        if(inContinent(lat, lon)) pts.push(latLonToVec(lat, lon, 2.0));
      }
      while(pts.length < N) pts.push(latLonToVec(rand(-50,70), rand(-170,170), 2.0));
      return pts;
    }
    var SHAPES = [shapeCrystal(), shapeGranules(), shapeBag(), shapeGlobe()];
    var COLORS = [
      new THREE.Color(0xffffff), new THREE.Color(0xcfe9f7),
      new THREE.Color(0xffffff), new THREE.Color(0x8fd0f0),
      new THREE.Color(0x1A6B9C), new THREE.Color(0xffffff),
      new THREE.Color(0x7ec3e8), new THREE.Color(0x1A6B9C)
    ];
    var delays = []; for(var d=0; d<N; d++) delays.push(Math.random()*.5);

    var geo = new THREE.BufferGeometry();
    var pos = new Float32Array(N*3), col = new Float32Array(N*3);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    var sc = document.createElement("canvas"); sc.width=sc.height=64;
    var sx = sc.getContext("2d");
    var sg = sx.createRadialGradient(32,32,0,32,32,32);
    sg.addColorStop(0,"rgba(255,255,255,1)"); sg.addColorStop(.35,"rgba(255,255,255,.9)"); sg.addColorStop(1,"rgba(255,255,255,0)");
    sx.fillStyle=sg; sx.fillRect(0,0,64,64);
    var sprite = new THREE.CanvasTexture(sc);
    var mat = new THREE.PointsMaterial({size:.075, map:sprite, vertexColors:true, transparent:true, opacity:.96, depthWrite:false, blending:THREE.AdditiveBlending});
    var points = new THREE.Points(geo, mat);
    var group = new THREE.Group(); group.add(points); scene.add(group);

    /* Soft shadow ellipse under the model */
    var shadowTex = (function(){
      var c = document.createElement("canvas"); c.width=c.height=128;
      var x = c.getContext("2d");
      var g = x.createRadialGradient(64,64,0,64,64,64);
      g.addColorStop(0,"rgba(0,0,0,.55)"); g.addColorStop(1,"rgba(0,0,0,0)");
      x.fillStyle=g; x.fillRect(0,0,128,128);
      return new THREE.CanvasTexture(c);
    })();
    var shadow = new THREE.Mesh(new THREE.PlaneGeometry(4.4,1.6),
      new THREE.MeshBasicMaterial({map:shadowTex, transparent:true, opacity:.5, depthWrite:false}));
    shadow.rotation.x = -Math.PI/2; shadow.position.y = -2.35; scene.add(shadow);

    /* Export routes from Egypt with pulsing dashes */
    var routes = new THREE.Group(); scene.add(routes);
    var egypt = latLonToVec(31, 32, 2.0);
    var dests = [[50,10],[35,105],[-25,25],[40,-100],[-15,-60],[-25,135]];
    var routeMats = [];
    dests.forEach(function(dd){
      var end = latLonToVec(dd[0], dd[1], 2.0);
      var mid = egypt.clone().add(end).multiplyScalar(.5).normalize().multiplyScalar(3.1);
      var curve = new THREE.QuadraticBezierCurve3(egypt, mid, end);
      var pts2 = curve.getPoints(64);
      var g2 = new THREE.BufferGeometry().setFromPoints(pts2);
      var m2 = new THREE.LineBasicMaterial({color:0xff8c42, transparent:true, opacity:0});
      routes.add(new THREE.Line(g2, m2)); routeMats.push(m2);
      var dot = new THREE.Mesh(new THREE.SphereGeometry(.075,10,10), new THREE.MeshBasicMaterial({color:0xff8c42, transparent:true, opacity:0}));
      dot.position.copy(end); routes.add(dot); routeMats.push(dot.material);
      var src = new THREE.Mesh(new THREE.SphereGeometry(.1,12,12), new THREE.MeshBasicMaterial({color:0xffb26b, transparent:true, opacity:0}));
      src.position.copy(egypt); routes.add(src); routeMats.push(src.material);
    });

    function resize(){
      var w = wrap.clientWidth || window.innerWidth, h = wrap.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize); resize();

    var clock = new THREE.Clock();
    var tmp = new THREE.Vector3(), acc = new THREE.Vector3(), tmpC = new THREE.Color();
    var cAcc = new THREE.Color();
    function animate(){
      requestAnimationFrame(animate);
      if(document.hidden) return;
      /* Story weights (reference architecture): 4 subjects, blended */
      var W = (window.__story && window.__story.weights) || [1,0,0,0];
      var active = [];
      for(var k = 0; k < 4; k++) if(W[k] > .002) active.push(k);
      if(!active.length) active = [0];
      var time = clock.getElapsedTime();

      /* Camera keyframes from the story clock */
      var cam = window.__cam || {x:0, y:.5, z:9.6, tx:0, ty:0};
      camera.position.x += (cam.x - camera.position.x) * .08;
      camera.position.y += ((cam.y||.5) - camera.position.y) * .08;
      camera.position.z += ((cam.z||9.6) - camera.position.z) * .08;
      camera.lookAt(cam.tx||0, cam.ty||0, 0);
      /* keep the model inside the left half of the fixed canvas */
      var visW = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov/2)) * camera.position.z * camera.aspect;
      var desktop = window.innerWidth >= 1100;
      group.position.x += ((desktop ? -visW/4 : 0) - group.position.x) * .1;
      routes.position.x = group.position.x; shadow.position.x = group.position.x;

      for(var i = 0; i < N; i++){
        /* weighted blend of the four subject shapes */
        acc.set(0,0,0);
        cAcc.setRGB(0,0,0);
        var wsum = 0;
        for(var a = 0; a < active.length; a++){
          var si = active[a], wt = W[si];
          if(wt <= 0) continue;
          tmp.copy(SHAPES[si][i]);
          acc.addScaledVector(tmp, wt);
          tmpC.copy(COLORS[si*2 + (i%2)]);
          cAcc.r += tmpC.r * wt; cAcc.g += tmpC.g * wt; cAcc.b += tmpC.b * wt;
          wsum += wt;
        }
        if(wsum > 0){ acc.divideScalar(wsum); cAcc.r /= wsum; cAcc.g /= wsum; cAcc.b /= wsum; }
        acc.y += Math.sin(time*1.1 + i*.008) * .03;
        pos[i*3] = acc.x; pos[i*3+1] = acc.y; pos[i*3+2] = acc.z;
        col[i*3] = cAcc.r; col[i*3+1] = cAcc.g; col[i*3+2] = cAcc.b;
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;

      /* the model always turns slowly; scroll surge adds a little energy */
      var vel = (window.__story && window.__story.velocity) || 0;
      group.rotation.y += .0016 + Math.max(-.02, Math.min(.02, vel * .002));
      group.rotation.x = .16 + Math.sin(time*.3)*.04;
      shadow.material.opacity = .3 + .12*Math.sin(time*.8);

      /* export arcs only exist on the globe subject */
      var globeAmt = W[3] || 0;
      routeMats.forEach(function(mm){ mm.opacity = Math.max(0, Math.min(1, globeAmt*1.5)) * (.6 + .4*Math.sin(time*2.4)); });
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
