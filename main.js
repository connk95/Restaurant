(()=>{"use strict";function e(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="header",e.appendChild(n);const t=document.createElement("title");t.id="title",n.appendChild(t);const d=document.createElement("navBar");d.id="navBar",n.appendChild(d);const a=document.createElement("h1");a.innerHTML="ConaDon",a.classList.add("title"),t.appendChild(a);const c=document.createElement("h1");c.innerHTML="コナー丼",c.classList.add("title"),t.appendChild(c);const i=document.createElement("p");i.innerHTML="Home",i.id="home",i.classList.add("navigation"),d.appendChild(i);const o=document.createElement("p");o.innerHTML="Menu",o.id="menu",o.classList.add("navigation"),d.appendChild(o);const s=document.createElement("p");s.innerHTML="Reservation",s.id="reservation",s.classList.add("navigation"),d.appendChild(s);const l=document.createElement("p");l.innerHTML="Access",l.id="access",l.classList.add("navigation"),d.appendChild(l);const r=document.createElement("p");r.innerHTML="About",r.id="about",r.classList.add("navigation"),d.appendChild(r)}function n(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage="url('../Assets/かつ丼.jpg')",e();const t=document.createElement("p");t.innerHTML="AUTHENTIC JAPANESE RICE BOWLS",t.classList.add("hero"),n.appendChild(t)}function t(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage="url('../Assets/close-up-dark-blue-fabric-texture-free-photo.jpg')",e();const t=document.createElement("div");t.id="menuDiv",n.appendChild(t),d("../Assets/butadon.jpg","ButaDon","$12"),d("../Assets/oyakodon.jpg","OyakoDon","$12"),d("../Assets/gyudon.jpg","GyuDon","$15"),d("../Assets/karaage.jpg","Karaage","$15")}function d(e,n,t){const d=document.querySelector("#menuDiv"),a=document.createElement("div");a.classList.add("dish");const c=document.createElement("div"),i=document.createElement("img");i.src=e,i.classList.add("foodPic"),c.appendChild(i);const o=document.createElement("div");o.classList.add("description");const s=document.createElement("p");s.innerHTML=n;const l=document.createElement("p");l.innerHTML=t,o.appendChild(s),o.appendChild(l),a.appendChild(c),a.appendChild(o),d.appendChild(a)}function a(){const e=document.querySelector("#content");e.replaceChildren(),document.body.style.backgroundImage="url('../Assets/close-up-dark-blue-fabric-texture-free-photo.jpg')";const n=document.createElement("div");n.id="header",e.appendChild(n);const t=document.createElement("title");t.id="title",n.appendChild(t);const d=document.createElement("navBar");d.id="navBar",n.appendChild(d);const a=document.createElement("h1");a.innerHTML="ConaDon",a.classList.add("title"),t.appendChild(a);const c=document.createElement("h1");c.innerHTML="コナー丼",c.classList.add("title"),t.appendChild(c);const i=document.createElement("p");i.innerHTML="Home",i.id="home",i.classList.add("navigation"),d.appendChild(i);const o=document.createElement("p");o.innerHTML="Menu",o.id="menu",o.classList.add("navigation"),d.appendChild(o);const s=document.createElement("p");s.innerHTML="Reservation",s.id="reservation",s.classList.add("navigation"),d.appendChild(s);const l=document.createElement("p");l.innerHTML="Access",l.id="access",l.classList.add("navigation"),d.appendChild(l);const r=document.createElement("p");r.innerHTML="About",r.id="about",r.classList.add("navigation"),d.appendChild(r)}function c(){const e=document.querySelector("#content");e.replaceChildren(),document.body.style.backgroundImage="url('../Assets/close-up-dark-blue-fabric-texture-free-photo.jpg')";const n=document.createElement("div");n.id="header",e.appendChild(n);const t=document.createElement("title");t.id="title",n.appendChild(t);const d=document.createElement("navBar");d.id="navBar",n.appendChild(d);const a=document.createElement("h1");a.innerHTML="ConaDon",a.classList.add("title"),t.appendChild(a);const c=document.createElement("h1");c.innerHTML="コナー丼",c.classList.add("title"),t.appendChild(c);const i=document.createElement("p");i.innerHTML="Home",i.id="home",i.classList.add("navigation"),d.appendChild(i);const o=document.createElement("p");o.innerHTML="Menu",o.id="menu",o.classList.add("navigation"),d.appendChild(o);const s=document.createElement("p");s.innerHTML="Reservation",s.id="reservation",s.classList.add("navigation"),d.appendChild(s);const l=document.createElement("p");l.innerHTML="Access",l.id="access",l.classList.add("navigation"),d.appendChild(l);const r=document.createElement("p");r.innerHTML="About",r.id="about",r.classList.add("navigation"),d.appendChild(r)}function i(){const e=document.querySelector("#content");e.replaceChildren(),document.body.style.backgroundImage="url('../Assets/close-up-dark-blue-fabric-texture-free-photo.jpg')";const n=document.createElement("div");n.id="header",e.appendChild(n);const t=document.createElement("title");t.id="title",n.appendChild(t);const d=document.createElement("navBar");d.id="navBar",n.appendChild(d);const a=document.createElement("h1");a.innerHTML="ConaDon",a.classList.add("title"),t.appendChild(a);const c=document.createElement("h1");c.innerHTML="コナー丼",c.classList.add("title"),t.appendChild(c);const i=document.createElement("p");i.innerHTML="Home",i.id="home",i.classList.add("navigation"),d.appendChild(i);const o=document.createElement("p");o.innerHTML="Menu",o.id="menu",o.classList.add("navigation"),d.appendChild(o);const s=document.createElement("p");s.innerHTML="Reservation",s.id="reservation",s.classList.add("navigation"),d.appendChild(s);const l=document.createElement("p");l.innerHTML="Access",l.id="access",l.classList.add("navigation"),d.appendChild(l);const r=document.createElement("p");r.innerHTML="About",r.id="about",r.classList.add("navigation"),d.appendChild(r)}n(),document.querySelector("#home").addEventListener("click",n),document.querySelector("#menu").addEventListener("click",t),document.querySelector("#reservation").addEventListener("click",a),document.querySelector("#access").addEventListener("click",c),document.querySelector("#about").addEventListener("click",i)})();