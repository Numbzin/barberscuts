function importarCSSCard() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "./components/card-component/card-component.css";
  document.head.appendChild(link);
}

async function fetchDadosCards() {
  try {
    const response = await fetch("./mocks/card.json");
    const dadosCards = await response.json();
    return dadosCards;
  } catch (error) {
    console.error("Erro ao carregar dados dos cards:", error);
  }
}

async function fetchCardTemplate() {
  try {
    const response = await fetch(
      "../components/card-component/card-component.html"
    );
    const templateText = await response.text();
    const template = document.createElement("template");
    template.innerHTML = templateText.trim();

    const card = template.content.querySelector(".card");
    if (!card) {
      throw new Error("Card template não encontrado no HTML.");
    }

    return card;
  } catch (error) {
    console.error("Erro ao carregar template de card:", error);
  }
}

async function carregarCards() {
  const container = document.getElementById("container-cards");
  const dadosCards = await fetchDadosCards();
  const cardTemplate = await fetchCardTemplate();

  dadosCards.forEach((dados) => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector(".card-image").src = dados.imgSrc;
    card.querySelector(".card-image").alt = dados.titulo;
    card.querySelector(".card-title").textContent = dados.titulo;
    card.querySelector(".card-description").textContent = dados.descricao;

    container.appendChild(card);
  });
}

export default function CardComponent() {
  importarCSSCard();
  document.addEventListener("DOMContentLoaded", carregarCards);
}
