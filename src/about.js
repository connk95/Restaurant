import { header } from "./header";

export function aboutPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  document.body.style.backgroundImage = null;
  document.body.style.backgroundColor = "beige";

  header();
}
