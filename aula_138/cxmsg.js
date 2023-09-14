class Cxmsg {
    static color = "#888";
    static destiny = null
    static divmsg = null
    static tipo = null
    static comando_sn = null
    static textos = []

    static show = (config, title, text) => {
        this.color = config.color;
        this.tipo = config.tipo;
        this.textos = config.textos;
        this.comando_sn = () => {config.comando_sn()};
        this.destiny = document.body;
        this.title = title;
        this.text = text;
        // Criando div de fundo:
        this.divmsg = document.createElement("div");
        // Criando estilo:
        const estilo_divmsg = 
            "display: flex;" +
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"+
            "z-index: 1";
        // Setando as propriedades da div:
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo_divmsg);
        // Adicionando na pagina:
        this.destiny.prepend(this.divmsg);


        // Estilo da div:
        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
        // Criando a segunda div, que e a cx de msg que fica na area central, onde fica o titulo, corpo rodape:
        const areaCxmsg = document.createElement("div");
        // Setando os atributos da div:
        areaCxmsg.setAttribute("style", estilo_areaCxmsg);
        this.divmsg.appendChild(areaCxmsg);
        
        
        // Estilo tituloCxmsg:
        const estilo_tituloCxmsg =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: " + this.color + ";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        // Criando o titulo:
        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.title;
        areaCxmsg.appendChild(tituloCxmsg);

        // Estilo do corpo da Cxmsg:
        const estilo_corpoCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        // Criando o corpo da caixa de msg:
        const corpoCxmsg = document.createElement("div");
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg);
        corpoCxmsg.innerHTML = this.text;
        areaCxmsg.appendChild(corpoCxmsg);

        // Estilo do footer:
        const estilo_footerCxmsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        // Criando o footer:
        const footer_Cxmsg = document.createElement("div");
        footer_Cxmsg.setAttribute("style", estilo_footerCxmsg);
        areaCxmsg.appendChild(footer_Cxmsg);


        // Estilo do button:
        const estilo_btnCxmsg =
            "background-color: " + this.color + ";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        if(this.tipo == "ok") {
            // Criando o botao do footer:
            const btn_Cxmsg = document.createElement("button");
            btn_Cxmsg.setAttribute("style", estilo_btnCxmsg);
            btn_Cxmsg.innerHTML = "OK";
            btn_Cxmsg.addEventListener('click', (evt) => {
                this.comando_sn();
                this.hide();
            })
            footer_Cxmsg.appendChild(btn_Cxmsg);
        } else if(this.tipo == "sn") {
            const btn_sim = document.createElement("button");
            btn_sim.setAttribute("style", estilo_btnCxmsg);
            btn_sim.innerHTML = this.textos[0];
            btn_sim.addEventListener('click', (evt) => {
                this.comando_sn();
                this.hide();
            })
            footer_Cxmsg.appendChild(btn_sim);
            const btn_nao = document.createElement("button");
            btn_nao.setAttribute("style", estilo_btnCxmsg);
            btn_nao.innerHTML = this.textos[1];
            btn_nao.addEventListener('click', (evt) => {
                this.hide();
            })
            footer_Cxmsg.appendChild(btn_nao);
        }

    }
    static hide = () => {
        this.divmsg.remove();
    }
}

export {Cxmsg};