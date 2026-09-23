
const menu=document.querySelector(".menu"),nav=document.querySelector(".navlinks");
if(menu)menu.onclick=()=>nav.classList.toggle("show");
document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll("form[data-demo]").forEach(f=>f.addEventListener("submit",e=>{
 e.preventDefault(); const m=f.querySelector(".message"); if(m)m.textContent="Prototype submitted successfully. Connect this form to the Maxicare clinical/appointment backend before production."; f.reset();
}));
