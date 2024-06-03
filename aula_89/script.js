const btn_imp = document.querySelector('#btn_imp');
btn_imp.addEventListener('click', (evt) => {
    // Declarando variavel para selecionar toda a tabela:
    const conteudo_tabela = document.querySelector('#tabela').innerHTML;

    // Formatando o CSS:
    let estilo = '<style>';
    estilo += 'table {width: 100%; font: 25px Courier;}';
    estilo += 'table, th, td {border: 2px solid #888; border-collapse: collapse;}';
    estilo += 'padding: 4px 8px; text-align: center;';
    estilo += '</style>';

    // Nova janela:
    const win = window.open('', '', 'height= 700, width= 700');

    win.document.write('<html><head>');
    win.document.write('<title>Cursos</title>');
    win.document.write(estilo);
    win.document.write('<head>');
    win.document.write('<body>');
    win.document.write(conteudo_tabela);
    win.document.write('<body></html>');

    win.print();

})