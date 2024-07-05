const btn_pesq = document.querySelector("#btn_pesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener("click", (evt) => {
    evt.preventDefault();
    if(f_txtpesq.value == "") {
        alert("Digite o nome do produto que deseja pesquisar");
        f_txtpesq.focus();
        return;
    }
    console.log(document.getElementsByName("f_pesq").value);
})