const btn_pesq = document.querySelector("#f_txtpesq");
const f_txtpesq = document.querySelector("#f_txtpesq");

btn_pesq.addEventListener('click', (evt) => {
   if(f_txtpesq.value == "" ){
      alert("Digite a pesquisa!");
      f_txtpesq.focus();
      return;
   }
   console.log(document.getElementsByName("f_txtpesq").value);
})