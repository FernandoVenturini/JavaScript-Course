class Login {
static logado = false;
static matlogado = null;
static nomelogado = null;
static acessologado = null;
static endpoint = "https://loginv1.cfbcursos.repl.co/";

    static login = (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`
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
        
    }
}

export {Login};