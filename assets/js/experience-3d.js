/* SinaiCore 3D Experience — real WebGL bag (Three.js), CSS bag is fallback.
   Scroll targets are shared via window.__bagTarget {ry,rx,explode,s,x} set by experience.js */
(function(){
  "use strict";
  function init(){
    var wrap = document.getElementById("webgl-wrap");
    var canvas = document.getElementById("webgl");
    var cssScene = document.getElementById("scene");
    if(!wrap || !canvas || typeof THREE === "undefined") return; /* CSS fallback stays */
    var renderer;
    try{
      renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true, antialias:true});
    }catch(e){ return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, .4, 7.2);
    camera.lookAt(0,0,0);

    scene.add(new THREE.AmbientLight(0xffffff, .75));
    var key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(4,6,6); scene.add(key);
    var fill = new THREE.DirectionalLight(0xbcd9ea, .5);
    fill.position.set(-5,2,-4); scene.add(fill);

    /* --- Canvas textures --- */
    function frontTexture(){
      var c = document.createElement("canvas"); c.width=512; c.height=640;
      var x = c.getContext("2d");
      var g = x.createLinearGradient(0,0,0,640);
      g.addColorStop(0,"#ffffff"); g.addColorStop(1,"#e8f2f8");
      x.fillStyle=g; x.fillRect(0,0,512,640);
      x.fillStyle="#1A6B9C";
      x.beginPath(); x.moveTo(0,470);
      x.bezierCurveTo(140,420,320,520,512,450); x.lineTo(512,640); x.lineTo(0,640); x.fill();
      x.fillStyle="#0E1A2B"; x.font="700 64px Georgia, serif"; x.textAlign="center";
      x.fillText("SinaiCore",256,250);
      x.fillStyle="#1A6B9C"; x.font="600 34px Georgia, serif";
      x.fillText("INDUSTRIAL SEA SALT",256,310);
      x.fillStyle="#5b6b7f"; x.font="500 24px Arial";
      x.fillText("Solar Evaporation · High Purity",256,355);
      x.fillStyle="#0E1A2B"; x.font="700 54px Georgia, serif";
      x.fillText("50 kg",256,430);
      x.font="500 20px Arial"; x.fillStyle="#5b6b7f";
      x.fillText("PRODUCT OF EGYPT",256,545);
      var tex = new THREE.CanvasTexture(c);
      tex.anisotropy = 4;
      return tex;
    }
    function saltTexture(){
      var c = document.createElement("canvas"); c.width=256; c.height=256;
      var x = c.getContext("2d");
      x.fillStyle="#eef3f6"; x.fillRect(0,0,256,256);
      for(var i=0;i<900;i++){
        x.fillStyle = "rgba(255,255,255,"+(.5+Math.random()*.5)+")";
        var s = 2+Math.random()*5;
        x.fillRect(Math.random()*256, Math.random()*256, s, s);
      }
      for(var j=0;j<220;j++){
        x.fillStyle = "rgba(160,185,205,"+(.25+Math.random()*.3)+")";
        var s2 = 2+Math.random()*4;
        x.fillRect(Math.random()*256, Math.random()*256, s2, s2);
      }
      return new THREE.CanvasTexture(c);
    }
    function ppTexture(){
      var c = document.createElement("canvas"); c.width=128; c.height=128;
      var x = c.getContext("2d");
      x.fillStyle="#d9ecf7"; x.fillRect(0,0,128,128);
      x.strokeStyle="rgba(26,107,156,.18)"; x.lineWidth=2;
      for(var i=0;i<128;i+=8){ x.beginPath(); x.moveTo(i,0); x.lineTo(i,128); x.stroke(); x.beginPath(); x.moveTo(0,i); x.lineTo(128,i); x.stroke(); }
      var t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3,3);
      return t;
    }

    /* --- Bag group: exploded layers as real meshes --- */
    var bag = new THREE.Group(); scene.add(bag);
    var W=2.3, H=2.9, D=.95;
    var ppMat = new THREE.MeshStandardMaterial({map:ppTexture(), roughness:.85});
    var frontMat = new THREE.MeshStandardMaterial({map:frontTexture(), roughness:.6});
    var backMat = new THREE.MeshStandardMaterial({color:0x14567d, roughness:.8});
    var linerMat = new THREE.MeshStandardMaterial({color:0xa9d0e8, roughness:.35, transparent:true, opacity:.55});
    var saltMat = new THREE.MeshStandardMaterial({map:saltTexture(), roughness:.95});

    function shell(mat){ return new THREE.Mesh(new THREE.BoxGeometry(W,H,D*.28), mat); }
    var back = shell(backMat); back.position.z = -D*.36;
    var liner = new THREE.Mesh(new THREE.BoxGeometry(W*.94,H*.94,D*.62), linerMat); liner.position.z = -D*.12;
    var salt = new THREE.Mesh(new THREE.BoxGeometry(W*.88,H*.88,D*.5), saltMat); salt.position.z = 0;
    var front = shell(frontMat); front.position.z = D*.36;
    /* Label plane on front face */
    var label = new THREE.Mesh(new THREE.PlaneGeometry(W*.9,H*.9),
      new THREE.MeshStandardMaterial({map:frontTexture(), roughness:.55}));
    label.position.z = D*.36 + D*.14 + .01;
    bag.add(back, liner, salt, front, label);

    /* Stitching bar on top */
    var stitch = new THREE.Mesh(new THREE.BoxGeometry(W*.9,.14,.18),
      new THREE.MeshStandardMaterial({color:0xc96a1b, roughness:.7}));
    stitch.position.set(0, H/2+.05, 0); bag.add(stitch);

    /* Floating crystals */
    var crystals = [];
    var crysGeo = new THREE.OctahedronGeometry(.09);
    var crysMat = new THREE.MeshStandardMaterial({color:0xffffff, roughness:.2, metalness:.1});
    for(var i=0;i<14;i++){
      var m = new THREE.Mesh(crysGeo, crysMat);
      m.position.set((Math.random()-.5)*5, (Math.random()-.5)*4, (Math.random()-.5)*2.5);
      m.userData = {s: Math.random()*Math.PI*2, sp: .4+Math.random()*.8, y: m.position.y};
      scene.add(m); crystals.push(m);
    }
    /* Ground shadow */
    var shadow = new THREE.Mesh(new THREE.CircleGeometry(1.9, 32),
      new THREE.MeshBasicMaterial({color:0x0E1A2B, transparent:true, opacity:.16}));
    shadow.rotation.x = -Math.PI/2; shadow.position.y = -1.9; scene.add(shadow);

    /* --- Sizing --- */
    function resize(){
      var w = wrap.clientWidth || 460, h = wrap.clientHeight || 520;
      renderer.setSize(w, h, false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize); resize();

    /* --- Drag rotate (shared offset with CSS fallback logic) --- */
    var dragRy = 0, dragRx = 0, dragging = false, sx=0, sy=0, br=0, bx=0;
    canvas.addEventListener("pointerdown", function(e){ dragging=true; sx=e.clientX; sy=e.clientY; br=dragRy; bx=dragRx; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener("pointermove", function(e){
      if(!dragging) return;
      dragRy = br + (e.clientX-sx)*.5;
      dragRx = Math.max(-30, Math.min(30, bx - (e.clientY-sy)*.35));
    });
    ["pointerup","pointercancel"].forEach(function(ev){ canvas.addEventListener(ev, function(){ dragging=false; }); });
    canvas.addEventListener("dblclick", function(){ dragRy=0; dragRx=0; });

    /* --- Animate: lerp to scroll target from experience.js --- */
    var cur = {ry:-18, rx:8, explode:1, s:1, x:0};
    function lerp(a,b,t){ return a+(b-a)*t; }
    var clock = new THREE.Clock();
    function animate(){
      requestAnimationFrame(animate);
      var t = window.__bagTarget || {ry:-18, rx:8, explode:1, s:1, x:0};
      cur.ry = lerp(cur.ry, t.ry, .06);
      cur.rx = lerp(cur.rx, t.rx, .06);
      cur.explode = lerp(cur.explode, t.explode, .06);
      cur.s = lerp(cur.s, t.s, .06);
      cur.x = lerp(cur.x, t.x||0, .06);
      var time = clock.getElapsedTime();
      bag.rotation.y = THREE.MathUtils.degToRad(cur.ry + dragRy + time*4);
      bag.rotation.x = THREE.MathUtils.degToRad(cur.rx + dragRx);
      bag.position.x = cur.x;
      bag.position.y = Math.sin(time*.9)*.08;
      bag.scale.setScalar(cur.s);
      var e = cur.explode;
      back.position.z = -D*.36 * e;
      liner.position.z = -D*.12 * e;
      salt.position.z = 0;
      front.position.z = D*.36 * e;
      label.position.z = D*.36 * e + D*.14 + .01;
      stitch.position.y = H/2+.05 + (e-1)*.35;
      crystals.forEach(function(m){
        m.rotation.y = time*m.userData.sp + m.userData.s;
        m.rotation.x = time*m.userData.sp*.7;
        m.position.y = m.userData.y + Math.sin(time*m.userData.sp + m.userData.s)*.22;
      });
      renderer.render(scene, camera);
    }
    /* WebGL works: hide CSS layers only, keep callouts/badges over canvas */
    wrap.hidden = false;
    if(cssScene){
      cssScene.querySelectorAll(".layer,.gusset,.stitch").forEach(function(el){ el.style.display = "none"; });
      cssScene.style.background = "transparent";
    }
    animate();
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){
      setTimeout(init, 50); /* let deferred Three.js load */
    });
  } else { setTimeout(init, 50); }
})();
