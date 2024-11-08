export function CardComponent() {
  const localTemplate = "components/card-component/card-component.html"
  const localStyle = "components/card-component/card-component.css"
  const element = document.querySelector(".card-component")
  if (!element) return
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
      console.error("Erro ao montar o componente: ", error)
    })
  }
  