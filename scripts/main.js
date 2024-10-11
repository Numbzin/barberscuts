
navBarComponent()

function navBarComponent() {
  const element = document.getElementById("navbar-component");
  const navbar = `<nav class="navbar">
        <ul class="nav-links">
          <li><a href="#cortes">Cortes</a></li>
          <li><a href="#agendamento">Agendamento</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#sobre">Sobre Nós</a></li>
        </ul>
      </nav>`;

    element.innerHTML = navbar

}



