import { initialLoad } from "./initial-load.js";
import { menuPage } from "./menu.js";
import { reservationPage } from "./reservation.js";
import { accessPage } from "./access.js";
import { header } from "./header.js";

header();
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
