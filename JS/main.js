// navBarComponent();

navBarComponentTemplate();

/* function navBarComponent() {
  const element = document.getElementById("navbar-component");
  const navbar = `<nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
         <img class="navbar-toggler" src="./images/nmb.jpeg" height="45" alt="">
        <button class="navbar-toggler bg-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#cortes">Cortes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#agendamento">Agendamento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#contato">Contato</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#about">Sobre Nós</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="login.html">Entrar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
} */

function navBarComponentTemplate() {
  const element = document.getElementById("navbar-component");
  fetch("../components/nav-component.html")
    .then((res) => res.text())
    .then((nav) => {
      element.innerHTML = nav;
    })
    .catch((error) => {
      console.error("Erro ao montar a navbar", error);
    });
}

window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  header.classList.toggle("opacity", window.scrollY > 0);
});