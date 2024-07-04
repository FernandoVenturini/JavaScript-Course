const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

// Adicionando evento de click nos botoes:
btn_home.addEventListener('click', (evt) => {
    abrirPagina(evt.target, "./home.html", "if_principal");
});
btn_novo.addEventListener('click', (evt) => {
    abrirPagina(evt.target, "./novo.html", "if_principal");
});
btn_pesquisar.addEventListener('click', (evt) => {
    abrirPagina(evt.target, "./pesquisar.html", "if_principal");
});
btn_gestao.addEventListener('click', (evt) => {
    abrirPagina(evt.target, "./gestao.html", "if_principal");
});
btn_sobre.addEventListener('click', (evt) => {
    abrirPagina(evt.target, "./sobre.html", "if_principal");
});

// Criando funcao que vai deixar o aba selecionada:
const abrirPagina = (el, url) => {
    const abas = [...document.querySelectorAll(".aba")];
    abas.forEach(e => {
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
    window.open(url, "if_principal");
}