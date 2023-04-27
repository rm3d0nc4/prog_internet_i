function selectOption() {
    const newOption = document.getElementById('input').value
    const select = document.getElementById('select')
    const array = Array.from(select.children)
    const values = array.map((element) => element.value)
    console.log(values)
    console.log(newOption)
    if (!values.includes(newOption.toLowerCase()) && values.length < 6 && newOption != '') {
        const newElement = document.createElement('option')
        newElement.value = newOption.toLowerCase()
        // newElement.id = newElement.value
        newElement.innerHTML = newOption
        select.appendChild(newElement)
        document.getElementById('input').value = ''
    } else {
        alert('Não autorizado!')
    }
}

function removeOption() {
    const select = document.getElementById('select')
    if(select.selectedOptions.length === 0 || select.selectedOptions[0].id === 'first')  {
        alert("Não há opções")
    } else {
        optionToRemove = select.selectedOptions[0]
        select.removeChild(optionToRemove)
    }
}


const buttonAdd = document.getElementById('button-add')
buttonAdd.addEventListener ('click', selectOption)

const buttonRemove = document.getElementById('button-remove')
buttonRemove.addEventListener ('click', removeOption)