"use strict";
const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard");
const positionCard = document.querySelector(".js-positionCard");
// FullName
inputList[0].addEventListener("keydown", saveField);
function saveField(event) {
  const nameField = event.currentTarget.value;
  nameCard.innerHTML = nameField;
}
// Position
inputList[1].addEventListener("keydown", saveField2);
function saveField2(event) {
  const positionField = event.currentTarget.value;
  positionCard.innerHTML = positionField;
}
// E-mail
// Teléfono
// Linkedin
// Github
