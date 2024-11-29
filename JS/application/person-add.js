import {
  validateName,
  validateEmail,
  validateTel,
  validatePassword,
  validatePasswordMatch,
} from "../service/validator.js";
import { Person } from "../domain/Person.js";
import { personService } from "../service/person.service.js";

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
  person.name = document.querySelector("#nameInput").value;
  person.email = document.querySelector("#emailInput").value;
  person.phone = document.querySelector("#telInput").value;
  person.password = document.querySelector("#passwordInput").value;
  return person;
}

function submitForm() {
  const buttonSubmit = document.querySelector("#submitForm");
  buttonSubmit.addEventListener("click", () => {
    const person = getFormPerson();
    console.log(person);
    personService.add(person);
  });
}
