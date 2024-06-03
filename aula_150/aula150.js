//import { Login } from "./login_cfbcursos.js";
import { Cxmsg } from "../aula_138/cxmsg.js";

const callback_ok = () => {
    //alert("Ok!");
    const config = {
        color: "#009f00",
        tipo: "ok",
        textos: null,
        comando_sn: null,
    }
    Cxmsg.show(config, "OK!","Login efetuado com sucesso!");
}

function callback_naook(){
    //alert("Nao ok!");
    const config = {
        color: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: null,
    }
    Cxmsg.show(config, "ERROR!", "Login nao efetuado! Usuario ou senha nao encontrado!");
}

Login.login(callback_ok, callback_naook);