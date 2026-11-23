/* SinaiCore 3D Experience v10 — detailed industrial bag model (Three.js).
   Scroll targets shared via window.__bagTarget {ry,rx,rz,explode,s,x,y,camZ} */
(function(){
  "use strict";
  function init(){
    var wrap = document.getElementById("webgl-wrap");
    var canvas = document.getElementById("webgl");
    var cssScene = document.getElementById("scene");
    if(!wrap || !canvas || typeof THREE === "undefined") return;
    var renderer;
    try{ renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true, antialias:true}); }
    catch(e){ return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, .4, 9.5);

    /* Lights: hemisphere + key with shadows + rim */
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8fb3cc, .65));
    var key = new THREE.DirectionalLight(0xffffff, 1.35);
    key.position.set(4,7,6); key.castShadow = true;
    key.shadow.mapSize.set(1024,1024);
    key.shadow.camera.left=-6; key.shadow.camera.right=6;
    key.shadow.camera.top=6; key.shadow.camera.bottom=-6;
    scene.add(key);
    var rim = new THREE.DirectionalLight(0x7ec3e8, .7);
    rim.position.set(-6,3,-5); scene.add(rim);
    var fill = new THREE.DirectionalLight(0xffffff, .35);
    fill.position.set(0,-2,5); scene.add(fill);

    /* ---------- Textures (canvas-drawn, industrial detail) ---------- */
    function frontTexture(){
      var c=document.createElement("canvas"); c.width=1024; c.height=1280;
      var x=c.getContext("2d");
      var g=x.createLinearGradient(0,0,0,1280);
      g.addColorStop(0,"#ffffff"); g.addColorStop(1,"#e8f2f8");
      x.fillStyle=g; x.fillRect(0,0,1024,1280);
      /* woven PP hint */
      x.strokeStyle="rgba(26,107,156,.07)"; x.lineWidth=2;
      for(var i=0;i<1024;i+=16){ x.beginPath(); x.moveTo(i,0); x.lineTo(i,1280); x.stroke(); }
      /* top stitch band */
      x.fillStyle="#c96a1b"; x.fillRect(0,0,1024,36);
      x.fillStyle="#fff";
      for(var s=20;s<1024;s+=44){ x.fillRect(s,10,22,16); }
      /* logo */
      x.fillStyle="#0E1A2B"; x.font="700 110px Georgia, serif"; x.textAlign="center";
      x.fillText("SinaiCore",512,300);
      x.fillStyle="#1A6B9C"; x.font="600 52px Georgia, serif";
      x.fillText("INDUSTRIAL SEA SALT",512,380);
      x.fillStyle="#5b6b7f"; x.font="500 38px Arial";
      x.fillText("Solar Evaporation  ·  High Purity",512,440);
      x.fillStyle="#0E1A2B"; x.font="700 96px Georgia, serif";
      x.fillText("50 kg",512,580);
      x.font="500 32px Arial"; x.fillStyle="#5b6b7f";
      x.fillText("NET WEIGHT",512,630);
      /* barcode */
      x.fillStyle="#0E1A2B";
      var bx=312; while(bx<700){ var w=4+Math.random()*14; x.fillRect(bx,700,w,110); bx+=w+6; }
      x.font="500 28px monospace"; x.fillText("8 622001 500501",512,850);
      x.fillStyle="#1A6B9C"; x.font="700 34px Arial";
      x.fillText("PRODUCT OF EGYPT",512,960);
      x.fillStyle="#5b6b7f"; x.font="500 28px Arial";
      x.fillText("North Sinai  ·  Batch Traceable",512,1010);
      /* bottom wave */
      x.fillStyle="#1A6B9C"; x.beginPath(); x.moveTo(0,1120);
      x.bezierCurveTo(280,1060,720,1180,1024,1100); x.lineTo(1024,1280); x.lineTo(0,1280); x.fill();
      var tex=new THREE.CanvasTexture(c); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace; return tex;
    }
    function backTexture(){
      var c=document.createElement("canvas"); c.width=1024; c.height=1280;
      var x=c.getContext("2d");
      x.fillStyle="#14567d"; x.fillRect(0,0,1024,1280);
      x.fillStyle="#fff"; x.font="700 64px Georgia, serif"; x.textAlign="center";
      x.fillText("Batch Information",512,180);
      x.font="500 36px Arial"; x.textAlign="left";
      var rows=[["Product","Industrial Sea Salt"],["Grade","Refined · NaCl ≥ 99.5%"],["Moisture","≤ 0.2%"],["Batch No.","SC-2026-1107"],["Origin","North Sinai, Egypt"],["Packing","50 kg PP/PE Bag"]];
      rows.forEach(function(r,i){
        var y=300+i*110;
        x.fillStyle="#7ec3e8"; x.fillText(r[0],90,y);
        x.fillStyle="#fff"; x.fillText(r[1],90,y+52);
        x.strokeStyle="rgba(255,255,255,.25)"; x.beginPath(); x.moveTo(90,y+78); x.lineTo(934,y+78); x.stroke();
      });
      x.textAlign="center"; x.fillStyle="#cfe2ee"; x.font="500 32px Arial";
      x.fillText("☂  Keep Dry      ↑↑  This Side Up      ⚖  50 kg",512,1080);
      x.fillText("info@sinaicore.com  ·  +20 110 753 9914",512,1150);
      var tex=new THREE.CanvasTexture(c); tex.anisotropy=8; tex.colorSpace=THREE.SRGBColorSpace; return tex;
    }
    function saltTexture(){
      var c=document.createElement("canvas"); c.width=512; c.height=512;
      var x=c.getContext("2d");
      x.fillStyle="#eef3f6"; x.fillRect(0,0,512,512);
      for(var i=0;i<2200;i++){
        x.fillStyle="rgba(255,255,255,"+(.5+Math.random()*.5)+")";
        var s=3+Math.random()*9; x.fillRect(Math.random()*512,Math.random()*512,s,s);
      }
      for(var j=0;j<600;j++){
        x.fillStyle="rgba(150,180,205,"+(.25+Math.random()*.3)+")";
        var s2=3+Math.random()*7; x.fillRect(Math.random()*512,Math.random()*512,s2,s2);
      }
      var tex=new THREE.CanvasTexture(c); tex.colorSpace=THREE.SRGBColorSpace; return tex;
    }
    function ppTexture(){
      var c=document.createElement("canvas"); c.width=256; c.height=256;
      var x=c.getContext("2d");
      x.fillStyle="#d9ecf7"; x.fillRect(0,0,256,256);
      x.strokeStyle="rgba(26,107,156,.22)"; x.lineWidth=3;
      for(var i=0;i<256;i+=10){ x.beginPath(); x.moveTo(i,0); x.lineTo(i,256); x.stroke(); x.beginPath(); x.moveTo(0,i); x.lineTo(256,i); x.stroke(); }
      var t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(4,4); return t;
    }

    /* ---------- Detailed bag: shell, liner, salt, gussets, loops, folds ---------- */
    var bag = new THREE.Group(); scene.add(bag);
    var W=2.3, H=2.9, D=.95;
    var ppMat = new THREE.MeshStandardMaterial({map:ppTexture(), roughness:.85});
    var frontMat = new THREE.MeshStandardMaterial({map:frontTexture(), roughness:.55});
    var backMat = new THREE.MeshStandardMaterial({map:backTexture(), roughness:.7});
    var linerMat = new THREE.MeshStandardMaterial({color:0xa9d0e8, roughness:.3, transparent:true, opacity:.5});
    var saltMat = new THREE.MeshStandardMaterial({map:saltTexture(), roughness:.95});
    var loopMat = new THREE.MeshStandardMaterial({color:0x1A6B9C, roughness:.6});

    function part(geo, mat, z){
      var m = new THREE.Mesh(geo, mat);
      m.position.z = z; m.castShadow = true; m.receiveShadow = true;
      bag.add(m); return m;
    }
    var back = part(new THREE.BoxGeometry(W,H,D*.26), backMat, -D*.37);
    var liner = part(new THREE.BoxGeometry(W*.94,H*.94,D*.6), linerMat, -D*.12);
    var salt = part(new THREE.BoxGeometry(W*.88,H*.88,D*.48), saltMat, 0);
    var front = part(new THREE.BoxGeometry(W,H,D*.26), frontMat, D*.37);
    var label = new THREE.Mesh(new THREE.PlaneGeometry(W*.96,H*.96),
      new THREE.MeshStandardMaterial({map:frontTexture(), roughness:.5}));
    label.position.z = D*.37 + D*.13 + .012; label.castShadow = true; bag.add(label);

    /* Side gussets (folded PP sides) */
    var gusL = part(new THREE.BoxGeometry(.16,H*.92,D*.7), ppMat, 0); gusL.position.x = -W/2-.02;
    var gusR = part(new THREE.BoxGeometry(.16,H*.92,D*.7), ppMat, 0); gusR.position.x = W/2+.02;
    /* Top sealed fold + bottom fold */
    var topFold = part(new THREE.BoxGeometry(W*.96,.22,D*.8), ppMat, 0); topFold.position.y = H/2+.06;
    var botFold = part(new THREE.BoxGeometry(W*.96,.18,D*.8), ppMat, 0); botFold.position.y = -H/2-.04;
    /* Stitching bar (orange, like reference detail) */
    var stitch = new THREE.Mesh(new THREE.BoxGeometry(W*.92,.12,.16),
      new THREE.MeshStandardMaterial({color:0xc96a1b, roughness:.7}));
    stitch.position.set(0, H/2+.2, 0); stitch.castShadow = true; bag.add(stitch);
    /* Lifting loops (FIBC handles) — 4 loops on top */
    var loops = [];
    [[-W*.32],[W*.32]].forEach(function(px){
      var loop = new THREE.Mesh(new THREE.TorusGeometry(.22,.055,10,24,Math.PI), loopMat);
      loop.position.set(px[0], H/2+.18, 0); loop.castShadow = true;
      bag.add(loop); loops.push(loop);
    });
    /* Salt crystals on core surface */
    var crysGeo = new THREE.OctahedronGeometry(.07);
    var crysMat = new THREE.MeshStandardMaterial({color:0xffffff, roughness:.25});
    for(var ci=0; ci<40; ci++){
      var cm = new THREE.Mesh(crysGeo, crysMat);
      cm.position.set((Math.random()-.5)*1.8, (Math.random()-.5)*2.4, D*.25);
      cm.rotation.set(Math.random()*3, Math.random()*3, 0);
      salt.add(cm);
    }
    /* Inner exploded crystals */
    var innerCrystals = new THREE.Group();
    for(var cj=0; cj<22; cj++){
      var im = new THREE.Mesh(crysGeo, crysMat);
      im.position.set((Math.random()-.5)*1.6, (Math.random()-.5)*2.2, (Math.random()-.5)*.35);
      im.userData = {s: Math.random()*6.28, sp: .5+Math.random()};
      innerCrystals.add(im);
    }
    innerCrystals.scale.setScalar(.001); bag.add(innerCrystals);
    /* Floating crystals around bag */
    var crystals = [];
    for(var ck=0; ck<14; ck++){
      var fm = new THREE.Mesh(crysGeo, crysMat);
      fm.position.set((Math.random()-.5)*5.5, (Math.random()-.5)*4.2, (Math.random()-.5)*2.5);
      fm.userData = {s: Math.random()*6.28, sp: .4+Math.random()*.8, y: fm.position.y};
      scene.add(fm); crystals.push(fm);
    }
    /* Ground shadow catcher */
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(30,30),
      new THREE.ShadowMaterial({opacity:.22}));
    ground.rotation.x = -Math.PI/2; ground.position.y = -2.05; ground.receiveShadow = true; scene.add(ground);

    /* ---------- Sizing / drag / animate ---------- */
    function resize(){
      var w = wrap.clientWidth || window.innerWidth, h = wrap.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w/h; camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize); resize();
    var dragRy=0, dragRx=0, dragging=false, sx=0, sy=0, br=0, bx=0;
    canvas.addEventListener("pointerdown", function(e){ dragging=true; sx=e.clientX; sy=e.clientY; br=dragRy; bx=dragRx; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener("pointermove", function(e){
      if(!dragging) return;
      dragRy = br + (e.clientX-sx)*.5;
      dragRx = Math.max(-30, Math.min(30, bx - (e.clientY-sy)*.35));
    });
    ["pointerup","pointercancel"].forEach(function(ev){ canvas.addEventListener(ev, function(){ dragging=false; }); });
    canvas.addEventListener("dblclick", function(){ dragRy=0; dragRx=0; });

    var cur = {ry:45, rx:10, rz:0, explode:1, s:1, x:0, y:0, camZ:9.5, light:1.35};
    function lerp(a,b,t){ return a+(b-a)*t; }
    var clock = new THREE.Clock();
    function animate(){
      requestAnimationFrame(animate);
      if(document.hidden) return;
      var t = window.__bagTarget || {ry:45, rx:10, rz:0, explode:1, s:1, x:0, y:0, camZ:9.5, light:1.35};
      cur.ry = lerp(cur.ry, t.ry, .06);
      cur.rx = lerp(cur.rx, t.rx, .06);
      cur.explode = lerp(cur.explode, t.explode, .06);
      cur.s = lerp(cur.s, t.s, .06);
      cur.x = lerp(cur.x, t.x||0, .06);
      cur.y = lerp(cur.y, t.y||0, .06);
      cur.rz = lerp(cur.rz, t.rz||0, .06);
      cur.camZ = lerp(cur.camZ, t.camZ||9.5, .06);
      cur.light = lerp(cur.light, t.light||1.2, .06);
      var time = clock.getElapsedTime();
      bag.rotation.y = THREE.MathUtils.degToRad(cur.ry + dragRy);
      bag.rotation.x = THREE.MathUtils.degToRad(cur.rx + dragRx);
      bag.rotation.z = THREE.MathUtils.degToRad(cur.rz);
      var halfW = Math.tan(THREE.MathUtils.degToRad(camera.fov/2)) * camera.position.z * camera.aspect;
      var maxX = Math.max(0, halfW - 1.35);
      bag.position.x = Math.max(-maxX, Math.min(maxX, cur.x));
      bag.position.y = cur.y + Math.sin(time*.9)*.08;
      bag.scale.setScalar(cur.s);
      camera.position.z = cur.camZ;
      key.intensity = 1.35 * cur.light; rim.intensity = .7 * cur.light; /* per-chapter lighting */
      var mx = (window.__mouse && window.__mouse.x) || 0;
      var my = (window.__mouse && window.__mouse.y) || 0;
      camera.position.x = bag.position.x * .55 + mx * .35;
      camera.position.y = .4 + bag.position.y * .5 - my * .25;
      camera.lookAt(bag.position.x, bag.position.y, 0);
      /* Exploded: parts separate in Z, fan in Y, and rotate (reference parts fly + turn) */
      var e = cur.explode, fan = (e-1);
      back.position.z = -D*.37*e;  back.position.y = -.35*fan;  back.rotation.x = -.18*fan;
      liner.position.z = -D*.12*e; liner.position.y = -.12*fan;
      salt.position.z = 0;
      front.position.z = D*.37*e;  front.position.y = .65*fan;  front.rotation.x = .18*fan; /* cover rises up */
      label.position.z = D*.37*e + D*.13 + .012; label.position.y = 1.0*fan; label.rotation.x = .3*fan;
      gusL.position.x = -W/2-.02 - .5*fan; gusR.position.x = W/2+.02 + .5*fan;
      topFold.position.y = H/2+.06 + .55*fan; botFold.position.y = -H/2-.04 - .55*fan;
      stitch.position.y = H/2+.2 + .8*fan;
      loops.forEach(function(l){ l.position.y = H/2+.18 + .8*fan; });
      innerCrystals.scale.setScalar(Math.max(.001, fan * .9));
      innerCrystals.children.forEach(function(cm){
        cm.rotation.y = time*cm.userData.sp + cm.userData.s;
      });
      crystals.forEach(function(m){
        m.rotation.y = time*m.userData.sp + m.userData.s;
        m.rotation.x = time*m.userData.sp*.7;
        m.position.y = m.userData.y + Math.sin(time*m.userData.sp + m.userData.s)*.22;
      });
      renderer.render(scene, camera);
    }
    wrap.hidden = false;
    if(cssScene){
      cssScene.querySelectorAll(".layer,.gusset,.stitch").forEach(function(el){ el.style.display = "none"; });
      cssScene.style.background = "transparent";
    }
    animate();
  }
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", function(){ setTimeout(init, 50); });
  } else { setTimeout(init, 50); }
})();
