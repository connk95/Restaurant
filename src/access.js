export function accessPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  document.body.style.backgroundImage =
    "url('../Assets/close-up-dark-blue-fabric-texture-free-photo.jpg')";

  const header = document.createElement("div");
  header.id = "header";
  content.appendChild(header);

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

  const about = document.createElement("p");
  about.innerHTML = "About";
  about.id = "about";
  about.classList.add("navigation");
  navBar.appendChild(about);
}
