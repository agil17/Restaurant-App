(()=>{"use strict";const e=()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("page-content"),t.classList.add("home");const n=document.createElement("h1");n.innerHTML="Welcome to Little Caesars!";const d=document.createElement("img");d.src="./img/littlecaesar.jpeg";const c=document.createElement("p");c.innerHTML="The BEST place for pizza in town!",t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)},t=()=>{const e=document.querySelector(".content"),t=document.querySelector(".page-content");t&&e.removeChild(t)};(()=>{const n=document.querySelector(".content"),d=document.createElement("div");d.classList.add("btn-header");const c=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");c.setAttribute("id","home-btn"),a.setAttribute("id","menu-btn"),i.setAttribute("id","contact-btn"),c.classList.add("tab"),a.classList.add("tab"),i.classList.add("tab"),c.textContent="Home",a.textContent="Menu",i.textContent="Contact",d.appendChild(c),d.appendChild(a),d.appendChild(i),n.appendChild(d),c.addEventListener("click",(()=>{t(),e()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("page-content"),t.classList.add("menu");const n=document.createElement("div");n.classList.add("pizza-container");const d=document.createElement("div"),c=document.createElement("img");c.classList.add("pizza-img"),c.src="./img/classic-cheese.jpg",d.appendChild(c);const a=document.createElement("div");a.classList.add("pizza-text-container");const i=document.createElement("h1");i.textContent="Classic Cheese Pizza";const l=document.createElement("p");l.textContent="2000 Calories",a.appendChild(i),a.appendChild(l),n.appendChild(d),n.appendChild(a),t.appendChild(n);const o=document.createElement("div");o.classList.add("pizza-container");const s=document.createElement("div"),p=document.createElement("img");p.classList.add("pizza-img"),p.src="./img/classic-pepperoni.jpg",s.appendChild(p);const m=document.createElement("div");m.classList.add("pizza-text-container");const r=document.createElement("h1");r.textContent="Classic Pepperoni Pizza";const u=document.createElement("p");u.textContent="2200 Calories",m.appendChild(r),m.appendChild(u),o.appendChild(s),o.appendChild(m),t.appendChild(o);const C=document.createElement("div");C.classList.add("pizza-container");const h=document.createElement("div"),E=document.createElement("img");E.classList.add("pizza-img"),E.src="./img/veggie.jpg",h.appendChild(E);const z=document.createElement("div");z.classList.add("pizza-text-container");const L=document.createElement("h1");L.textContent="Classic Veggie Pizza";const g=document.createElement("p");g.textContent="1800 Calories",z.appendChild(L),z.appendChild(g),C.appendChild(h),C.appendChild(z),t.appendChild(C);const v=document.createElement("div");v.classList.add("pizza-container");const x=document.createElement("div"),b=document.createElement("img");b.classList.add("pizza-img"),b.src="./img/hula-hawaiian.jpg",x.appendChild(b);const y=document.createElement("div");y.classList.add("pizza-text-container");const S=document.createElement("h1");S.textContent="Hula Hawaiian Pizza";const q=document.createElement("p");q.textContent="2300 Calories",y.appendChild(S),y.appendChild(q),v.appendChild(x),v.appendChild(y),t.appendChild(v),e.appendChild(t)})()})),i.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("page-content"),t.classList.add("contact");const n=document.createElement("form"),d=document.createElement("input");d.type="text",d.placeholder="Full Name",d.setAttribute("id","full-name");const c=document.createElement("input");c.type="email",c.placeholder="email@email.com",c.setAttribute("id","email");const a=document.createElement("input");a.type="tel",a.placeholder="555-555-5555",a.setAttribute("id","phone-number");const i=document.createElement("input");i.type="submit",i.textContent="Submit",n.appendChild(d),n.appendChild(c),n.appendChild(a),n.appendChild(i),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();