import { header } from "./header";

//home page
export function initialLoad() {
  const content = document.querySelector("#content");
  if (document.querySelector("#content").childElementCount > 1) {
    content.removeChild(content.lastChild);
  }
  document.body.style.backgroundImage = null;
  document.body.style.backgroundImage = "url('../Assets/かつ丼.jpg')";

  const homeDiv = document.createElement("div");
  homeDiv.id = "homeDiv";
  const heroText = document.createElement("p");
  heroText.innerHTML = "AUTHENTIC JAPANESE RICE BOWLS";
  heroText.classList.add("hero");
  homeDiv.appendChild(heroText);
  content.appendChild(homeDiv);
}
