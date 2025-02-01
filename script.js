function mostrarPagina(pagina) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(secao => secao.style.display = 'none');

    // Mostra a seção correspondente ao botão clicado
    document.getElementById(`conteudo_${pagina}`).style.display = 'block';
}