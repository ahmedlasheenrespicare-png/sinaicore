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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    if("outputColorSpace" in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
    else renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, .4, 9.5);

    /* Lights: hemisphere + key with shadows + rim */
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8fb3cc, .65));
    var key = new THREE.DirectionalLight(0xffffff, 1.35);
    key.position.set(4.5,7.5,6.5); key.castShadow = true;
    key.shadow.mapSize.set(2048,2048);
    key.shadow.radius = 5; key.shadow.bias = -0.0006;
    key.shadow.camera.left=-6; key.shadow.camera.right=6;
    key.shadow.camera.top=6; key.shadow.camera.bottom=-6;
    scene.add(key);
    var rim = new THREE.DirectionalLight(0x7ec3e8, .7);
    rim.position.set(-6,3,-5); scene.add(rim);
    var fill = new THREE.DirectionalLight(0xffffff, .35);
    fill.position.set(0,-2,5); scene.add(fill);

    /* ---------- Textures (canvas-drawn, industrial detail) ---------- */
    function frontTexture(weightLabel){
      var c=document.createElement("canvas"); c.width=1536; c.height=1920;
      var x=c.getContext("2d");
      x.scale(1.5, 1.5);                     /* artwork is authored in 1024x1280 */
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
      x.fillText(weightLabel || "50 kg",512,580);
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
      var tex=new THREE.CanvasTexture(c); tex.anisotropy=16; if("colorSpace" in tex) tex.colorSpace=THREE.SRGBColorSpace; tex.minFilter=THREE.LinearMipmapLinearFilter; return tex;
    }
    function backTexture(){
      var c=document.createElement("canvas"); c.width=1536; c.height=1920;
      var x=c.getContext("2d");
      x.scale(1.5, 1.5);
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
      var tex=new THREE.CanvasTexture(c); tex.anisotropy=16; if("colorSpace" in tex) tex.colorSpace=THREE.SRGBColorSpace; tex.minFilter=THREE.LinearMipmapLinearFilter; return tex;
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
    var weaveTex = ppTexture();
    weaveTex.wrapS = weaveTex.wrapT = THREE.RepeatWrapping; weaveTex.repeat.set(6,6);
    var ppMat = new THREE.MeshStandardMaterial({map:weaveTex, bumpMap:weaveTex, bumpScale:.02, roughness:.82});
    var frontMat = new THREE.MeshStandardMaterial({map:frontTexture(), bumpMap:weaveTex, bumpScale:.012, roughness:.62, metalness:.02});
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
    /* ---------- Floating elements (reference: product hero with floating bits) ----------
       Salt crystals, granules and a few large shards of different sizes drift and
       orbit around the bag; scroll speed adds energy, so they react to the story. */
    var floats = [];
    var floatGroup = new THREE.Group(); scene.add(floatGroup);
    var matCrystal = new THREE.MeshStandardMaterial({color:0xffffff, roughness:.18, metalness:.04, transparent:true, opacity:.96});
    var matGranule = new THREE.MeshStandardMaterial({color:0xf2f8fc, roughness:.42, metalness:.02});
    var matLarge   = new THREE.MeshStandardMaterial({color:0xeaf5fb, roughness:.12, metalness:.06, transparent:true, opacity:.62});
    var geoOcta = new THREE.OctahedronGeometry(1);
    var geoIco  = new THREE.IcosahedronGeometry(1, 0);
    var geoDodec= new THREE.DodecahedronGeometry(1, 0);
    function addFloat(kind, size, radius, angle, yBase, speed, opacityBoost){
      var geo = kind === "shard" ? geoIco : (kind === "granule" ? geoDodec : geoOcta);
      var mat = kind === "large" ? matLarge : (kind === "granule" ? matGranule : matCrystal);
      var m = new THREE.Mesh(geo, mat);
      m.scale.setScalar(size);
      m.castShadow = false; m.receiveShadow = false;
      m.userData = {
        radius: radius, angle: angle, yBase: yBase,
        speed: speed, bob: Math.random()*6.28, bobSpeed: .4 + Math.random()*.7,
        spin: (Math.random()-.5)*.9, spin2: (Math.random()-.5)*.9,
        baseScale: size, parallax: .6 + Math.random()*1.4
      };
      floatGroup.add(m); floats.push(m);
      return m;
    }
    /* small crystals — the majority, read as "salt dust" */
    for(var f1=0; f1<34; f1++){
      addFloat("crystal", .035 + Math.random()*.075, 1.9 + Math.random()*2.6,
               Math.random()*6.28, (Math.random()-.5)*4.6, .05 + Math.random()*.13);
    }
    /* granules — rounder, slightly larger, fewer */
    for(var f2=0; f2<20; f2++){
      addFloat("granule", .05 + Math.random()*.07, 2.1 + Math.random()*2.2,
               Math.random()*6.28, (Math.random()-.5)*4.0, .04 + Math.random()*.1);
    }
    /* medium shards */
    for(var f3=0; f3<8; f3++){
      addFloat("shard", .12 + Math.random()*.1, 2.6 + Math.random()*1.8,
               Math.random()*6.28, (Math.random()-.5)*3.2, .03 + Math.random()*.07);
    }
    /* a few big glassy crystals for depth */
    for(var f4=0; f4<5; f4++){
      addFloat("large", .2 + Math.random()*.14, 3.1 + Math.random()*1.4,
               Math.random()*6.28, (Math.random()-.5)*2.6, .02 + Math.random()*.05);
    }

    /* ---------- Product family (reference: one product per beat, lineup at the end) ----------
       50 kg bag = the hero already built above. A jumbo FIBC clone and a stack of
       softener tablets join it for the formats chapter and the closing lineup. */
    var jumboTex = frontTexture("1,000 kg");
    var jumboFaceMat = new THREE.MeshStandardMaterial({map:jumboTex, bumpMap:weaveTex, bumpScale:.012, roughness:.62, metalness:.02});
    var jumbo = bag.clone(true);
    jumbo.traverse(function(o){ if(o.isMesh){ o.castShadow = true; o.receiveShadow = true; } });
    /* the clone keeps child order, so the printed faces can be re-skinned
       with the 1 tonne artwork (front panel + the label plane) */
    jumbo.children.forEach(function(child, i){
      if(bag.children[i] === front || bag.children[i] === label) child.material = jumboFaceMat;
    });
    jumbo.scale.setScalar(1.16);
    jumbo.position.set(0, 0, -1.15);
    jumbo.visible = false;
    scene.add(jumbo);

    var tablets = new THREE.Group();
    var tabGeo = new THREE.CylinderGeometry(.4, .4, .13, 44, 1);
    var tabMat = new THREE.MeshStandardMaterial({color:0xfcfdff, roughness:.38, metalness:.02});
    var tabEdge = new THREE.MeshStandardMaterial({color:0xeaf2f8, roughness:.55});
    var tabLayout = [[0,0,0],[.86,0,.1],[.43,0,.86],[-.43,0,.86],[-.86,0,.1],
                     [.43,-.16,.1],[-.43,-.16,.1],[0,-.32,0]];
    tabLayout.forEach(function(pos, i){
      var t = new THREE.Mesh(tabGeo, i % 3 === 0 ? tabEdge : tabMat);
      t.position.set(pos[0], pos[1], pos[2]);
      t.rotation.set((Math.random()-.5)*.06, Math.random()*3.14, (Math.random()-.5)*.06);
      t.castShadow = true; t.receiveShadow = true;
      t.userData = {bob: Math.random()*6.28, sp: .3 + Math.random()*.4};
      tablets.add(t);
    });
    tablets.visible = false;
    scene.add(tablets);

    /* tablet-shaped floating elements (they match the "tablets" bullet list) */
    var floatTablets = [];
    for(var ft = 0; ft < 10; ft++){
      var fm2 = new THREE.Mesh(tabGeo, tabMat);
      fm2.scale.setScalar(.9 + Math.random()*.5);
      fm2.userData = {
        radius: 2.0 + Math.random()*1.9, angle: Math.random()*6.28,
        yBase: (Math.random()-.5)*3.6, speed: .03 + Math.random()*.08,
        bob: Math.random()*6.28, bobSpeed: .5 + Math.random()*.6,
        spin: (Math.random()-.5)*.5, spin2: (Math.random()-.5)*.5,
        baseScale: .9 + Math.random()*.5, parallax: 1
      };
      floatGroup.add(fm2); floatTablets.push(fm2);
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
    var dragTarget = document.getElementById("stage-drag") || canvas;
    dragTarget.addEventListener("pointerdown", function(e){ dragging=true; sx=e.clientX; sy=e.clientY; br=dragRy; bx=dragRx; if(dragTarget.setPointerCapture) dragTarget.setPointerCapture(e.pointerId); });
    dragTarget.addEventListener("pointermove", function(e){
      if(!dragging) return;
      dragRy = br + (e.clientX-sx)*.5;
      dragRx = Math.max(-30, Math.min(30, bx - (e.clientY-sy)*.35));
    });
    ["pointerup","pointercancel"].forEach(function(ev){ dragTarget.addEventListener(ev, function(){ dragging=false; }); });
    dragTarget.addEventListener("dblclick", function(){ dragRy=0; dragRx=0; });

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
      /* floating elements: orbit + bob + scroll energy (reference product hero) */
      var vel = (window.__story && window.__story.velocity) || 0;
      var energy = 1 + Math.min(.7, Math.abs(vel) * .12);
      floatGroup.rotation.y = bag.rotation.y * .35;
      floatGroup.visible = bagAmt > .12;   /* they belong to the bag chapters */

      /* ---- product family reveal, keyed to the story chapter index ---- */
      var idx = (window.__story && window.__story.index) || 0;
      function step(a, b){ var t = (idx - a) / Math.max(.001, (b - a)); return t < 0 ? 0 : (t > 1 ? 1 : t * t * (3 - 2 * t)); }
      var jumboW = step(4.15, 5.15);        /* appears with "05 — Formats" */
      var tabletW = step(1.15, 2.15);       /* tablets join with "02 — The grades" */
      jumbo.visible = jumboW > .01 && bagAmt > .12;
      jumbo.scale.setScalar(1.16 * (0.55 + 0.45 * jumboW));
      jumbo.position.set(bag.position.x + 2.15 * jumboW, bag.position.y - .1, -1.15);
      jumbo.rotation.copy(bag.rotation);
      jumbo.rotation.y += .35;
      tablets.visible = tabletW > .01 && bagAmt > .12;
      tablets.scale.setScalar(0.55 + 0.45 * tabletW);
      tablets.position.set(bag.position.x - 2.05 * tabletW, bag.position.y - 1.15, .55);
      tablets.rotation.y = bag.rotation.y * .8;
      tablets.children.forEach(function(t, ti){
        t.position.y = tabLayout[ti][1] + Math.sin(time * t.userData.sp * 2 + t.userData.bob) * .03;
      });
      /* tablet floats only orbit while the tablets are part of the story */
      floatTablets.forEach(function(ft2, fi2){
        var u2 = ft2.userData;
        u2.angle += u2.speed * .006 * energy;
        u2.bob += u2.bobSpeed * .012 * energy;
        var r2 = u2.radius;
        ft2.position.x = Math.cos(u2.angle) * r2;
        ft2.position.z = Math.sin(u2.angle) * r2 * .55;
        ft2.position.y = u2.yBase + Math.sin(u2.bob) * .16;
        ft2.rotation.x += u2.spin * .004;
        ft2.rotation.z += u2.spin2 * .004;
        var s2 = u2.baseScale * tabletW;
        ft2.scale.setScalar(Math.max(.001, s2));
        ft2.visible = tabletW > .02;
      });
      floats.forEach(function(fm, fi){
        var u = fm.userData;
        u.angle += u.speed * .006 * energy;
        u.bob += u.bobSpeed * .012 * energy;
        var r = u.radius * (1 + Math.sin(u.bob*.7) * .04);
        fm.position.x = Math.cos(u.angle) * r;
        fm.position.z = Math.sin(u.angle) * r * .55;
        fm.position.y = u.yBase + Math.sin(u.bob) * .18;
        fm.rotation.x += u.spin * .004 * energy;
        fm.rotation.y += u.spin2 * .004 * energy;
        var pulse = 1 + Math.sin(u.bob*1.3 + fi) * .06;
        fm.scale.setScalar(u.baseScale * pulse);
      });
      key.intensity = 1.35 * cur.light; rim.intensity = .7 * cur.light; /* per-chapter lighting */
      var mx = (window.__mouse && window.__mouse.x) || 0;
      var my = (window.__mouse && window.__mouse.y) || 0;
      /* Fixed canvas is full-viewport: shift the bag into the left half,
         exactly like art-directing the reference's single WebGL layer. */
      var camOffset = (window.innerWidth >= 1100) ? halfW/2 : 0;
      camera.position.x += ((bag.position.x + camOffset + mx * .35) - camera.position.x) * .1;
      camera.position.y += ((.4 + bag.position.y * .5 - my * .25) - camera.position.y) * .1;
      camera.lookAt(bag.position.x + camOffset, bag.position.y, 0);
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
      /* Solid bag fades in only in Scene 3 (morph to bag shape) */
      var W = (window.__story && window.__story.weights) || [1,0,0,0];
      /* the bag is the protagonist: visible from the first screen, it only
         steps back while the globe (chapter 06) takes the frame */
      var bagAmt = 1 - Math.min(1, (W[3] || 0) * 1.25);
      canvas.style.opacity = String(Math.max(0, Math.min(1, bagAmt*1.6)));
      var pc = document.getElementById("particles-canvas");
      if(pc) pc.style.opacity = String(.35 + .5 * (1 - bagAmt));
      renderer.render(scene, camera);
    }
    wrap.hidden = false;
    canvas.style.position = "absolute"; canvas.style.inset = "0";
    canvas.style.width = "100%"; canvas.style.height = "100%";
    canvas.style.zIndex = "2"; canvas.style.opacity = "0";
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
