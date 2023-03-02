const caixa = document.querySelector('#caixa');

let musicas = new Set(['musica 1', 'musica 2', 'musica 3']);

musicas.add('musica 01');
musicas.add('musica 02');
musicas.add('musica 03');
musicas.add('musica 04');
musicas.add('musica 05');

musicas.delete('musica 01');
//musicas.clear();

console.log(musicas);

musicas.forEach((e) => {
    //caixa.innerHTML += e + '<br>';
    //caixa.innerHTML = caixa.innerHTML + e + '<br>';
})

for (const m of musicas) {
    caixa.innerHTML += m + '<br>';
}
