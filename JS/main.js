import {
  validateName,
  validateEmail,
  validateTel,
  validatePassword,
  validatePasswordMatch,
} from "./service/validator.js";
import { navBarComponentTemplate } from "../components/nav-component/nav-component.js";
import CardComponent from "../components/card-component/card-component.js";
import Modal from "./modal.js";

navBarComponentTemplate();
CardComponent();
Modal();

const form = document.querySelector("form");
if (form) {
  validateName();
  validateEmail();
  validateTel();
  validatePassword();
  validatePasswordMatch();
}