//reservation page
export function reservationPage() {
  const content = document.querySelector("#content");
  if (document.querySelector("#content").childElementCount > 1) {
    content.removeChild(content.lastChild);
  }

  const reserve = document.createElement("div");
  reserve.id = "reservationDiv";
  content.appendChild(reserve);

  //phone reservation information
  const phoneReserve = document.createElement("div");
  const phone1 = document.createElement("p");
  phone1.classList.add("flairText");
  const phone2 = document.createElement("p");
  phone2.classList.add("flairText");
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
  online1.classList.add("flairText");
  //reservation form
  const reserveForm = document.createElement("FORM");
  reserveForm.id = "reservationForm";
  const nameDiv = document.createElement("div");
  const name = document.createElement("p");
  name.classList.add("flairText");
  name.innerHTML = "Name: ";
  const nameInput = document.createElement("INPUT");
  nameInput.setAttribute("type", "text");
  nameDiv.appendChild(name);
  nameDiv.appendChild(nameInput);
  const surnameDiv = document.createElement("div");
  const surname = document.createElement("p");
  surname.classList.add("flairText");
  surname.innerHTML = "Surname: ";
  const surnameInput = document.createElement("INPUT");
  surnameInput.setAttribute("type", "text");
  surnameDiv.appendChild(surname);
  surnameDiv.appendChild(surnameInput);
  const emailDiv = document.createElement("div");
  const email = document.createElement("p");
  email.classList.add("flairText");
  email.innerHTML = "Email address: ";
  const emailInput = document.createElement("INPUT");
  emailInput.setAttribute("type", "email");
  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);
  const dateDiv = document.createElement("div");
  const date = document.createElement("p");
  date.classList.add("flairText");
  date.innerHTML = "Desired date: ";
  const dateInput = document.createElement("INPUT");
  dateInput.setAttribute("type", "datetime-local");
  dateDiv.appendChild(date);
  dateDiv.appendChild(dateInput);
  const submit = document.createElement("BUTTON");
  submit.innerHTML = "Submit";
  submit.setAttribute("type", "submit");
  reserveForm.appendChild(nameDiv);
  reserveForm.appendChild(surnameDiv);
  reserveForm.appendChild(emailDiv);
  reserveForm.appendChild(dateDiv);
  reserveForm.appendChild(submit);

  onlineReserve.appendChild(online1);
  onlineReserve.appendChild(reserveForm);
  reserve.appendChild(onlineReserve);
}
