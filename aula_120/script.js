const f_name = document.querySelector('#f_name');
const f_note = document.querySelector('#f_note');
const f_msg = document.querySelector('#f_msg');

document.querySelector('#btn_validar').addEventListener('click', (event) => {
    
    // Criando o estado da validacao:
    let estadoValidacao = f_note.validity;

    if(estadoValidacao.valueMissing) {
        f_note.setCustomValidity('Por favor, preencha o campo acima!!!');
    } else if(estadoValidacao.rangeOverflow) {
        f_note.setCustomValidity('Nossa, que nota alta vc digitou!');
    } else if(estadoValidacao.rangeUnderflow) {
        f_note.setCustomValidity('Credo!!! que nota baixa vc digitou!');
    }

    //f_msg.innerHTML = msg;
    //f_note.reportValidity();
    f_msg.innerHTML = f_note.validationMessage;
    event.preventDefault();
})
