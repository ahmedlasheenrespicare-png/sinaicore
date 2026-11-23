(function(){
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Stage keyframes (continuous scroll interpolation) ---------- */
  var ORDER = ["cover","ch1","ch2","ch3","ch4","ch5"];
  var STAGES = {
    cover:   {ry:-18, rx:8,  explode:1,   s:1},
    ch1:     {ry:-24, rx:6,  explode:1,   s:1},
    ch2:     {ry:38,  rx:10, explode:1.15, s:.92},
    ch3:     {ry:22,  rx:4,  explode:2.6,  s:.95},
    ch4:     {ry:-38, rx:8,  explode:1,   s:1},
    ch5:     {ry:14,  rx:5,  explode:1,   s:1.04}
  };
  var TITLES = {cover:"Cover",ch1:"Introduction",ch2:"The Challenge",ch3:"Internal Components",ch4:"External Design",ch5:"Final Result"};
  var NUMS = {cover:"00 / 05",ch1:"01 / 05",ch2:"02 / 05",ch3:"03 / 05",ch4:"04 / 05",ch5:"05 / 05"};
  var CAPTIONS = {
    cover:"Fig. 0 — The export bag, assembled. Scroll to begin the story.",
    ch1:"Fig. 1 — Solar evaporation in North Sinai. The journey begins.",
    ch2:"Fig. 2 — The challenge: purity, moisture, and maritime transport.",
    ch3:"Fig. 3 — Exploded view: four layers between the sea and the ship.",
    ch4:"Fig. 4 — The finished exterior: printed, stitched, export-ready.",
    ch5:"Fig. 5 — Sealed, documented, and ready for FOB shipment."
  };
  var cur = {ry:-18, rx:8, explode:1, s:1};
  var target = STAGES.cover;
  var dragRy = 0, dragRx = 0, autoRy = 0;
  var lastScroll = Date.now(), lastScrollY = window.scrollY;
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
  var hudChapter = document.getElementById("hud-chapter");
  var hudTitle = document.getElementById("hud-title");
  var progress = document.getElementById("progress-bar");

  function lerp(a,b,t){ return a + (b-a)*t; }
  function tick(){
    /* Idle auto-rotate (pauses while scrolling/dragging, disabled if reduced motion) */
    var idle = (Date.now() - lastScroll > 2600) && !dragging;
    if(idle && !reduced) autoRy += .12;
    cur.ry = lerp(cur.ry, target.ry, .06);
    cur.rx = lerp(cur.rx, target.rx, .06);
    cur.explode = lerp(cur.explode, target.explode, .06);
    cur.s = lerp(cur.s, target.s, .06);
    var totalRy = cur.ry + dragRy + autoRy;
    if(bag) bag.style.transform = "rotateX("+(cur.rx+dragRx)+"deg) rotateY("+totalRy+"deg) scale("+cur.s+")";
    layers.forEach(function(el,i){
      var z = LAYER_Z[i] * cur.explode;
      var y = (i-2) * 10 * (cur.explode-1);
      el.style.transform = "translateZ("+z+"px) translateY("+y+"px)";
    });
    gussets.forEach(function(g){
      g.style.transform = "translateZ("+(28*cur.explode)+"px) rotateY("+(totalRy%360>180?-1:1)*0+"deg)";
      g.style.opacity = cur.explode > 1.6 ? ".25" : "1";
    });
    if(hudRot) hudRot.textContent = Math.round(((totalRy%360)+360)%360) + "°";
    if(hudExplode) hudExplode.textContent = Math.round(Math.max(0,(cur.explode-1)/1.6)*100) + "%";
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  /* ---------- Continuous scroll interpolation between chapters ---------- */
  var sections = ORDER.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  function onScroll(){
    lastScroll = Date.now();
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if(progress && max>0) progress.style.width = (h.scrollTop/max*100)+"%";
    /* Find segment between consecutive section centers */
    var mid = h.scrollTop + h.clientHeight*0.5;
    var centers = sections.map(function(s){ return s.offsetTop + s.offsetHeight/2; });
    var i = 0;
    while(i < centers.length-2 && mid > centers[i+1]) i++;
    var a = STAGES[ORDER[i]], b = STAGES[ORDER[i+1]];
    var t = 0;
    if(centers[i+1] > centers[i]) t = Math.max(0, Math.min(1, (mid - centers[i])/(centers[i+1]-centers[i])));
    target = {
      ry: lerp(a.ry,b.ry,t), rx: lerp(a.rx,b.rx,t),
      explode: lerp(a.explode,b.explode,t), s: lerp(a.s,b.s,t)
    };
    /* Nearest chapter drives captions / badges / HUD */
    var nearest = (t > .5) ? ORDER[i+1] : ORDER[i];
    setStage(nearest, true);
  }
  window.addEventListener("scroll", onScroll, {passive:true});

  var currentStage = "";
  function setStage(id, fromScroll){
    if(!STAGES[id] || id===currentStage) { if(!fromScroll) target = STAGES[id]; return; }
    currentStage = id;
    if(!fromScroll) target = STAGES[id];
    if(caption) caption.textContent = CAPTIONS[id] || "";
    if(hudChapter) hudChapter.textContent = NUMS[id] || "";
    if(hudTitle) hudTitle.textContent = TITLES[id] || "";
    if(callouts) callouts.classList.toggle("show", id==="ch3");
    badges.forEach(function(b){
      b.classList.toggle("show", (id==="ch2" && b.dataset.stage==="ch2") || (id==="ch5" && b.dataset.stage==="ch5"));
    });
    document.querySelectorAll(".chapter-rail a").forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href")==="#"+id);
    });
  }
  /* Fallback observer for caption sync on load */
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting) setStage(e.target.id); });
    }, {rootMargin:"-45% 0px -45% 0px"});
    sections.forEach(function(s){ io.observe(s); });
  }
  onScroll();

  /* ---------- Drag to rotate ---------- */
  var dragging=false, startX=0, startY=0, baseRy=0, baseRx=0;
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

  /* ---------- Hotspots: callout <-> layer highlight ---------- */
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

  /* ---------- Animated counters ---------- */
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
      entries.forEach(function(e){
        if(e.isIntersecting){ animateCount(e.target); cio.unobserve(e.target); }
      });
    },{threshold:.6});
    document.querySelectorAll("[data-count]").forEach(function(el){ cio.observe(el); });
    /* Chapter reveal children */
    var rio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); rio.unobserve(e.target);} });
    },{threshold:.15});
    document.querySelectorAll(".chapter p, .chapter h2, .chapter h3, .chapter ul, .side-note, .pull-quote, .stat-row, .challenge-grid, .slider, .compare, .specs-table, .timeline, .final-cta").forEach(function(el){
      el.classList.add("reveal-child"); rio.observe(el);
    });
  } else {
    document.querySelectorAll("[data-count]").forEach(animateCount);
  }

  /* ---------- Fullscreen ---------- */
  var fsBtn = document.getElementById("fullscreen-btn");
  var fsBtn2 = document.getElementById("fullscreen-btn-2");
  function toggleFs(){
    if(document.fullscreenElement){ document.exitFullscreen(); }
    else if(document.documentElement.requestFullscreen){ document.documentElement.requestFullscreen(); }
  }
  function updateFsLabel(){
    var label = document.fullscreenElement ? "✕ Exit Fullscreen" : "⛶ Fullscreen";
    if(fsBtn) fsBtn.textContent = label;
    if(fsBtn2) fsBtn2.textContent = label;
  }
  if(fsBtn) fsBtn.addEventListener("click", toggleFs);
  if(fsBtn2) fsBtn2.addEventListener("click", toggleFs);
  document.addEventListener("fullscreenchange", updateFsLabel);
  updateFsLabel();

  /* ---------- Keyboard navigation ---------- */
  document.addEventListener("keydown", function(e){
    if(e.target.matches("input,textarea,select")) return;
    if(e.key==="ArrowDown" || e.key==="ArrowUp"){
      var idx = ORDER.indexOf(currentStage||"cover");
      var next = e.key==="ArrowDown" ? Math.min(ORDER.length-1, idx+1) : Math.max(0, idx-1);
      var el = document.getElementById(ORDER[next]);
      if(el) el.scrollIntoView({behavior: reduced ? "auto" : "smooth"});
      e.preventDefault();
    } else if(e.key==="f" || e.key==="F"){ toggleFs(); }
    else if(e.key==="r" || e.key==="R"){ dragRy=0; dragRx=0; autoRy=0; }
  });

  /* ---------- Image slider (auto-advance + pause on hover) ---------- */
  var track = document.getElementById("slider-track");
  var slides = document.querySelectorAll(".slide");
  var dotsWrap = document.getElementById("slider-dots");
  var idx = 0, autoTimer = null;
  function go(i){
    idx = (i + slides.length) % slides.length;
    if(track) track.style.transform = "translateX(-"+(idx*100)+"%)";
    if(dotsWrap) dotsWrap.querySelectorAll("button").forEach(function(d,j){ d.classList.toggle("active", j===idx); });
  }
  function startAuto(){
    if(reduced || !track) return;
    stopAuto();
    autoTimer = setInterval(function(){ go(idx+1); }, 5000);
  }
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
    if(sliderEl){
      sliderEl.addEventListener("mouseenter", stopAuto);
      sliderEl.addEventListener("mouseleave", startAuto);
    }
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

  /* ---------- Reset view ---------- */
  var resetBtn = document.getElementById("reset-view");
  if(resetBtn) resetBtn.addEventListener("click", function(){ dragRy=0; dragRx=0; autoRy=0; });
})();
