// Função para selecionar a marmita (clicar no quadrado)
function selecionarOpcao(tamanho, preco, elementoClicado) {
    
    // 1. Encontra todos os quadrados e remove a cor vermelha
    let todosQuadrados = document.querySelectorAll('.quadrado-preco');
    todosQuadrados.forEach(function(quadrado) {
        quadrado.classList.remove('selecionado');
    });

    // 2. Adiciona a cor vermelha SÓ no que foi clicado
    elementoClicado.classList.add('selecionado');

    // 3. Prepara o link do WhatsApp
    let telefone = "5545999118050";
    let mensagem = `Olá! Gostaria de pedir uma Marmita ${tamanho} de R$ ${preco}.`;
    let linkZap = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    // 4. Atualiza o botão do WhatsApp
    let botao = document.getElementById('link-whatsapp');
    let textoBotao = document.getElementById('texto-link-whatsapp');
    
    botao.href = linkZap; 
    textoBotao.innerText = "Pedir Marmita " + tamanho; 
}

// Função para abrir o menu no celular
document.addEventListener('DOMContentLoaded', function() {
    
    const iconeMenu = document.querySelector('.botao-menu-celular');
    const listaLinks = document.querySelector('.links-menu');

    iconeMenu.addEventListener('click', function() {
        // Faz a lista de links aparecer ou sumir
        listaLinks.classList.toggle('menu-aberto');
    });
});