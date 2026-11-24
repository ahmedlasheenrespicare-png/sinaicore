(function(){
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* Smooth scroll (Lenis) — buttery scrub like the reference */
  var lenis = null;
  if(typeof Lenis !== "undefined" && !reduced){
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    function lenisRaf(time){ lenis.raf(time); requestAnimationFrame(lenisRaf); }
    requestAnimationFrame(lenisRaf);
    if(lenis.on) lenis.on("scroll", function(){ lastScroll = Date.now(); });
  }
  /* =====================================================================
     STORY MODEL (reference: Field to Still / Moonshiners × Brocksbushes)
     ---------------------------------------------------------------------
     The page is one story measured in SCREENS. Each chapter is a "beat"
     with its own weight, and the 3D scene reads a single continuous
     story position instead of fighting over the scroll:

        position  = scrollTop / viewportHeight          (screens)
        beat[i]   = document offset of chapter i        (screens)
        weight_i  = smoothstep band over the beats      (0..1)
        camera    = fractional chapter index, interpolated between
                    per-chapter keyframes, then damped twice
     ===================================================================== */
  function clamp01(x){ return x < 0 ? 0 : (x > 1 ? 1 : x); }
  function smooth01(x){ x = clamp01(x); return x*x*(3-2*x); }
  function band(pos, a, b){ return smooth01((pos - a) / Math.max(.0001, (b - a))); }
  function damp(cur, target, lambda, dt){ return cur + (target - cur) * (1 - Math.exp(-lambda * dt)); }

  window.__story = {position:0, velocity:0, weights:[1,0,0,0]};

  var CAM = {
    hero:{x:0,    y:.65, z:10.2, tx:0, ty:0},
    ch1: {x:-.35, y:.45, z:8.4,  tx:0, ty:0},
    ch2: {x:.45,  y:.30, z:7.3,  tx:0, ty:.05},
    ch3: {x:0,    y:.20, z:7.0,  tx:0, ty:0},
    ch4: {x:-.30, y:.35, z:7.6,  tx:0, ty:0},
    ch5: {x:.30,  y:.40, z:8.2,  tx:0, ty:0},
    ch6: {x:0,    y:.20, z:9.4,  tx:0, ty:0},
    ch7: {x:-.20, y:.45, z:9.0,  tx:0, ty:0},
    ch8: {x:0,    y:.55, z:10.8, tx:0, ty:0}
  };
  var CAM_KEYS = CAM_ORDER_IDS();
  function CAM_ORDER_IDS(){ return ["hero","ch1","ch2","ch3","ch4","ch5","ch6","ch7","ch8"]; }
  /* which beat starts a new 3D subject: crystal -> granules -> bag -> globe */
  var SUBJECT_BEATS = ["ch2", "ch3", "ch6"];

  window.__cam = {x:CAM.hero.x, y:CAM.hero.y, z:CAM.hero.z, tx:0, ty:0};
  var camSmooth = {x:CAM.hero.x, y:CAM.hero.y, z:CAM.hero.z, tx:0, ty:0};
  var weightsSmooth = [1,0,0,0];
  var lastStoryPos = 0, lastStoryTime = 0, scrollVelocity = 0;

  var beatPositions = [];   /* chapter tops, in screens */
  function measureBeats(){
    var vh = window.innerHeight || 1;
    beatPositions = CAM_KEYS.map(function(id, i){
      var el = document.getElementById(id);
      if(!el) return i;
      var top = el.offsetTop;
      if(!top) top = el.getBoundingClientRect().top + window.pageYOffset;
      return top / vh;
    });
    /* keep the beats strictly increasing, even if a layout pass is odd */
    for(var i = 1; i < beatPositions.length; i++){
      if(!(beatPositions[i] > beatPositions[i-1])) beatPositions[i] = beatPositions[i-1] + 1;
    }
  }
  measureBeats();
  window.addEventListener("resize", measureBeats);
  window.addEventListener("load", measureBeats);

  /* continuous chapter index from the story position */
  function chapterIndex(pos){
    if(!beatPositions.length || beatPositions[beatPositions.length-1] <= 0) return 0;
    for(var i = 0; i < beatPositions.length - 1; i++){
      var a = beatPositions[i], b = beatPositions[i+1];
      if(pos < b || i === beatPositions.length - 2){
        var t = b > a ? smooth01((pos - a) / (b - a)) : 0;
        return i + clamp01(t);
      }
    }
    return beatPositions.length - 1;
  }
  function mix(a, b, t){ return a + (b - a) * t; }
  function camAt(index){
    var i = Math.max(0, Math.min(CAM_KEYS.length - 1, Math.floor(index)));
    var j = Math.min(CAM_KEYS.length - 1, i + 1);
    var t = index - i;
    var A = CAM[CAM_KEYS[i]], B = CAM[CAM_KEYS[j]];
    return {
      x: mix(A.x, B.x, t), y: mix(A.y, B.y, t), z: mix(A.z, B.z, t),
      tx: mix(A.tx, B.tx, t), ty: mix(A.ty, B.ty, t)
    };
  }

  /* The story clock: one place that turns scroll into scene state */
  function updateStory(now){
    var vh = window.innerHeight || 1;
    var pos = window.pageYOffset / vh;
    var dt = Math.min(.05, lastStoryTime ? (now - lastStoryTime) / 1000 : .016);
    if(!lastStoryTime) dt = .016;
    scrollVelocity = (pos - lastStoryPos) / Math.max(dt, .001);
    /* light damping on velocity so the surge is not jittery */
    window.__story.velocity = damp(window.__story.velocity, scrollVelocity, 6, dt);
    lastStoryPos = pos; lastStoryTime = now;
    window.__story.position = pos;

    /* --- subject weights (crystal / granules / bag / globe) --- */
    var w = [1, 0, 0, 0];
    var t1 = band(pos, beatPositions[2] - .15, beatPositions[2] + .85);  /* ch2 */
    var t2 = band(pos, beatPositions[3] - .15, beatPositions[3] + .85);  /* ch3 */
    var t3 = band(pos, beatPositions[6] - .15, beatPositions[6] + .85);  /* ch6 */
    w[0] = 1 - t1;
    w[1] = t1 * (1 - t2);
    w[2] = t2 * (1 - t3);
    w[3] = t3;
    var sum = w[0] + w[1] + w[2] + w[3] || 1;
    for(var i = 0; i < 4; i++) weightsSmooth[i] = damp(weightsSmooth[i], w[i] / sum, 8, dt);
    window.__story.weights = weightsSmooth.slice();

    /* --- camera keyframes, damped twice like the reference --- */
    var target = camAt(chapterIndex(pos));
    var k = 8;
    camSmooth.x = damp(camSmooth.x, target.x, k, dt);
    camSmooth.y = damp(camSmooth.y, target.y, k, dt);
    camSmooth.z = damp(camSmooth.z, target.z, k, dt);
    camSmooth.tx = damp(camSmooth.tx, target.tx, k, dt);
    camSmooth.ty = damp(camSmooth.ty, target.ty, k, dt);
    /* scroll surge: fast scrolling nudges the camera in slightly */
    var surge = Math.max(-.35, Math.min(.35, -window.__story.velocity * .06));
    window.__cam.x = camSmooth.x;
    window.__cam.y = camSmooth.y;
    window.__cam.z = camSmooth.z + surge;
    window.__cam.tx = camSmooth.tx;
    window.__cam.ty = camSmooth.ty;
  }

  /* Mouse parallax (shared with 3D camera) */
  window.__mouse = {x:0, y:0};
  window.addEventListener("mousemove", function(e){
    window.__mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    window.__mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, {passive:true});
  /* ---------- Preloader: wait for the 3D libs + first paint ---------- */
  (function(){
    var fill = document.getElementById("pre-fill");
    var pct = document.getElementById("pre-pct");
    var started = Date.now(), p = 0, done = false;
    function finish(){
      if(done) return; done = true;
      p = 100; if(fill) fill.style.width = "100%"; if(pct) pct.textContent = "100%";
      setTimeout(function(){
        document.body.classList.add("loaded");
        if(typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      }, 320);
    }
    var timer = setInterval(function(){
      /* advance toward 92% while libs load, then wait for load event */
      var target = (typeof THREE !== "undefined" && typeof gsap !== "undefined") ? 92 : 55;
      p = Math.min(target, p + Math.random()*9 + 3);
      if(fill) fill.style.width = p + "%";
      if(pct) pct.textContent = Math.round(p) + "%";
      if(p >= target && document.readyState === "complete") { clearInterval(timer); finish(); }
      if(Date.now() - started > 6000){ clearInterval(timer); finish(); }
    }, 90);
    window.addEventListener("load", function(){
      var wait = Math.max(0, 900 - (Date.now()-started));
      setTimeout(function(){ clearInterval(timer); finish(); }, wait);
    });
  })();

  /* Intro: locked until "Click to start" (reference style) */
  var intro = document.getElementById("intro");
  var introBtn = document.getElementById("intro-start");
  if(intro && !reduced){ document.body.classList.add("locked"); if(lenis) lenis.stop(); }
  function startExperience(){
    document.body.classList.remove("locked");
    document.body.classList.add("started");
    if(intro) intro.classList.add("hide");
    if(lenis) lenis.start();
  }
  if(introBtn) introBtn.addEventListener("click", startExperience);
  if(intro){
    intro.addEventListener("click", startExperience);
    window.addEventListener("wheel", function(){ if(document.body.classList.contains("locked")) startExperience(); }, {passive:true});
    window.addEventListener("touchstart", function(){ if(document.body.classList.contains("locked")) startExperience(); }, {passive:true});
  }
  if(reduced) startExperience();

  /* ---------- Stage keyframes (continuous scroll interpolation) ---------- */
  var ORDER = ["hero","ch1","ch2","ch3","ch4","ch5","ch6","ch7","ch8"];
  /* Reference choreography (84-24): each chapter flies/turns/zooms the
     model to the side opposite the text, explodes it for the "surgery"
     chapter, reassembles it, then spins it out at the end.
     x: left(-) / right(+) across screen · y: up/down · rz: tilt · s: zoom */
  /* Choreography per spec table:
     1 Hero: centre, 45deg, slow auto-rotate, bright light
     2 First feature: Pan Left, Rotate to right side, Zoom In, text right
     3 Internal: centre, Exploded (cover rises), Hotspots
     4 Durability: Pan Right, Reassemble + 360deg to back, material light
     5 Conclusion: centre, Zoom Out, attractive base pose, buy button */
  var STAGES = {
    /* 8 chapters. ry = turn, camZ = camera distance, explode = layer separation,
       light = key light intensity, x = pan offset (positive = right) */
    hero: {ry:45,  rx:10, rz:0,  explode:1,    s:1,    x:0,    y:0,    camZ:9.6,  light:1.35},
    ch1:  {ry:-70, rx:8,  rz:0,  explode:1,    s:1.15, x:-.9,  y:0,    camZ:8.4,  light:1.45},
    ch2:  {ry:-30, rx:16, rz:-12,explode:1.15, s:1.18, x:.9,   y:.1,   camZ:7.3,  light:1.15},
    ch3:  {ry:120, rx:10, rz:0,  explode:2.6,  s:1.3,  x:0,    y:.25,  camZ:7.0,  light:1.25},
    ch4:  {ry:480, rx:8,  rz:0,  explode:1,    s:1.05, x:-.7,  y:.1,   camZ:7.6,  light:1.5},
    ch5:  {ry:150, rx:12, rz:0,  explode:1.05, s:1.02, x:.7,   y:0,    camZ:8.2,  light:1.2},
    ch6:  {ry:220, rx:14, rz:0,  explode:1,    s:1,    x:0,    y:.1,   camZ:9.4,  light:1.3},
    ch7:  {ry:300, rx:8,  rz:0,  explode:1,    s:.98,  x:-.6,  y:0,    camZ:9.0,  light:1.4},
    ch8:  {ry:405, rx:10, rz:0,  explode:1,    s:1,    x:0,    y:0,    camZ:10.8, light:1.35}
  };
  var TITLES = {hero:"Welcome",ch1:"01 The source",ch2:"02 The grades",ch3:"03 Inside the bag",ch4:"04 The printed face",ch5:"05 Formats",ch6:"06 The map",ch7:"07 Ports & documents",ch8:"08 The finale"};
  var NUMS = {hero:"00 / 08",ch1:"01 / 08",ch2:"02 / 08",ch3:"03 / 08",ch4:"04 / 08",ch5:"05 / 08",ch6:"06 / 08",ch7:"07 / 08",ch8:"08 / 08"};
  var CAPTIONS = {
    hero:"Fig. 0 — The model at rest. Scroll to begin the story.",
    ch1:"Fig. 1 — The source: solar evaporation, North Sinai.",
    ch2:"Fig. 2 — The grades: crystal into granules and softener tablets.",
    ch3:"Fig. 3 — Inside the bag: four layers, one tonne.",
    ch4:"Fig. 4 — The printed face: brand, weight, batch, origin.",
    ch5:"Fig. 5 — Formats: bags, FIBC, sling bags, bulk.",
    ch6:"Fig. 6 — The map: routes drawn from Arish and Suez.",
    ch7:"Fig. 7 — Ports and documents: FOB terms, COA, traceability.",
    ch8:"Fig. 8 — The finale: one coast, five grades."
  };
  var cur = {ry:45, rx:10, rz:0, explode:1, s:1, x:0, y:0, camZ:9.5, light:1.35};
  var autoRy = 0;
  var target = STAGES.hero;
  var dragRy = 0, dragRx = 0;
  var lastScroll = Date.now();
  var bag = document.getElementById("bag3d");
  var scene = document.getElementById("scene");
  var caption = document.getElementById("stage-caption");
  var callouts = document.getElementById("callouts");
  var badges = document.querySelectorAll(".float-badge");
  var layers = document.querySelectorAll(".layer");
  var gussets = document.querySelectorAll(".gusset");
  var LAYER_Z = [-110, -55, 0, 55, 110];
  var hudRot = document.getElementById("hud-rot");
  var hudExplode = document.getElementById("hud-explode");
  var hudZoom = document.getElementById("hud-zoom");
  var hudChapter = document.getElementById("hud-chapter");
  var hudTitle = document.getElementById("hud-title");
  var progress = document.getElementById("progress-bar");

  function lerp(a,b,t){ return a + (b-a)*t; }
  var dragging = false;
  function tick(now){
    updateStory(now || performance.now());
    /* Hero only: very slow auto-rotate (spec table §1) */
    if(currentStage==="hero" && !dragging && !reduced) autoRy += .05;
    cur.ry = lerp(cur.ry, target.ry, .06);
    cur.rx = lerp(cur.rx, target.rx, .06);
    cur.rz = lerp(cur.rz, target.rz||0, .06);
    cur.explode = lerp(cur.explode, target.explode, .06);
    cur.s = lerp(cur.s, target.s, .06);
    cur.x = lerp(cur.x, target.x||0, .06);
    cur.y = lerp(cur.y, target.y||0, .06);
    cur.camZ = lerp(cur.camZ, target.camZ||9.5, .06);
    cur.light = lerp(cur.light, target.light||1.2, .06);
    var totalRy = cur.ry + dragRy + autoRy;
    if(bag) bag.style.transform = "translateX("+(cur.x*110)+"px) translateY("+(cur.y*90)+"px) rotateX("+(cur.rx+dragRx)+"deg) rotateY("+totalRy+"deg) rotateZ("+cur.rz+"deg) scale("+cur.s+")";
    layers.forEach(function(el,i){
      var z = LAYER_Z[i] * cur.explode;
      var y = (i-2) * 10 * (cur.explode-1);
      el.style.transform = "translateZ("+z+"px) translateY("+y+"px)";
    });
    gussets.forEach(function(g){ g.style.opacity = cur.explode > 1.6 ? ".25" : "1"; });
    if(hudRot) hudRot.textContent = Math.round(((totalRy%360)+360)%360) + "°";
    if(hudExplode) hudExplode.textContent = Math.round(Math.max(0,(cur.explode-1)/1.6)*100) + "%";
    if(hudZoom) hudZoom.textContent = Math.round((9.5/cur.camZ)*100) + "%";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  /* ---------- Continuous scroll interpolation ---------- */
  var sections = ORDER.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  var currentStage = "";
  function setStage(id){
    if(!STAGES[id] || id===currentStage) return;
    currentStage = id;
    if(caption) caption.textContent = CAPTIONS[id] || "";
    if(hudChapter) hudChapter.textContent = NUMS[id] || "";
    if(hudTitle) hudTitle.textContent = TITLES[id] || "";
    if(callouts) callouts.classList.toggle("show", id==="ch2");
    var cta = document.getElementById("stage-cta");
    if(cta) cta.classList.toggle("show", id==="ch8");
    badges.forEach(function(b){
      b.classList.toggle("show", b.dataset.stage===id);
    });
    document.querySelectorAll(".exp-nav a").forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href")==="#"+id);
    });
    document.querySelectorAll(".side-rail a").forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href")==="#"+id);
    });
    document.querySelectorAll(".chapter").forEach(function(c){
      c.classList.toggle("in-view", c.id===id);
    });
  }
  var parallaxImgs = document.querySelectorAll("figure img");
  function updateParallax(){
    if(reduced) return;
    var vh = window.innerHeight;
    parallaxImgs.forEach(function(img){
      var r = img.parentElement.getBoundingClientRect();
      if(r.bottom < 0 || r.top > vh) return;
      var off = (r.top + r.height/2 - vh/2) * -0.05;
      img.style.transform = "translateY(" + off.toFixed(1) + "px) scale(1.06)";
    });
  }
  /* ---------- Sticky pinned panels (reference: sticky top-0 h-svh) ----------
     A chapter whose measured content fits inside a screen pins for a full
     screen of scrolling while the 3D story advances; taller chapters keep
     scrolling normally, so long copy is never clipped. */
  var pinnedPanels = [];
  var pinFades = [];   /* keep the fade triggers so re-running never duplicates them */
  function setupPins(){
    pinFades.forEach(function(t){ if(t && t.kill) t.kill(); });
    pinFades = [];
    var vh = window.innerHeight || 900;
    var desktop = window.innerWidth >= 1024;
    document.querySelectorAll(".chapter").forEach(function(sec){
      var wrap = sec.querySelector(".wrap");
      if(!wrap) return;
      /* reset first so heights are measured honestly */
      sec.classList.remove("is-pinned");
      sec.style.height = "";
      var contentH = wrap.scrollHeight;
      var fits = desktop && contentH > 0 && contentH <= vh * 0.84;
      if(!fits) return;
      sec.classList.add("is-pinned");
      var travel = Math.round(vh * 0.75);          /* extra scroll while pinned */
      sec.style.height = (vh + travel) + "px";   /* one screen of panel + travel */
      sec.dataset.travel = travel;
    });
    pinnedPanels = Array.prototype.slice.call(document.querySelectorAll(".chapter.is-pinned"));
    /* Dim the pinned panel as its chapter hands over to the next one */
    if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){
      pinnedPanels.forEach(function(sec){
        var wrap = sec.querySelector(".wrap");
        pinFades.push(ScrollTrigger.create({
          trigger: sec,
          start: "bottom 78%",
          end: "bottom 22%",
          onUpdate: function(self){ sec.classList.toggle("panel-leaving", self.progress > .55); },
          onLeave: function(){ sec.classList.remove("panel-leaving"); },
          onLeaveBack: function(){ sec.classList.remove("panel-leaving"); }
        }));
      });
    }
    if(typeof measureBeats === "function") measureBeats();
    if(typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }
  setupPins();
  window.addEventListener("resize", function(){ setupPins(); });
  window.addEventListener("load", function(){ setupPins(); });
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ setupPins(); });

  /* ---------- Letter-by-letter heading reveal (reference back.out motion) ---------- */
  function splitLetters(el){
    var text = (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " ");
    el.setAttribute("aria-label", text);
    el.textContent = "";
    text.split(" ").forEach(function(word, wi, arr){
      var w = document.createElement("span");
      w.className = "lw";
      for(var c = 0; c < word.length; c++){
        var sp = document.createElement("span");
        sp.className = "ltr";
        sp.textContent = word.charAt(c);
        w.appendChild(sp);
      }
      el.appendChild(w);
      if(wi < arr.length - 1) el.appendChild(document.createTextNode(" "));
    });
    return el.querySelectorAll(".ltr");
  }
  var letterHeads = [];
  document.querySelectorAll(".chapter h2, .end h2").forEach(function(h){
    letterHeads.push({el:h, letters:splitLetters(h)});
  });
  var canAnimate = !reduced && typeof gsap !== "undefined";
  if(canAnimate && typeof ScrollTrigger !== "undefined"){
    letterHeads.forEach(function(h){
      gsap.from(h.letters, {
        yPercent: 70, rotate: 8, opacity: 0, duration: .9,
        ease: "back.out(2)", stagger: .028,
        scrollTrigger: { trigger: h.el, start: "top 88%", toggleActions: "play none none reverse" }
      });
    });
    /* ---------- data-reveal: blocks rise and fade in (reference power3.out) ---------- */
    var revealSel = ".chapter figure, .chapter .stat-row, .chapter .challenge, .chapter blockquote, " +
                    ".chapter .timeline, .chapter .specs-table, .chapter .side-note, .chapter ul, .final-cta, .credits";
    document.querySelectorAll(revealSel).forEach(function(el){
      gsap.from(el, {
        y: 34, opacity: 0, duration: .9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
      });
    });
    /* Refresh once the web fonts land, so the pins/offsets are measured correctly */
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ ScrollTrigger.refresh(); measureBeats(); });
  } else {
    letterHeads.forEach(function(h){ Array.prototype.forEach.call(h.letters, function(l){ l.style.opacity = 1; }); });
  }

  document.querySelectorAll(".side-rail a").forEach(function(a){
    a.addEventListener("click", function(e){
      e.preventDefault();
      var el = document.getElementById(a.getAttribute("href").slice(1));
      if(el){ if(lenis) lenis.scrollTo(el); else el.scrollIntoView({behavior: reduced ? "auto" : "smooth"}); }
    });
  });
  /* Nav drag-to-scroll (reference slider nav) */
  var expNav = document.querySelector(".exp-nav");
  if(expNav){
    var navDrag=false, navX=0, navL=0;
    expNav.addEventListener("pointerdown", function(e){ navDrag=true; navX=e.clientX; navL=expNav.scrollLeft; });
    expNav.addEventListener("pointermove", function(e){ if(navDrag) expNav.scrollLeft = navL - (e.clientX-navX); });
    ["pointerup","pointerleave"].forEach(function(ev){ expNav.addEventListener(ev, function(){ navDrag=false; }); });
  }
  function onScroll(){
    lastScroll = Date.now();
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if(progress && max>0) progress.style.width = (h.scrollTop/max*100)+"%";
    var mid = h.scrollTop + h.clientHeight*0.5;
    var centers = sections.map(function(s){ return s.offsetTop + s.offsetHeight/2; });
    var i = 0;
    while(i < centers.length-2 && mid > centers[i+1]) i++;
    var a = STAGES[ORDER[i]], b = STAGES[ORDER[i+1]];
    var t = 0;
    if(centers[i+1] > centers[i]) t = Math.max(0, Math.min(1, (mid - centers[i])/(centers[i+1]-centers[i])));
    var panScale = window.innerWidth < 1100 ? 0.3 : 1; /* phones: bag stays near centre */
    target = {ry: lerp(a.ry,b.ry,t), rx: lerp(a.rx,b.rx,t), rz: lerp(a.rz||0,b.rz||0,t), explode: lerp(a.explode,b.explode,t), s: lerp(a.s,b.s,t), x: lerp(a.x||0,b.x||0,t)*panScale, y: lerp(a.y||0,b.y||0,t), camZ: lerp(a.camZ||9.5,b.camZ||9.5,t), light: lerp(a.light||1.2,b.light||1.2,t)};
    window.__bagTarget = target;
    setStage(t > .5 ? ORDER[i+1] : ORDER[i]);
    /* Nav progress: fill each link as its section passes */
    document.querySelectorAll(".exp-nav a").forEach(function(a){
      var sec = document.getElementById(a.getAttribute("href").slice(1));
      if(!sec) return;
      var r = sec.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (window.innerHeight*0.85 - r.top) / (window.innerHeight + r.height)));
      a.style.setProperty("--progress", Math.round(p*100) + "%");
    });
    updateQuote();
    updateParallax();
  }
  window.addEventListener("scroll", onScroll, {passive:true});

  /* ---------- Blockquote word-by-word reveal (reference style) ---------- */
  var quote = document.getElementById("pull-quote");
  var quoteWords = [];
  if(quote){
    var words = quote.textContent.trim().split(/\s+/);
    quote.innerHTML = words.map(function(w){ return '<span class="w">'+w+'</span>'; }).join(" ");
    quoteWords = quote.querySelectorAll(".w");
  }
  function updateQuote(){
    if(!quote || !quoteWords.length || reduced) return;
    var r = quote.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = Math.max(0, Math.min(1, (vh*0.85 - r.top) / (vh*0.5)));
    var on = Math.round(p * quoteWords.length);
    quoteWords.forEach(function(w,i){ w.classList.toggle("on", i < on); });
  }

  /* ---------- Soft cursor halo (reference custom-cursor idea, brand colours) ---------- */
  (function(){
    if(reduced || !window.matchMedia || !window.matchMedia("(pointer:fine)").matches) return;
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot"; ring.className = "cursor-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    var mx = window.innerWidth/2, my = window.innerHeight/2, rx = mx, ry = my, seen = false;
    window.addEventListener("mousemove", function(e){
      mx = e.clientX; my = e.clientY; seen = true;
      dot.style.transform = "translate(" + (mx-3) + "px," + (my-3) + "px)";
      var t = e.target.closest ? e.target.closest("a,button,.callout,.slider-btn,.compare") : null;
      ring.classList.toggle("hot", !!t);
    }, {passive:true});
    (function loop(){
      rx += (mx - rx) * .14; ry += (my - ry) * .14;
      ring.style.transform = "translate(" + (rx-16) + "px," + (ry-16) + "px)";
      ring.style.opacity = seen ? "1" : "0";
      requestAnimationFrame(loop);
    })();
  })();

  /* ---------- Drag to rotate ---------- */
  var startX=0, startY=0, baseRy=0, baseRx=0;
  if(scene){
    scene.addEventListener("pointerdown", function(e){
      dragging=true; startX=e.clientX; startY=e.clientY; baseRy=dragRy; baseRx=dragRx;
      scene.setPointerCapture(e.pointerId);
    });
    scene.addEventListener("pointermove", function(e){
      if(!dragging) return;
      dragRy = baseRy + (e.clientX-startX)*.45;
      dragRx = Math.max(-28, Math.min(28, baseRx - (e.clientY-startY)*.3));
    });
    ["pointerup","pointercancel"].forEach(function(ev){
      scene.addEventListener(ev, function(){ dragging=false; lastScroll=Date.now(); });
    });
    scene.addEventListener("dblclick", function(){ dragRy=0; dragRx=0; autoRy=0; });
  }

  /* ---------- Hotspots ---------- */
  document.querySelectorAll(".callout[data-layer]").forEach(function(c){
    function highlight(on){
      var idx = parseInt(c.getAttribute("data-layer"),10);
      c.classList.toggle("hot", on);
      layers.forEach(function(el,i){
        el.classList.toggle("hot", on && i===idx);
        el.classList.toggle("dim", on && i!==idx);
      });
    }
    c.addEventListener("mouseenter", function(){ highlight(true); });
    c.addEventListener("mouseleave", function(){ highlight(false); });
    c.addEventListener("click", function(){ highlight(true); setTimeout(function(){ highlight(false); }, 1800); });
  });

  /* ---------- Animated counters + reveals ---------- */
  function animateCount(el){
    var end = parseFloat(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix")||"", suffix = el.getAttribute("data-suffix")||"";
    var decimals = (String(end).indexOf(".")>-1) ? 1 : 0;
    var start = null, dur = 1400;
    function step(ts){
      if(!start) start = ts;
      var p = Math.min(1,(ts-start)/dur);
      var eased = 1-Math.pow(1-p,3);
      el.textContent = prefix + (end*eased).toFixed(decimals) + suffix;
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if("IntersectionObserver" in window){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); } });
    },{threshold:.6});
    document.querySelectorAll("[data-count]").forEach(function(el){ cio.observe(el); });
    var rio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target);} });
    },{threshold:.15});
    document.querySelectorAll(".chapter p, .chapter h2, .chapter h3, .chapter ul, .side-note, .stat-row, .challenge-grid, .slider, .compare, .specs-table, .timeline, .final-cta, figure").forEach(function(el){
      el.classList.add("reveal-child"); rio.observe(el);
    });
  } else {
    document.querySelectorAll("[data-count]").forEach(animateCount);
  }

  /* ---------- Fullscreen ---------- */
  var fsBtn = document.getElementById("fullscreen-btn");
  function toggleFs(){
    if(document.fullscreenElement){ document.exitFullscreen(); }
    else if(document.documentElement.requestFullscreen){ document.documentElement.requestFullscreen(); }
  }
  function updateFsLabel(){ if(fsBtn) fsBtn.textContent = document.fullscreenElement ? "✕ Exit Fullscreen" : "⛶ Fullscreen"; }
  if(fsBtn) fsBtn.addEventListener("click", toggleFs);
  document.addEventListener("fullscreenchange", updateFsLabel);
  updateFsLabel();

  /* ---------- Keyboard navigation ---------- */
  document.addEventListener("keydown", function(e){
    if(e.target.matches("input,textarea,select")) return;
    if(e.key==="ArrowDown" || e.key==="ArrowUp"){
      var idx = ORDER.indexOf(currentStage||"hero");
      var next = e.key==="ArrowDown" ? Math.min(ORDER.length-1, idx+1) : Math.max(0, idx-1);
      var el = document.getElementById(ORDER[next]);
      if(el){ if(lenis) lenis.scrollTo(el); else el.scrollIntoView({behavior: reduced ? "auto" : "smooth"}); }
      e.preventDefault();
    } else if(e.key==="f" || e.key==="F"){ toggleFs(); }
    else if(e.key==="r" || e.key==="R"){ dragRy=0; dragRx=0; autoRy=0; }
  });

  /* ---------- Portrait overlay (reference style) ---------- */
  var portrait = document.getElementById("portrait");
  var portraitBtn = document.getElementById("portrait-continue");
  var portraitDismissed = false;
  function checkPortrait(){
    if(!portrait || portraitDismissed) return;
    var isPortrait = window.innerHeight > window.innerWidth;
    portrait.classList.toggle("show", isPortrait && window.innerWidth < 768);
  }
  window.addEventListener("resize", checkPortrait);
  if(portraitBtn) portraitBtn.addEventListener("click", function(){ portraitDismissed=true; portrait.classList.remove("show"); });
  checkPortrait();

  /* ---------- Image slider (auto-advance) ---------- */
  var track = document.getElementById("slider-track");
  var slides = document.querySelectorAll(".slide");
  var dotsWrap = document.getElementById("slider-dots");
  var idx = 0, autoTimer = null;
  function go(i){
    idx = (i + slides.length) % slides.length;
    if(track) track.style.transform = "translateX(-"+(idx*100)+"%)";
    if(dotsWrap) dotsWrap.querySelectorAll("button").forEach(function(d,j){ d.classList.toggle("active", j===idx); });
  }
  function startAuto(){ if(reduced || !track) return; stopAuto(); autoTimer = setInterval(function(){ go(idx+1); }, 5000); }
  function stopAuto(){ if(autoTimer){ clearInterval(autoTimer); autoTimer=null; } }
  if(track && slides.length){
    slides.forEach(function(_,i){
      var b=document.createElement("button");
      b.setAttribute("aria-label","Go to slide "+(i+1));
      if(i===0) b.classList.add("active");
      b.addEventListener("click", function(){ go(i); startAuto(); });
      dotsWrap.appendChild(b);
    });
    var prev=document.getElementById("slider-prev"), next=document.getElementById("slider-next");
    if(prev) prev.addEventListener("click", function(){ go(idx-1); startAuto(); });
    if(next) next.addEventListener("click", function(){ go(idx+1); startAuto(); });
    var sliderEl = document.querySelector(".slider");
    if(sliderEl){ sliderEl.addEventListener("mouseenter", stopAuto); sliderEl.addEventListener("mouseleave", startAuto); }
    startAuto();
  }

  /* ---------- Before / After comparison ---------- */
  var compare = document.getElementById("compare");
  if(compare){
    function setPos(clientX){
      var r = compare.getBoundingClientRect();
      var pct = Math.max(4, Math.min(96, (clientX - r.left)/r.width*100));
      compare.style.setProperty("--pos", pct+"%");
    }
    var cDrag=false;
    compare.addEventListener("pointerdown", function(e){ cDrag=true; compare.setPointerCapture(e.pointerId); setPos(e.clientX); });
    compare.addEventListener("pointermove", function(e){ if(cDrag) setPos(e.clientX); });
    ["pointerup","pointercancel"].forEach(function(ev){ compare.addEventListener(ev, function(){ cDrag=false; }); });
  }

  onScroll();
})();
