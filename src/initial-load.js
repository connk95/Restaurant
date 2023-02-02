import { header } from "./header";

//home page
export function initialLoad() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  document.body.style.backgroundImage = "url('../Assets/かつ丼.jpg')";

  header();

  const heroText = document.createElement("p");
  heroText.innerHTML = "AUTHENTIC JAPANESE RICE BOWLS";
  heroText.classList.add("hero");
  content.appendChild(heroText);
}
