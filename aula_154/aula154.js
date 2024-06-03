const configdgv = {
    endpoint: "produtos.json",
    idDestino: "dgvDados",
}
const dgv = (configdgv) => {
    const dgvDados = document.getElementById(configdgv.idDestino);
    fetch(configdgv.endpoint)
    .then(res => res.json())
    .then(res => {
        res.forEach(element => {
            const dgvLinha = document.createElement("div");
            dgvLinha.setAttribute("class", "dgvLinha");

            const c1 = document.createElement("div");
            c1.setAttribute("class", "c1");
            c1.innerHTML = element.id;
            dgvLinha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class", "c2");
            c2.innerHTML = element.produto;
            dgvLinha.appendChild(c2);

            const c3 = document.createElement("div");
            c3.setAttribute("class", "c3");
            c3.innerHTML = element.marca;
            dgvLinha.appendChild(c3);

            const c4 = document.createElement("div");
            c4.setAttribute("class", "c4");
            c4.innerHTML = element.modelo;
            dgvLinha.appendChild(c4);

            const c5 = document.createElement("div");
            c5.setAttribute("class", "c5");
            c5.innerHTML = "D E V";
            dgvLinha.appendChild(c5);
            
            dgvDados.appendChild(dgvLinha);
        });
        console.log(res);
    });
}

dgv(configdgv);