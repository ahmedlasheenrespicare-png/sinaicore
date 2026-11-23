(function(){
  "use strict";
  /* ---------- Stage targets per chapter ---------- */
  var STAGES = {
    cover:   {ry:-18, rx:8,  explode:1,   s:1},
    ch1:     {ry:-24, rx:6,  explode:1,   s:1},
    ch2:     {ry:38,  rx:10, explode:1.15, s:.92},
    ch3:     {ry:22,  rx:4,  explode:2.6,  s:.95},
    ch4:     {ry:-38, rx:8,  explode:1,   s:1},
    ch5:     {ry:14,  rx:5,  explode:1,   s:1.04}
  };
  var cur = {ry:-18, rx:8, explode:1, s:1};
  var target = STAGES.cover;
  var dragRy = 0, dragRx = 0;
  var bag = document.getElementById("bag3d");
  var scene = document.getElementById("scene");
  var caption = document.getElementById("stage-caption");
  var callouts = document.getElementById("callouts");
  var badges = document.querySelectorAll(".float-badge");
  var layers = document.querySelectorAll(".layer");
  var LAYER_Z = [-110, -55, 0, 55, 110]; /* back, liner, salt, front, label */

  function lerp(a,b,t){ return a + (b-a)*t; }
  function tick(){
    cur.ry = lerp(cur.ry, target.ry, .07);
    cur.rx = lerp(cur.rx, target.rx, .07);
    cur.explode = lerp(cur.explode, target.explode, .07);
    cur.s = lerp(cur.s, target.s, .07);
    if(bag){
      bag.style.transform = "rotateX("+(cur.rx+dragRx)+"deg) rotateY("+(cur.ry+dragRy)+"deg) scale("+cur.s+")";
    }
    layers.forEach(function(el,i){
      var z = LAYER_Z[i] * cur.explode;
      var y = (i-2) * 10 * (cur.explode-1); /* slight vertical fan when exploded */
      el.style.transform = "translateZ("+z+"px) translateY("+y+"px)";
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

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
      scene.addEventListener(ev, function(){ dragging=false; });
    });
    scene.addEventListener("dblclick", function(){ dragRy=0; dragRx=0; });
  }

  /* ---------- Chapter observer + side rail + progress ---------- */
  var chapters = document.querySelectorAll(".chapter, .cover");
  var railLinks = document.querySelectorAll(".chapter-rail a");
  var progress = document.getElementById("progress-bar");
  var CAPTIONS = {
    cover:"Fig. 0 — The export bag, assembled. Scroll to begin the story.",
    ch1:"Fig. 1 — Solar evaporation in North Sinai. The journey begins.",
    ch2:"Fig. 2 — The challenge: purity, moisture, and maritime transport.",
    ch3:"Fig. 3 — Exploded view: four layers between the sea and the ship.",
    ch4:"Fig. 4 — The finished exterior: printed, stitched, export-ready.",
    ch5:"Fig. 5 — Sealed, documented, and ready for FOB shipment."
  };
  function setStage(id){
    if(!STAGES[id]) return;
    target = STAGES[id];
    if(caption) caption.textContent = CAPTIONS[id] || "";
    if(callouts) callouts.classList.toggle("show", id==="ch3");
    badges.forEach(function(b){
      b.classList.toggle("show", (id==="ch2" && b.dataset.stage==="ch2") || (id==="ch5" && b.dataset.stage==="ch5"));
    });
    railLinks.forEach(function(a){ a.classList.toggle("active", a.getAttribute("href")==="#"+id); });
  }
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting) setStage(e.target.id);
      });
    }, {rootMargin:"-45% 0px -45% 0px"});
    chapters.forEach(function(c){ io.observe(c); });
  }
  window.addEventListener("scroll", function(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if(progress && max>0) progress.style.width = (h.scrollTop/max*100)+"%";
  }, {passive:true});

  /* ---------- Fullscreen ---------- */
  var fsBtn = document.getElementById("fullscreen-btn");
  var fsBtn2 = document.getElementById("fullscreen-btn-2");
  function updateFsLabel(){
    if(fsBtn) fsBtn.textContent = document.fullscreenElement ? "✕ Exit Fullscreen" : "⛶ Fullscreen";
  }
  function toggleFs(){
      if(document.fullscreenElement){ document.exitFullscreen(); }
      else if(document.documentElement.requestFullscreen){ document.documentElement.requestFullscreen(); }
    }
  if(fsBtn){ fsBtn.addEventListener("click", toggleFs); }
  if(fsBtn2){ fsBtn2.addEventListener("click", toggleFs); }
  if(false){ fsBtn.addEventListener("click", function(){
      if(document.fullscreenElement){ document.exitFullscreen(); }
      else if(document.documentElement.requestFullscreen){ document.documentElement.requestFullscreen(); }
    });
  }
  document.addEventListener("fullscreenchange", updateFsLabel);
  updateFsLabel();

  /* ---------- Image slider ---------- */
  var track = document.getElementById("slider-track");
  var slides = document.querySelectorAll(".slide");
  var dotsWrap = document.getElementById("slider-dots");
  var idx = 0;
  function go(i){
    idx = (i + slides.length) % slides.length;
    if(track) track.style.transform = "translateX(-"+(idx*100)+"%)";
    if(dotsWrap) dotsWrap.querySelectorAll("button").forEach(function(d,j){ d.classList.toggle("active", j===idx); });
  }
  if(track && slides.length){
    slides.forEach(function(_,i){
      var b=document.createElement("button");
      b.setAttribute("aria-label","Go to slide "+(i+1));
      if(i===0) b.classList.add("active");
      b.addEventListener("click", function(){ go(i); });
      dotsWrap.appendChild(b);
    });
    var prev=document.getElementById("slider-prev"), next=document.getElementById("slider-next");
    if(prev) prev.addEventListener("click", function(){ go(idx-1); });
    if(next) next.addEventListener("click", function(){ go(idx+1); });
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

  /* ---------- Reset view button ---------- */
  var resetBtn = document.getElementById("reset-view");
  if(resetBtn) resetBtn.addEventListener("click", function(){ dragRy=0; dragRx=0; });
})();
