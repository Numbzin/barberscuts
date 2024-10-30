validateName();
validadeRequired();
validateEmail();

function validateName() {
  const element = document.querySelector("#nameInput");
  const message = document.querySelector("#nameHelp");
  element.addEventListener("blur", (e) => {
    const value = e.target.value;
    if (value == "") {
      message.innerHTML = "Valor invalido";
    } else {
      message.innerHTML = "";
    }
  });
}

// function validateRequired() {
//     const elements = document.querySelectorAll("[required]")
// }

function validateEmail() {
  const element = document.querySelector("#emailInput");
  const message = document.querySelector("#email");
  element.addEventListener("keyup", (e) => {
    const value = e.target.value;
    if (value == "") {
      message.innerHTML = "Email invalido";
    } else {
      message.innerHTML = "";
    }
  });
}
