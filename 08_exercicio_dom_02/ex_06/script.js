function changeOption() {
    const option = document.getElementById("select").value
    const word = document.getElementById('input').value

    let outputWord

    switch (option) {
        case 'M':
            outputWord = word.toUpperCase()
            break;
        case 'm':
            outputWord = word.toLowerCase()
            break;
        default:
            outputWord = word
            break;
    }

    const output = document.getElementById('output')
    output.innerHTML = outputWord
}

const button = document.getElementById('button')

button.addEventListener ('click', changeOption)