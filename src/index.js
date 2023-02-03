import { initialLoad } from "./initial-load.js";
import { menuPage } from "./menu.js";
import { reservationPage } from "./reservation.js";
import { accessPage } from "./access.js";
import { aboutPage } from "./about.js";

initialLoad();

const pageNav = (function () {
  const homeTab = document.querySelector("#home");
  homeTab.addEventListener("click", initialLoad);

  const menuTab = document.querySelector("#menu");
  menuTab.addEventListener("click", menuPage);

  const reservationTab = document.querySelector("#reservation");
  reservationTab.addEventListener("click", reservationPage);

  const accessTab = document.querySelector("#access");
  accessTab.addEventListener("click", accessPage);
})();
// const navigate = document.querySelector(".navigation");x

// for (let i = 0; i < navigate.length; i++) {
//   navigate[i].addEventListener("mouseenter", function () {
//     this.classList.remove("navigation");
//     this.classList.add("hover");
//   });
//   navigate[i].addEventListener("mouseleave", function () {
//     this.classList.add("navigation");
//     this.classList.remove("hover");
//   });
// }
