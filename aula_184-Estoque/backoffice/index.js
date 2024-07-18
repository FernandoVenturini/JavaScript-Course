const btn_menuPrincipal = document.querySelector("#btn_menuPrincipal");
const menuPrincipal = document.querySelector("#menuPrincipal");
const todosmenusprincipais = document.querySelector(".btn_meenuItem");

btn_menuPrincipal.addEventListener("click", (evt) => {
    evt.preventDefault();
    menuPrincipal.classList.toggle("ocultar");
});