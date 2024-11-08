const dadosCards = [
  {
    imgSrc: "./images/nmb.jpeg",
    titulo: "Corte Moderno",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "./images/nmb.jpeg",
    titulo: "Barba Estilizada",
    descricao:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    imgSrc: "./images/nmb.jpeg",
    titulo: "Fade Clássico",
    descricao:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    imgSrc: "./images/nmb.jpeg",
    titulo: "Corte Basico",
    descricao: "lorem ipsum dolor sit amet",
  },
];

function criarCard(imgSrc, titulo, descricao) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <img src="${imgSrc}" alt="${titulo}">
        <div class="card-content">
            <h3 class="card-title">${titulo}</h3>
            <p class="card-description">${descricao}</p>
        </div>
    `;
  return card;
}

function CarregarCards() {
  const container = document.getElementById("containerCards");
  dadosCards.forEach((dados) => {
    const card = criarCard(dados.imgSrc, dados.titulo, dados.descricao);
    container.appendChild(card);
  });
}

window.onload = CarregarCards;

// Abrir e fechar o formulário flutuante
document.getElementById("openFormBtn").addEventListener("click", function () {
  document.getElementById("formModal").style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("formModal").style.display = "none";
});

// Fechar o modal se o usuário clicar fora dele
window.onclick = function (event) {
  const modal = document.getElementById("formModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
