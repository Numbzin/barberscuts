import {
  validateEmail,
  validateName,
  validatePassword,
  validateRequired,
  validateTel
} from "./service/validator.js"

import {navBarComponentTemplate} from "./../components/nav-component/nav-component.js"

navBarComponentTemplate();
validateRequired();
validateName();
validateEmail();
validateTel();
validatePassword();

window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  header.classList.toggle("opacity", window.scrollY > 0);
});

