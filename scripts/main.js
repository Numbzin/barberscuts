navBarComponent();

function navBarComponent() {
  const element = document.getElementById("navbar-component");
  const navbar = `<nav class="navbar">
        <ul class="nav-links">
          <li><a href="index.html#cortes">Cortes</a></li>
          <li><a href="index.html#agendamento">Agendamento</a></li>
          <li><a href="index.html#contato">Contato</a></li>
          <li><a href="index.html#sobre">Sobre Nós</a></li>
          <li><a href="login.html">Login</a></li>
        </ul>
      </nav>`;

  element.innerHTML = navbar;
}

window.addEventListener("scroll", function () {
  let header = document.querySelector(".navbar");
  header.classList.toggle("opacity", window.scrollY > 0);
});
