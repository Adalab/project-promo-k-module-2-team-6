"use strict";

console.log("Hola mundo 2");

const inputList = document.querySelectorAll(".js-field"); //formulario
const nameCard = document.querySelector(".js-nameCard"); // tarjeta
const positionCard = document.querySelector(".js-positionCard"); // tarjeta
const tlCard = document.querySelector(".js-tlCard"); //tarjeta
const emailCard = document.querySelector(".js-emailCard"); //tarjeta
const linkedinCard = document.querySelector(".js-linkedinCard"); //tarjeta
const gitHubCard = document.querySelector(".js-gitHubCard"); //tarjeta

function saveField(event) {
  let fieldValue = event.currentTarget.value;
  /* outputList.innerHtml = fieldValue; */
}

for (const eachItem of inputList) {
  eachItem.addEventListener("keyup", saveField);
}

function addName() {
  let nameCard3 = inputList.value;
  nameCard.innerHTML = nameCard3;
}
