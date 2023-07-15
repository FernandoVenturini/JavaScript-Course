class Cxmsg {
    title = null
    text = null
    color = null
    destiny = null
    divmsg = null

    constructor(config) {
        this.title = config.title;
        this.text = config.text;
        this.color = config.color;
        this.destiny = document.body;
    }

    show = () => {
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
            "background-color: rgba(0,0,0,0.7);"
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
    }
    hide = () => {

    }
}