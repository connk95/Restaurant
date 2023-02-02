import { header } from "./header";

export function reservationPage() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  document.body.style.backgroundImage = null;
  document.body.style.backgroundColor = "beige";

  header();

  const reserve = document.createElement("div");
  reserve.id = "reservationDiv";
  content.appendChild(reserve);

  const phoneReserve = document.createElement("div");
  const phone1 = document.createElement("p");
  phone1.classList.add("infoText");
  const phone2 = document.createElement("p");
  phone2.classList.add("infoText");
  phone2.id = "phoneNumber";
  phone1.innerHTML = "Please call us to reserve your table at:";
  phone2.innerHTML = "416·000·0000";
  phoneReserve.appendChild(phone1);
  phoneReserve.appendChild(phone2);
  reserve.appendChild(phoneReserve);

  const onlineReserve = document.createElement("div");
  const online1 = document.createElement("p");
  online1.innerHTML = "Make an online reservation";
  online1.classList.add("infoText");
  const reserveForm = document.createElement("FORM");
  reserveForm.id = "reservationForm";
  const firstInput = document.createElement("INPUT");
  firstInput.setAttribute("type", "text");
  const secondInput = document.createElement("INPUT");
  secondInput.setAttribute("type", "text");
  const emailInput = document.createElement("INPUT");
  emailInput.setAttribute("type", "email");
  const date = document.createElement("INPUT");
  date.setAttribute("type", "datetime-local");
  reserveForm.appendChild(firstInput);
  reserveForm.appendChild(secondInput);
  reserveForm.appendChild(emailInput);
  reserveForm.appendChild(date);

  onlineReserve.appendChild(online1);
  onlineReserve.appendChild(reserveForm);
  reserve.appendChild(onlineReserve);
}
