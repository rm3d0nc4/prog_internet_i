document.addEventListener('DOMContentLoaded', () => {
    // seu código aqui
    const botao: HTMLElement | null = document.getElementById('botao')
    
    botao!.addEventListener('click', () => {
        const paragrafo = document.getElementById('paragrafo')
        paragrafo!.textContent = 'O texto deste parágrafo foi alterado!'
    })

    const clear: HTMLElement | null = document.getElementById('clear');

    clear!.addEventListener('click', () => {
        const paragrafo: HTMLElement | null = document.getElementById('paragrafo')
        paragrafo!.textContent = ''
    })
});