const LOCAL_TEMPLATE = "../components/nav-component/nav-component.html";
const LOCAL_STYLE = "../components/nav-component/nav-component.css";

export function navBarComponentTemplate() {
    const element = document.querySelector(".navbar-component");
    
    if (!element) {
        console.error("Elemento .navbar-component não encontrado");
        return;
    }

    element.innerHTML = '';
    element.innerHTML += `<link rel="stylesheet" href="${LOCAL_STYLE}">`;

    fetch(LOCAL_TEMPLATE)
        .then((res) => res.text())
        .then((nav) => {
            element.innerHTML += nav;
            
            const navbar = document.querySelector(".navbar");
            if (navbar) {
                window.addEventListener("scroll", function () {
                    navbar.classList.toggle("opacity", window.scrollY > 0);
                });
            }
        })
        .catch((error) => {
            console.error("Erro ao montar a navbar: ", error);
        });
}


export { LOCAL_TEMPLATE, LOCAL_STYLE };