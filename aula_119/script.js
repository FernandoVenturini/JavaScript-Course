const f_name = document.querySelector('#f_name');
const f_note = document.querySelector('#f_note');
const f_msg = document.querySelector('#f_msg');


document.querySelector('#btn_validar').addEventListener('click', (event) => {
    let msg = null;

    if(!f_note.checkValidity()) {
        msg = f_note.validationMessage;
    }
    
    f_msg.innerHTML = msg;
    event.preventDefault();
})