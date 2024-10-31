function validateRequired(inputId, messageId, messageText) {
  const element = document.querySelector(`#${inputId}`);
  const message = document.querySelector(`#${messageId}`);

  element.addEventListener("blur", () => {
    if (element.value.trim() === "") {
      message.innerHTML = messageText;
    } else {
      message.innerHTML = "";
    }
  });
}

function validateName() {
  validateRequired("nameInput", "nameHelp", "Nome é obrigatório");
}

function validateEmail() {
  const emailInput = document.querySelector("#emailInput");
  const emailMessage = document.querySelector("#emailHelp");

  emailInput.addEventListener("keyup", () => {
    const emailValue = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue.trim() === "") {
      emailMessage.innerHTML = "Email é obrigatório";
    } else if (!emailPattern.test(emailValue)) {
      emailMessage.innerHTML = "Formato de email inválido";
    } else {
      emailMessage.innerHTML = "";
    }
  });
}

validateName();
validateEmail();
