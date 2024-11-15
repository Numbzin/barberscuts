import { validateName, validateEmail, validateTel, validatePassword, validatePasswordMatch } from "./service/validator.js";
import { navBarComponentTemplate } from "../components/nav-component/nav-component.js";

navBarComponentTemplate();

const form = document.querySelector('form'); 
if (form) {
    validateName();
    validateEmail();
    validateTel();
    validatePassword();
    validatePasswordMatch();
}





