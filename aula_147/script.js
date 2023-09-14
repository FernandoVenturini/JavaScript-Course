//import { Login } from "./login_cfbcursos.js";
import { Cxmsg } from "../aula_138/cxmsg.js";

const callback_ok = () => {
    
}

const callback_naook = () => {
    const config = {
        color: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: null, 
    }
    Cxmsg.show(config, "Error", "Login nao efetuado! Usuario ou senha incorretos.");
}

Login.login(callback_ok, callback_naook);