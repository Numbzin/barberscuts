 export function validateRequired(inputId, messageId, messageText) {
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

export function validateName() {
  validateRequired("nameInput", "nameHelp", "Nome é obrigatório");
}

export function validateEmail() {
  const emailInput = document.querySelector("#emailInput");
  const emailMessage = document.querySelector("#emailHelp");
  if (!emailInput) return
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

export function validateTel() {
  const telInput = document.querySelector("#telInput");
  const telMessage = document.querySelector("#telHelp");
  if (!telInput) return
  telInput.addEventListener("keyup", () => {
    const telValue = telInput.value;
    const telPattern = /^[0-9+-]+$/;

    if (telValue.trim() === "") {
      telMessage.innerHTML = "Telefone é obrigatório";
    } else if (!telPattern.test(telValue)) {
      telMessage.innerHTML = "Formato de telefone inválido";
    } else {
      telMessage.innerHTML = "";
    }
  });
}

export function validatePassword() {
  const passwordInput = document.querySelector("#passwordInput");
  const passwordMessage = document.querySelector("#passwordHelp");

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const updatePasswordMessage = (message) => {
    passwordMessage.innerHTML = message;
  };

  passwordInput.addEventListener("keyup", () => {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue === "") {
      updatePasswordMessage("Senha é obrigatória");
    } else if (!passwordPattern.test(passwordValue)) {
      updatePasswordMessage("Senha deve conter letras maiúsculas, minúsculas e números, com no mínimo 8 caracteres.");
    } else {
      updatePasswordMessage("");
    }
  });
}

