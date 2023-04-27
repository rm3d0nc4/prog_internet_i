
function validate() {
    const checkBoxes = document.getElementsByTagName('input')

    let hasOneSelect = false 
    for(let checkBox of checkBoxes) {
        if(checkBox.checked) {
            hasOneSelect = true
        }
    }

    alert(hasOneSelect ? 'Ok!' : 'Nenhuma opção foi selecionada!')
}

const button = document.getElementById('button')

button.addEventListener ('click', validate)