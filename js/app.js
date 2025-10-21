'use strict';

// Caminho da SPA
const rotas = {
    '/': `
        <h1>🏠</h1>
        <p>Bem-vindo à Caramelos e Bichanos!</p>
    `,
    '/sobre': `
        <h1>ℹ️ Sobre</h1>
        <p>Somos uma ONG sem fins lucrativos e lutamos pelo bem estar dos animais.</p>
    `,
    '/contato': `
        <h1>📞 Contato</h1>
        <p>Envie uma mensagem para <strong>caramelosebichanos@cb.org.br</strong>.</p>
    `
};

// Função para "navegar" entre as rotas
function navegar() {
    const hash = window.location.hash.replace('#', '') || '/';
    const conteudo = rotas[hash] || `<h1>404</h1><p>Página não encontrada.</p>`;
    document.getElementById('conteudo').innerHTML = conteudo;
}

// Evento que monitora mudança na hash da URL
window.addEventListener('hashchange', navegar);

// Carrega a rota inicial
window.addEventListener('load', navegar);