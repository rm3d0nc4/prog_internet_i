document.addEventListener('DOMContentLoaded', function () {
    let botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    let conteudo = document.getElementById('caixaDeTexto').value;
    if(conteudo === '') {
        alert("Campo Vazio!")
    }
    
    document.getElementById('conteudo').innerHTML = conteudo;
    
}
