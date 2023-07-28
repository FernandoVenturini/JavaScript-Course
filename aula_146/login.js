class Login {
static logado = false;
static matlogado = null;
static nomelogado = null;
static acessologado = null;
static estilocss = null;
static config = {
    cor: "#048",
    img: "./logo-removebg-preview (1).png"
};
static endpoint = "https://loginv1.cfbcursos.repl.co/";

    static login = (mat, pas, config = null) => {
        if(config != null){
            this.config = config;
        }
        this.config = config;
        this.endpoint += `?matricula = ${mat} & senha = ${pas}`;
        this.estilocss = 
        ".fundoLogin {display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        ".baseLogin {display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}"+
        ".elementosLogin {display: flex;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;flex-direction: column;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+        
        ".logoLogin {display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logoLogin img {width: 90%;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        ".campoLogin label{font-size: 18px;color: grey;}"+
        ".campoLogin input{font-size: 14px;padding: 5px;background-color: #fff;border-radius: 5px;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;gap: 1rem;}"+        
        `.botoesLogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100%;box-sizing: inherit;}`
        
        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id", "id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute('id', 'fundoLogin');
        fundoLogin.setAttribute('class', 'fundoLogin');
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute('id', 'baseLogin');
        baseLogin.setAttribute('class', 'baseLogin');
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement('div');
        elementosLogin.setAttribute('id', 'elementosLogin');
        elementosLogin.setAttribute('class', 'elementosLogin');
        baseLogin.appendChild(elementosLogin);

        const camposLoginUsername = document.createElement('div');
        camposLoginUsername.setAttribute('id', 'camposLoginUsername');
        camposLoginUsername.setAttribute('class', 'camposLoginUsername');
        elementosLogin.appendChild(camposLoginUsername);

        const labelUsername = document.createElement('label');
        labelUsername.innerHTML = "Username";
        camposLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement('input');
        inputUsername.setAttribute('id', 'f_username');
        inputUsername.setAttribute('type', 'text');
        inputUsername.setAttribute('name', 'f_username');
        camposLoginUsername.appendChild(inputUsername);

        const camposLoginSenha = document.createElement('div');
        camposLoginSenha.setAttribute('id', 'camposLoginSenha');
        camposLoginSenha.setAttribute('class', 'camposLoginSenha');
        elementosLogin.appendChild(camposLoginSenha);

        const labelSenha = document.createElement('label');
        labelSenha.innerHTML = "Senha";
        camposLoginSenha.appendChild(labelSenha);

        const inputSenha = document.createElement('input');
        inputSenha.setAttribute('id', 'f_senha');
        inputSenha.setAttribute('type', 'password');
        inputSenha.setAttribute('name', 'f_senha');
        camposLoginSenha.appendChild(inputSenha);

        const botoesLogin = document.createElement('div');
        botoesLogin.setAttribute('class', 'botoesLogin');
        elementosLogin.appendChild(botoesLogin);

        const btn_login = document.createElement('button');
        btn_login.setAttribute('id', 'btn_login');
        btn_login.innerHTML = "Login";
        elementosLogin.appendChild(btn_login);

        const btn_cancelar = document.createElement('button');
        btn_cancelar.setAttribute('id', 'btn_cancelar');
        btn_cancelar.innerHTML = "Cancelar";
        elementosLogin.appendChild(btn_cancelar);

        const logoLogin = document.createElement('div');
        logoLogin.setAttribute('id', 'logoLogin');
        logoLogin.setAttribute('class', 'logoLogin');
        baseLogin.appendChild(logoLogin);

        const imgLogoLogin = document.createElement('div');
        imgLogoLogin.setAttribute('src', this.config.img);
        imgLogoLogin.setAttribute('title', 'CFBCursos');
        logoLogin.appendChild(imgLogoLogin);

        /*
        fetch(this.endpoint)
        .then(response => response.json())
        .then(response => {
            if(response) {
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = response.nome;
                this.acessologado = response.acesso;
                console.log(response);
            }else{
                console.log("Usuario nao encontrado!");
            }
        })
        */
    }
}

export {Login};