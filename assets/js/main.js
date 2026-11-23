(function(){
  "use strict";
  var header=document.getElementById("site-header");
  var toTop=document.getElementById("to-top");
  function onScroll(){
    if(header) header.classList.toggle("scrolled", window.scrollY>10);
    if(toTop) toTop.classList.toggle("show", window.scrollY>500);
  }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
  if(toTop) toTop.addEventListener("click", function(){ window.scrollTo({top:0,behavior:"smooth"}); });

  var menuBtn=document.getElementById("menu-btn"), mobileMenu=document.getElementById("mobile-menu");
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", function(){
      var open=mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.textContent = open ? "✕" : "☰";
    });
    mobileMenu.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", function(){ mobileMenu.classList.remove("open"); menuBtn.textContent="☰"; }); });
  }

  // Reveal on scroll
  var revealEls=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && revealEls.length){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
    },{threshold:.12});
    revealEls.forEach(function(el){ io.observe(el); });
  } else { revealEls.forEach(function(el){ el.classList.add("in"); }); }

  // Product filter
  var chips=document.querySelectorAll(".chip[data-filter]");
  var products=document.querySelectorAll(".product[data-cat]");
  chips.forEach(function(chip){
    chip.addEventListener("click", function(){
      chips.forEach(function(c){ c.classList.remove("active"); });
      chip.classList.add("active");
      var f=chip.getAttribute("data-filter");
      products.forEach(function(p){
        var show = (f==="all" || p.getAttribute("data-cat")===f);
        p.classList.toggle("hide", !show);
      });
    });
  });

  // Lab report modal
  var modal=document.getElementById("lab-modal");
  var modalTitle=document.getElementById("lab-modal-title");
  var modalBody=document.getElementById("lab-modal-body");
  var modalClose=document.getElementById("lab-modal-close");
  document.querySelectorAll("[data-lab]").forEach(function(btn){
    btn.addEventListener("click", function(){
      if(modalTitle) modalTitle.textContent=btn.getAttribute("data-lab");
      if(modalBody) modalBody.innerHTML=btn.getAttribute("data-lab-body") || "<p>Each shipment batch can be supported by a Certificate of Analysis issued or verified by an independent third-party laboratory, subject to contractual requirements.</p>";
      if(modal) modal.classList.add("open");
    });
  });
  function closeModal(){ if(modal) modal.classList.remove("open"); }
  if(modalClose) modalClose.addEventListener("click", closeModal);
  if(modal) modal.addEventListener("click", function(e){ if(e.target===modal) closeModal(); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeModal(); });

  // Forms: build WhatsApp + email message (no backend in static site)
  function handleForm(formId, waNumber, email){
    var form=document.getElementById(formId); if(!form) return;
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var msg=document.getElementById(formId+"-msg");
      var data=new FormData(form);
      var lines=[];
      data.forEach(function(v,k){ if(v) lines.push(k+": "+v); });
      if(!lines.length){ if(msg){msg.className="form-msg err"; msg.textContent="Please fill in the form.";} return; }
      var text=encodeURIComponent(lines.join("\n"));
      if(msg){ msg.className="form-msg ok"; msg.textContent="Thank you! Opening WhatsApp / email to send your request…"; }
      setTimeout(function(){
        window.open("https://wa.me/"+waNumber+"?text="+text, "_blank");
        window.location.href="mailto:"+email+"?subject="+encodeURIComponent("SinaiCore — Website enquiry")+"&body="+text;
      }, 600);
      form.reset();
    });
  }
  handleForm("quote-form","201107539914","info@sinaicore.com");
  handleForm("contact-form","201107539914","info@sinaicore.com");

  var year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
})();
