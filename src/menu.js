import butaDon from "./Assets/butaDon.jpg";
import oyakoDon from "./Assets/oyakodon.jpg";
import gyuDon from "./Assets/gyudon.jpg";
import karaageDon from "./Assets/karaage.jpg";
import katsuDon from "./Assets/katsudon.jpg";
import tenDon from "./Assets/tendon.jpg";
import unaDon from "./Assets/unadon.jpg";
import curryRice from "./Assets/curryrice.jpg";

//menu page
export function menuPage() {
  const content = document.querySelector("#content");
  if (document.querySelector("#content").childElementCount > 1) {
    content.removeChild(content.lastChild);
  }

  //create div for menu
  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  content.appendChild(menuDiv);

  //add menu items
  foodItem(butaDon, "ButaDon", "$12");
  foodItem(oyakoDon, "OyakoDon", "$12");
  foodItem(gyuDon, "GyuDon", "$15");
  foodItem(karaageDon, "KaraageDon", "$15");
  foodItem(katsuDon, "KatsuDon", "$15");
  foodItem(tenDon, "TenDon", "$12");
  foodItem(unaDon, "UnaDon", "$15");
  foodItem(curryRice, "Curry Rice", "$10");
}

//create & append menu items
function foodItem(image, name, price) {
  const menuDiv = document.querySelector("#menuDiv");

  const dish = document.createElement("div");
  dish.classList.add("dish");

  const picture = document.createElement("div");
  const img = document.createElement("img");
  img.src = image;
  img.classList.add("foodPic");
  picture.appendChild(img);

  const description = document.createElement("div");
  description.classList.add("description");
  const info = document.createElement("p");
  info.innerHTML = name;
  const itemPrice = document.createElement("p");
  itemPrice.innerHTML = price;
  description.appendChild(info);
  description.appendChild(itemPrice);

  dish.appendChild(picture);
  dish.appendChild(description);

  menuDiv.appendChild(dish);
}
