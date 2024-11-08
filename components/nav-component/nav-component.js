export function navBarComponentTemplate() {
const localTemplate = "components/nav-component/nav-component.html"
const localStyle = "components/nav-component/nav-component.css"
const element = document.querySelector(".navbar-component")
// Info: style -> CSS
element.innerHTML = ''
element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`

//Info: template -> HTML
fetch(localTemplate)
  .then((res) => res.text())
  .then((nav) => {
    element.innerHTML += nav
  })
  .catch((error) => {
    console.error("Erro ao montar a navbar: ", error)
  })
}

