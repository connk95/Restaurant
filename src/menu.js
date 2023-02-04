import { header } from "./header";

export function menuPage() {
  const content = document.querySelector("#content");
  content.removeChild(content.lastChild);
  document.body.style.backgroundImage = null;
  document.body.style.backgroundColor = "beige";

  //create div for menu
  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  content.appendChild(menuDiv);

  //add menu items
  foodItem("../Assets/butadon.jpg", "ButaDon", "$12");

  foodItem("../Assets/oyakodon.jpg", "OyakoDon", "$12");

  foodItem("../Assets/gyudon.jpg", "GyuDon", "$15");

  foodItem("../Assets/karaage.jpg", "KaraageDon", "$15");

  foodItem("../Assets/katsudon.jpg", "KatsuDon", "$15");

  foodItem("../Assets/tendon.jpg", "TenDon", "$12");

  foodItem("../Assets/unadon.jpg", "UnaDon", "$15");

  foodItem("../Assets/curryrice.jpg", "Curry Rice", "$10");
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
