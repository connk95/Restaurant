//website header & navigation with menu, reservation, access, about
export function header() {
  const content = document.querySelector("#content");
  const headerDiv = document.createElement("div");

  const header = document.createElement("div");
  header.id = "header";
  headerDiv.appendChild(header);

  const title = document.createElement("title");
  title.id = "title";
  header.appendChild(title);

  const navBar = document.createElement("navBar");
  navBar.id = "navBar";
  header.appendChild(navBar);

  const eTitle = document.createElement("h1");
  eTitle.innerHTML = "ConaDon";
  eTitle.classList.add("title");
  title.appendChild(eTitle);

  const jTitle = document.createElement("h1");
  jTitle.innerHTML = "コナー丼";
  jTitle.classList.add("title");
  title.appendChild(jTitle);

  const home = document.createElement("p");
  home.innerHTML = "Home";
  home.id = "home";
  home.classList.add("navigation");
  navBar.appendChild(home);

  const menu = document.createElement("p");
  menu.innerHTML = "Menu";
  menu.id = "menu";
  menu.classList.add("navigation");
  navBar.appendChild(menu);

  const reservation = document.createElement("p");
  reservation.innerHTML = "Reservation";
  reservation.id = "reservation";
  reservation.classList.add("navigation");
  navBar.appendChild(reservation);

  const access = document.createElement("p");
  access.innerHTML = "Access";
  access.id = "access";
  access.classList.add("navigation");
  navBar.appendChild(access);

  content.appendChild(headerDiv);
}
