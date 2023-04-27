function changeOption() {
    const option = document.getElementById("select").value

    const resultElement = document.getElementById("result")
    const currentImage = document.getElementById("image")
    console.log("Printando!!")

    if(currentImage) {
        currentImage.src = option
    } else {
        const image = document.createElement("img")
        image.id = 'image';
        image.style.margin = '20px'
        image.src = option;
        image.style.height = '30%'
        image.style.width = '30%'
        resultElement.appendChild(image)
    }
}

const select = document.getElementById('select')

select.addEventListener ('change', changeOption)