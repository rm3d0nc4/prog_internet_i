

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao')
    
    botao.addEventListener('click', () => {
        const paragrafo = document.getElementById('paragrafo')
        paragrafo.textContent = 'O texto deste parágrafo foi alterado!'
    })

    const limpar = document.getElementById('clear');

    limpar.addEventListener('click', () => {
        const paragrafo = document.getElementById('paragrafo')
        paragrafo.textContent = ''
    })
});