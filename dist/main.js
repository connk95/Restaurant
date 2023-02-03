(()=>{"use strict";function e(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="header",e.appendChild(n);const t=document.createElement("title");t.id="title",n.appendChild(t);const d=document.createElement("navBar");d.id="navBar",n.appendChild(d);const c=document.createElement("h1");c.innerHTML="ConaDon",c.classList.add("title"),t.appendChild(c);const a=document.createElement("h1");a.innerHTML="コナー丼",a.classList.add("title"),t.appendChild(a);const o=document.createElement("p");o.innerHTML="Home",o.id="home",o.classList.add("navigation"),d.appendChild(o);const i=document.createElement("p");i.innerHTML="Menu",i.id="menu",i.classList.add("navigation"),d.appendChild(i);const s=document.createElement("p");s.innerHTML="Reservation",s.id="reservation",s.classList.add("navigation"),d.appendChild(s);const l=document.createElement("p");l.innerHTML="Access",l.id="access",l.classList.add("navigation"),d.appendChild(l)}function n(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage="url('../Assets/かつ丼.jpg')",e();const t=document.createElement("p");t.innerHTML="AUTHENTIC JAPANESE RICE BOWLS",t.classList.add("hero"),n.appendChild(t)}function t(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage=null,document.body.style.backgroundColor="beige",e();const t=document.createElement("div");t.id="menuDiv",n.appendChild(t),d("../Assets/butadon.jpg","ButaDon","$12"),d("../Assets/oyakodon.jpg","OyakoDon","$12"),d("../Assets/gyudon.jpg","GyuDon","$15"),d("../Assets/karaage.jpg","KaraageDon","$15"),d("../Assets/katsudon.jpg","KatsuDon","$15"),d("../Assets/tendon.jpg","TenDon","$12"),d("../Assets/unadon.jpg","UnaDon","$15"),d("../Assets/curryrice.jpg","Curry Rice","$10")}function d(e,n,t){const d=document.querySelector("#menuDiv"),c=document.createElement("div");c.classList.add("dish");const a=document.createElement("div"),o=document.createElement("img");o.src=e,o.classList.add("foodPic"),a.appendChild(o);const i=document.createElement("div");i.classList.add("description");const s=document.createElement("p");s.innerHTML=n;const l=document.createElement("p");l.innerHTML=t,i.appendChild(s),i.appendChild(l),c.appendChild(a),c.appendChild(i),d.appendChild(c)}function c(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage=null,document.body.style.backgroundColor="beige",e();const t=document.createElement("div");t.id="reservationDiv",n.appendChild(t);const d=document.createElement("div"),c=document.createElement("p");c.classList.add("infoText");const a=document.createElement("p");a.classList.add("infoText"),a.id="phoneNumber",c.innerHTML="Please call us to reserve your table at:",a.innerHTML="416·000·0000",d.appendChild(c),d.appendChild(a),t.appendChild(d);const o=document.createElement("div");o.id="onlineReserve";const i=document.createElement("p");i.innerHTML="Or make an online reservation",i.classList.add("infoText");const s=document.createElement("FORM");s.id="reservationForm";const l=document.createElement("div"),r=document.createElement("p");r.classList.add("infoText"),r.innerHTML="Name: ";const m=document.createElement("INPUT");m.setAttribute("type","text"),l.appendChild(r),l.appendChild(m);const p=document.createElement("div"),u=document.createElement("p");u.classList.add("infoText"),u.innerHTML="Surname: ";const h=document.createElement("INPUT");h.setAttribute("type","text"),p.appendChild(u),p.appendChild(h);const C=document.createElement("div"),E=document.createElement("p");E.classList.add("infoText"),E.innerHTML="Email address: ";const L=document.createElement("INPUT");L.setAttribute("type","email"),C.appendChild(E),C.appendChild(L);const y=document.createElement("div"),v=document.createElement("p");v.classList.add("infoText"),v.innerHTML="Desired date: ";const T=document.createElement("INPUT");T.setAttribute("type","datetime-local"),y.appendChild(v),y.appendChild(T),s.appendChild(l),s.appendChild(p),s.appendChild(C),s.appendChild(y),o.appendChild(i),o.appendChild(s),t.appendChild(o)}function a(){const n=document.querySelector("#content");n.replaceChildren(),document.body.style.backgroundImage=null,document.body.style.backgroundColor="beige",e();const t=document.createElement("div");t.id="accessDiv",n.appendChild(t);const d=document.createElement("p");d.innerHTML="We are located on 123 ABC Street, across from ZYX Bank",d.classList.add("infoText");const c=document.createElement("p");c.innerHTML="Underground parking is available for customers at the bank",c.classList.add("infoText"),t.appendChild(d),t.appendChild(c);const a=document.createElement("div"),i=document.createElement("img");i.src="../Assets/map.jpg",i.id="map",a.appendChild(i),t.appendChild(a);const s=document.createElement("div");s.id="hoursDiv";const l=document.createElement("p");l.innerHTML="Hours",s.appendChild(l),o("Sunday","10:00 - 19:00"),o("Monday","11:00 - 22:00"),o("Tuesday","11:00 - 22:00"),o("Wednesday","11:00 - 22:00"),o("Thursday","11:00 - 22:00"),o("Friday","11:00 - 24:00"),o("Saturday","11:00 - 24:00")}function o(e,n){const t=document.querySelector("#hoursDiv"),d=document.createElement("div");d.id="dayDiv";const c=document.createElement("p");c.innerHTML=e;const a=document.createElement("p");a.innerHTML=n,d.appendChild(c),d.appendChild(a),t.appendChild(d)}n(),document.querySelector("#home").addEventListener("click",n),document.querySelector("#menu").addEventListener("click",t),document.querySelector("#reservation").addEventListener("click",c),document.querySelector("#access").addEventListener("click",a)})();