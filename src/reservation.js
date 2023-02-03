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

  //phone reservation information
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

  //online reservation information
  const onlineReserve = document.createElement("div");
  onlineReserve.id = "onlineReserve";
  const online1 = document.createElement("p");
  online1.innerHTML = "Or make an online reservation";
  online1.classList.add("infoText");
  //reservation form
  const reserveForm = document.createElement("FORM");
  reserveForm.id = "reservationForm";
  const nameDiv = document.createElement("div");
  const name = document.createElement("p");
  name.classList.add("infoText");
  name.innerHTML = "Name: ";
  const nameInput = document.createElement("INPUT");
  nameInput.setAttribute("type", "text");
  nameDiv.appendChild(name);
  nameDiv.appendChild(nameInput);
  const surnameDiv = document.createElement("div");
  const surname = document.createElement("p");
  surname.classList.add("infoText");
  surname.innerHTML = "Surname: ";
  const surnameInput = document.createElement("INPUT");
  surnameInput.setAttribute("type", "text");
  surnameDiv.appendChild(surname);
  surnameDiv.appendChild(surnameInput);
  const emailDiv = document.createElement("div");
  const email = document.createElement("p");
  email.classList.add("infoText");
  email.innerHTML = "Email address: ";
  const emailInput = document.createElement("INPUT");
  emailInput.setAttribute("type", "email");
  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);
  const dateDiv = document.createElement("div");
  const date = document.createElement("p");
  date.classList.add("infoText");
  date.innerHTML = "Desired date: ";
  const dateInput = document.createElement("INPUT");
  dateInput.setAttribute("type", "datetime-local");
  dateDiv.appendChild(date);
  dateDiv.appendChild(dateInput);
  reserveForm.appendChild(nameDiv);
  reserveForm.appendChild(surnameDiv);
  reserveForm.appendChild(emailDiv);
  reserveForm.appendChild(dateDiv);

  onlineReserve.appendChild(online1);
  onlineReserve.appendChild(reserveForm);
  reserve.appendChild(onlineReserve);
}
