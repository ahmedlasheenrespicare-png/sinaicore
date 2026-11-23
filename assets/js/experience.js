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
  /* GSAP ScrollTrigger: particle morph per scene (crystal->granules->bag->globe) */
  window.__morph = {from:0, to:0, progress:0, rotY:0};
  if(typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined"){
    gsap.registerPlugin(ScrollTrigger);
    var morph = window.__morph;
    function morphTl(trigger, from, to){
      var tl = gsap.timeline({scrollTrigger:{trigger:trigger, scrub:1.2, start:"top bottom", end:"bottom top"}});
      tl.fromTo(morph, {from:from, to:from, progress:0}, {from:from, to:to, progress:1, ease:"power1.inOut"}, 0);
      return tl;
    }
    morphTl("#ch1", 0, 0);
    morphTl("#ch2", 0, 1);
    morphTl("#ch3", 1, 2);
    morphTl("#ch4", 2, 3);
    morphTl("#ch5", 3, 3);
  }
  /* Mouse parallax (shared with 3D camera) */
  window.__mouse = {x:0, y:0};
  window.addEventListener("mousemove", function(e){
    window.__mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    window.__mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, {passive:true});
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
  var ORDER = ["hero","ch1","ch2","ch3","ch4","ch5","end"];
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
    hero: {ry:45,  rx:10, rz:0,  explode:1,   s:1,    x:0,    y:0,    camZ:9.5,  light:1.35},
    ch1:  {ry:-70, rx:8,  rz:0,  explode:1,   s:1.15, x:-1.1, y:0,    camZ:7.4,  light:1.0},
    ch2:  {ry:-30, rx:16, rz:-12,explode:1.15, s:1.18, x:1.1,  y:.1,  camZ:7.2,  light:1.1},
    ch3:  {ry:120, rx:10, rz:0,  explode:2.6,  s:1.3,  x:0,    y:.25, camZ:8.2,  light:1.2},
    ch4:  {ry:480, rx:8,  rz:0,  explode:1,   s:1.05, x:1.1,  y:.1,  camZ:9.0,  light:1.5},
    ch5:  {ry:45,  rx:10, rz:0,  explode:1,   s:1,    x:0,    y:0,    camZ:11.0, light:1.35},
    end:  {ry:45,  rx:10, rz:0,  explode:1,   s:1,    x:0,    y:0,    camZ:11.0, light:1.35}
  };
  var TITLES = {hero:"Welcome",ch1:"01 The Crystal",ch2:"02 Granules & Tablets",ch3:"03 The Jumbo Bag",ch4:"04 Arish to the World",ch5:"Conclusion",end:"The End"};
  var NUMS = {hero:"00 / 05",ch1:"01 / 05",ch2:"02 / 05",ch3:"03 / 05",ch4:"04 / 05",ch5:"05 / 05",end:"05 / 05"};
  var CAPTIONS = {
    hero:"Fig. 0 — Hero: centre, 45° angle, slow auto-rotate, bright light.",
    ch1:"Fig. 1 — Pan Left + Rotate to right side + Zoom In. Text on the right.",
    ch2:"Fig. 2 — Bag crosses back right, tilts and zooms in — the challenge, close up.",
    ch3:"Fig. 3 — Surgery: bag centres, zooms and explodes — four layers separate in space.",
    ch4:"Fig. 4 — Pan Right + Reassemble + 360° spin to the back. Material light on.",
    ch5:"Fig. 5 — Conclusion: centre, Zoom Out, base pose. Request a Quote below.",
    end:"Fig. 5 — Conclusion: centre, Zoom Out, base pose. Request a Quote below."
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
  function tick(){
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
    if(cta) cta.classList.toggle("show", id==="ch5" || id==="end");
    badges.forEach(function(b){
      b.classList.toggle("show", (id==="ch2" && b.dataset.stage==="ch2") || (id==="ch5" && b.dataset.stage==="ch5"));
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
  /* Heading word reveal */
  var headingWords = [];
  document.querySelectorAll(".chapter h2").forEach(function(h){
    var words = h.textContent.trim().split(/\s+/);
    h.innerHTML = words.map(function(w){ return '<span class="w">'+w+'</span>'; }).join(" ");
    headingWords.push({el:h, words:h.querySelectorAll(".w")});
  });
  function updateHeadings(){
    if(reduced){ headingWords.forEach(function(h){ h.words.forEach(function(w){ w.classList.add("on"); }); }); return; }
    var vh = window.innerHeight;
    headingWords.forEach(function(h){
      var r = h.el.getBoundingClientRect();
      var p = Math.max(0, Math.min(1, (vh*0.85 - r.top) / (vh*0.45)));
      var on = Math.round(p * h.words.length);
      h.words.forEach(function(w,i){ w.classList.toggle("on", i < on); });
    });
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
    updateHeadings();
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
