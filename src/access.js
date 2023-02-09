import areaMap from "./Assets/map.jpg";

//access page
export function accessPage() {
  const content = document.querySelector("#content");
  if (document.querySelector("#content").childElementCount > 1) {
    content.removeChild(content.lastChild);
  }

  const accessDiv = document.createElement("div");
  accessDiv.id = "accessDiv";
  content.appendChild(accessDiv);

  //address
  const accessInfo = document.createElement("p");
  accessInfo.innerHTML =
    "We are located on 123 ABC Street, across from ZYX Bank";
  accessInfo.classList.add("flairText");
  const parking = document.createElement("p");
  parking.innerHTML =
    "Underground parking is available for customers at the bank";
  parking.classList.add("flairText");
  accessDiv.appendChild(accessInfo);
  accessDiv.appendChild(parking);

  //div for map and hours
  const mapDiv = document.createElement("div");
  mapDiv.id = "mapDiv";
  const map = document.createElement("img");
  map.src = areaMap;
  map.id = "map";
  mapDiv.appendChild(map);
  accessDiv.appendChild(mapDiv);

  const hoursDiv = document.createElement("div");
  mapDiv.appendChild(hoursDiv);
  hoursDiv.id = "hoursDiv";
  const hours = document.createElement("p");
  hours.innerHTML = "Hours";
  hours.classList.add("flairText");
  hoursDiv.appendChild(hours);

  //display hours of operation
  const openHours = (day, hours) => {
    const hoursDiv = document.querySelector("#hoursDiv");

    const dayDiv = document.createElement("div");
    dayDiv.classList.add("dayDiv");
    const weekDay = document.createElement("p");
    weekDay.innerHTML = day;
    weekDay.classList.add("infoText");
    const dayHours = document.createElement("p");
    dayHours.innerHTML = hours;
    dayHours.classList.add("infoText");
    dayDiv.appendChild(weekDay);
    dayDiv.appendChild(dayHours);
    hoursDiv.appendChild(dayDiv);
  };

  const sunday = openHours("Sunday", "10:00 - 19:00");
  const monday = openHours("Monday", "11:00 - 22:00");
  const tuesday = openHours("Tuesday", "11:00 - 22:00");
  const wednesday = openHours("Wednesday", "11:00 - 22:00");
  const thursday = openHours("Thursday", "11:00 - 22:00");
  const friday = openHours("Friday", "11:00 - 24:00");
  const saturday = openHours("Saturday", "11:00 - 24:00");
}
