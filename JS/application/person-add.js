import {
  validateName,
  validateEmail,
  validateTel,
  validatePassword,
  validatePasswordMatch,
} from "../service/validator.js";
import { Person } from "../domain/Person.js";

submitForm();

const form = document.querySelector("form");
if (form) {
  validateName();
  validateEmail();
  validateTel();
  validatePassword();
  validatePasswordMatch();
}

function getFormPerson() {
  const person = new Person();
  person.name = document.querySelector("#nameInput");
  person.email = document.querySelector("#emailInput");
  person.phone = document.querySelector("#telInput");
  person.password = document.querySelector("#passwordInput");
  return person;
}

function submitForm() {
  const buttonSubmit = document.querySelector("#submitForm");
  buttonSubmit.addEventListener("click", () => {
    const person = getFormPerson();
    console.log(person);
  });
}
