import { header } from "./header";

export function accessPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  document.body.style.backgroundImage = null;
  document.body.style.backgroundColor = "beige";

  header();

  const accessDiv = document.createElement("div");
  accessDiv.id = "accessDiv";
  content.appendChild(accessDiv);

  const accessInfo = document.createElement("p");
  accessInfo.innerHTML =
    "We are located on 123 ABC Street, across from ZYX Bank";
  accessInfo.classList.add("infoText");
  const parking = document.createElement("p");
  parking.innerHTML =
    "Underground parking is available for customers at the bank";
  parking.classList.add("infoText");
  accessDiv.appendChild(accessInfo);
  accessDiv.appendChild(parking);

  const mapDiv = document.createElement("div");
  const map = document.createElement("img");
  map.src = "../Assets/map.jpg";
  map.id = "map";
  mapDiv.appendChild(map);
  accessDiv.appendChild(mapDiv);

  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hoursDiv";
  const hours = document.createElement("p");
  hours.innerHTML = "Hours";
  hoursDiv.appendChild(hours);

  openHours("Sunday", "10:00 - 19:00");
  openHours("Monday", "11:00 - 22:00");
  openHours("Tuesday", "11:00 - 22:00");
  openHours("Wednesday", "11:00 - 22:00");
  openHours("Thursday", "11:00 - 22:00");
  openHours("Friday", "11:00 - 24:00");
  openHours("Saturday", "11:00 - 24:00");
}

function openHours(day, hours) {
  const hoursDiv = document.querySelector("#hoursDiv");

  const dayDiv = document.createElement("div");
  dayDiv.id = "dayDiv";
  const weekDay = document.createElement("p");
  weekDay.innerHTML = day;
  const dayHours = document.createElement("p");
  dayHours.innerHTML = hours;
  dayDiv.appendChild(weekDay);
  dayDiv.appendChild(dayHours);
  hoursDiv.appendChild(dayDiv);
}
