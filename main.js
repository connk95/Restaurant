(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),a=t.n(i),r=t(645),o=t.n(r),c=t(667),d=t.n(c),l=new URL(t(304),t.b),s=o()(a()),p=d()(l);s.push([e.id,'body {\n  height: 100%;\n  margin: 0;\n  background: beige;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}\n\np,\nh1,\nh2 {\n  color: white;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  margin: 0;\n}\n\n#header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: rgb(255, 20, 94);\n  padding: 10px;\n}\n\n#title {\n  display: flex;\n  flex-direction: row;\n}\n\n#title > h1 {\n  padding: 0 20px 0 20px;\n}\n\n#title > h1:first-child {\n  color: black;\n  border: 5px solid black;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  font-weight: 800;\n}\n\n#navBar {\n  display: flex;\n  flex-direction: row;\n}\n\n#navBar > p {\n  padding: 0 10px 0 10px;\n}\n\n#homeDiv {\n  display: flex;\n  background: url('+p+') no-repeat center center fixed;\n  -webkit-background-size: cover;\n  background-size: cover;\n  padding: 62px 200px 0 200px;\n  height: fit-content;\n}\n\n.hero {\n  color: white;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  font-size: 120px;\n  font-weight: 800;\n}\n\n#menuDiv {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 100px;\n}\n\n.dish {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  border: 1px solid grey;\n  width: 300px;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.description > :first-child {\n  color: black;\n  border: 4px solid black;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  font-weight: 800;\n  font-size: 24px;\n  padding: 0 10px 0 10px;\n}\n\n.description > :nth-child(2) {\n  color: black;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n.foodPic {\n  height: 300px;\n  width: 300px;\n}\n\n#reservationDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px;\n}\n\n.flairText {\n  color: black;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n  font-weight: 800;\n  font-size: 24px;\n}\n\n#onlineReserve {\n  display: flex;\n  flex-direction: column;\n  max-width: fit-content;\n}\n\n#reservationForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reservationForm > div {\n  display: flex;\n  flex-direction: row;\n  height: fit-content;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\ninput[type="text"],\ninput[type="email"],\ninput[type="datetime-local"] {\n  width: 200px;\n  padding: 4px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  height: 30px;\n}\n\n#accessDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 100px;\n}\n\n#map {\n  height: 400px;\n}\n\n#mapDiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n}\n\n.infoText {\n  color: black;\n  font-size: 18px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#hoursDiv {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n}\n\n.dayDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\nbutton {\n  background-color: rgb(255, 20, 94);\n  color: white;\n  font-size: 18px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 180px;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0;\n  border: none;\n}\n',""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},o=[],c=0;c<e.length;c++){var d=e[c],l=i.base?d[0]+i.base:d[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,i);i.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=i(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var c=t(r[o]);n[c].references--}for(var d=i(e,a),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},304:(e,n,t)=>{e.exports=t.p+"6992d5b9d78a7f8d7081.jpg"}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.querySelector("#content");document.querySelector("#content").childElementCount>1&&e.removeChild(e.lastChild);const n=document.createElement("div");n.id="homeDiv";const t=document.createElement("p");t.innerHTML="AUTHENTIC JAPANESE RICE BOWLS",t.classList.add("hero"),n.appendChild(t),e.appendChild(n)}const n=t.p+"cad15d1fbfadef3157ee.jpg",i=t.p+"b1960f2092ee5b81642a.jpg",a=t.p+"4e308b6751ba7e21755c.jpg",r=t.p+"119663eef719befd5eaf.jpg",o=t.p+"c21a012109e021773d0b.jpg",c=t.p+"9dd46051147ffeb31137.jpg",d=t.p+"ceaafa85f3bca009c57a.jpg",l=t.p+"06a72e20a7590649f1b7.jpg";function s(){const e=document.querySelector("#content");document.querySelector("#content").childElementCount>1&&e.removeChild(e.lastChild);const t=document.createElement("div");t.id="menuDiv",e.appendChild(t),p(n,"ButaDon","$12"),p(i,"OyakoDon","$12"),p(a,"GyuDon","$15"),p(r,"KaraageDon","$15"),p(o,"KatsuDon","$15"),p(c,"TenDon","$12"),p(d,"UnaDon","$15"),p(l,"Curry Rice","$10")}function p(e,n,t){const i=document.querySelector("#menuDiv"),a=document.createElement("div");a.classList.add("dish");const r=document.createElement("div"),o=document.createElement("img");o.src=e,o.classList.add("foodPic"),r.appendChild(o);const c=document.createElement("div");c.classList.add("description");const d=document.createElement("p");d.innerHTML=n;const l=document.createElement("p");l.innerHTML=t,c.appendChild(d),c.appendChild(l),a.appendChild(r),a.appendChild(c),i.appendChild(a)}function u(){const e=document.querySelector("#content");document.querySelector("#content").childElementCount>1&&e.removeChild(e.lastChild);const n=document.createElement("div");n.id="reservationDiv",e.appendChild(n);const t=document.createElement("div"),i=document.createElement("p");i.classList.add("flairText");const a=document.createElement("p");a.classList.add("flairText"),a.id="phoneNumber",i.innerHTML="Please call us to reserve your table at:",a.innerHTML="416·000·0000",t.appendChild(i),t.appendChild(a),n.appendChild(t);const r=document.createElement("div");r.id="onlineReserve";const o=document.createElement("p");o.innerHTML="Or make an online reservation",o.classList.add("flairText");const c=document.createElement("FORM");c.id="reservationForm";const d=document.createElement("div"),l=document.createElement("p");l.classList.add("flairText"),l.innerHTML="Name: ";const s=document.createElement("INPUT");s.setAttribute("type","text"),d.appendChild(l),d.appendChild(s);const p=document.createElement("div"),u=document.createElement("p");u.classList.add("flairText"),u.innerHTML="Surname: ";const m=document.createElement("INPUT");m.setAttribute("type","text"),p.appendChild(u),p.appendChild(m);const f=document.createElement("div"),h=document.createElement("p");h.classList.add("flairText"),h.innerHTML="Email address: ";const v=document.createElement("INPUT");v.setAttribute("type","email"),f.appendChild(h),f.appendChild(v);const x=document.createElement("div"),y=document.createElement("p");y.classList.add("flairText"),y.innerHTML="Desired date: ";const g=document.createElement("INPUT");g.setAttribute("type","datetime-local"),x.appendChild(y),x.appendChild(g);const b=document.createElement("BUTTON");b.innerHTML="Submit",b.setAttribute("type","submit"),c.appendChild(d),c.appendChild(p),c.appendChild(f),c.appendChild(x),c.appendChild(b),r.appendChild(o),r.appendChild(c),n.appendChild(r)}const m=t.p+"253b02d7354cd13c5423.jpg";function f(){const e=document.querySelector("#content");document.querySelector("#content").childElementCount>1&&e.removeChild(e.lastChild);const n=document.createElement("div");n.id="accessDiv",e.appendChild(n);const t=document.createElement("p");t.innerHTML="We are located on 123 ABC Street, across from ZYX Bank",t.classList.add("flairText");const i=document.createElement("p");i.innerHTML="Underground parking is available for customers at the bank",i.classList.add("flairText"),n.appendChild(t),n.appendChild(i);const a=document.createElement("div");a.id="mapDiv";const r=document.createElement("img");r.src=m,r.id="map",a.appendChild(r),n.appendChild(a);const o=document.createElement("div");a.appendChild(o),o.id="hoursDiv";const c=document.createElement("p");c.innerHTML="Hours",c.classList.add("flairText"),o.appendChild(c);const d=(e,n)=>{const t=document.querySelector("#hoursDiv"),i=document.createElement("div");i.classList.add("dayDiv");const a=document.createElement("p");a.innerHTML=e,a.classList.add("infoText");const r=document.createElement("p");r.innerHTML=n,r.classList.add("infoText"),i.appendChild(a),i.appendChild(r),t.appendChild(i)};d("Sunday","10:00 - 19:00"),d("Monday","11:00 - 22:00"),d("Tuesday","11:00 - 22:00"),d("Wednesday","11:00 - 22:00"),d("Thursday","11:00 - 22:00"),d("Friday","11:00 - 24:00"),d("Saturday","11:00 - 24:00")}var h=t(379),v=t.n(h),x=t(795),y=t.n(x),g=t(569),b=t.n(g),C=t(565),E=t.n(C),T=t(216),L=t.n(T),w=t(589),S=t.n(w),M=t(426),H={};H.styleTagTransform=S(),H.setAttributes=E(),H.insert=b().bind(null,"head"),H.domAPI=y(),H.insertStyleElement=L(),v()(M.Z,H),M.Z&&M.Z.locals&&M.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div");t.id="header",n.appendChild(t);const i=document.createElement("title");i.id="title",t.appendChild(i);const a=document.createElement("navBar");a.id="navBar",t.appendChild(a);const r=document.createElement("h1");r.innerHTML="ConaDon",r.classList.add("title"),i.appendChild(r);const o=document.createElement("h1");o.innerHTML="コナー丼",o.classList.add("title"),i.appendChild(o);const c=document.createElement("p");c.innerHTML="Home",c.id="home",c.classList.add("navigation"),a.appendChild(c);const d=document.createElement("p");d.innerHTML="Menu",d.id="menu",d.classList.add("navigation"),a.appendChild(d);const l=document.createElement("p");l.innerHTML="Reservation",l.id="reservation",l.classList.add("navigation"),a.appendChild(l);const s=document.createElement("p");s.innerHTML="Access",s.id="access",s.classList.add("navigation"),a.appendChild(s),e.appendChild(n)}(),e(),document.querySelector("#home").addEventListener("click",e),document.querySelector("#menu").addEventListener("click",s),document.querySelector("#reservation").addEventListener("click",u),document.querySelector("#access").addEventListener("click",f)})()})();