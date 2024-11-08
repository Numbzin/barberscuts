validateName();
validateEmail();
validateTel();
validatePassword();
validatePasswordMatch();

function validateName() {
  const nameInput = document.querySelector("#nameInput");
  const nameMessage = document.querySelector("#nameHelp");

  nameInput.addEventListener("blur", () => {
    const nameValue = nameInput.value.trim();
    const numberCount = (nameValue.match(/\d/g) || []).length;
    const onlyNumbers = /^\d+$/.test(nameValue);

    if (nameValue === "") {
      nameMessage.innerHTML = "Nome é obrigatório";
    } else if (nameValue.length < 3) {
      nameMessage.innerHTML = "O nome deve ter pelo menos 3 caracteres";
    } else if (onlyNumbers) {
      nameMessage.innerHTML = "O nome não pode conter apenas números";
    } else if (numberCount > 4) {
      nameMessage.innerHTML = "O nome não pode ter mais de 4 números";
    } else {
      nameMessage.innerHTML = "";
    }
  });
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

function validateTel() {
  const telInput = document.querySelector("#telInput");
  const telMessage = document.querySelector("#telHelp");

  telInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length <= 11) {
      if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      }
      if (value.length > 9) {
        value = value.slice(0, 10) + "-" + value.slice(10);
      }

      telInput.value = value;
    }

    const telPattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    if (value.replace(/\D/g, "").length === 0) {
      telMessage.innerHTML = "Telefone é obrigatório";
    } else if (!telPattern.test(telInput.value)) {
      telMessage.innerHTML = "Formato de telefone inválido";
    } else {
      telMessage.innerHTML = "";
    }
  });
}

function validatePassword() {
  const passwordInput = document.querySelector("#passwordInput");
  const passwordMessage = document.createElement("div");
  passwordMessage.className = "form-text text-danger";
  passwordInput.parentNode.parentNode.appendChild(passwordMessage);

  passwordInput.addEventListener("keyup", () => {
    const passwordValue = passwordInput.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordValue === "") {
      passwordMessage.innerHTML = "Senha é obrigatória";
    } else if (!passwordPattern.test(passwordValue)) {
      passwordMessage.innerHTML =
        "A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais";
    } else {
      passwordMessage.innerHTML = "";
    }
  });
}

function validatePasswordMatch() {
  const passwordInput = document.querySelector("#passwordInput");
  const confPasswordInput = document.querySelector("#confPasswordInput");
  const confPasswordMessage = document.createElement("div");
  confPasswordMessage.className = "form-text text-danger";
  confPasswordInput.parentNode.parentNode.appendChild(confPasswordMessage);

  confPasswordInput.addEventListener("keyup", () => {
    if (confPasswordInput.value === "") {
      confPasswordMessage.innerHTML = "Confirmação de senha é obrigatória";
    } else if (confPasswordInput.value !== passwordInput.value) {
      confPasswordMessage.innerHTML = "As senhas não coincidem";
    } else {
      confPasswordMessage.innerHTML = "";
    }
  });
}
