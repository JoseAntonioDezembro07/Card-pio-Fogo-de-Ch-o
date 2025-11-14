
function selecionarOpcao(tamanho, preco, elementoClicado) {
    
    
    let todosQuadrados = document.querySelectorAll('.quadrado-preco');
    todosQuadrados.forEach(function(quadrado) {
        quadrado.classList.remove('selecionado');
    });

    
    elementoClicado.classList.add('selecionado');

 
    let telefone = "5545999118050";
    let mensagem = `Olá! Gostaria de pedir uma Marmita ${tamanho} de R$ ${preco}.`;
    let linkZap = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    
    let botao = document.getElementById('link-whatsapp');
    let textoBotao = document.getElementById('texto-link-whatsapp');
    
    botao.href = linkZap; 
    textoBotao.innerText = "Pedir Marmita " + tamanho; 
}


document.addEventListener('DOMContentLoaded', function() {
    
    const iconeMenu = document.querySelector('.botao-menu-celular');
    const listaLinks = document.querySelector('.links-menu');

    iconeMenu.addEventListener('click', function() {
       
        listaLinks.classList.toggle('menu-aberto');
    });
});