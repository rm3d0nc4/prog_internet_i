function loadImage() {
    const url = document.getElementById("input").value

    const resultElement = document.getElementById("result")
    const currentImage = document.getElementById("image")
    console.log("Printando!!")

    if(currentImage) {
        currentImage.src = url
    } else {
        const image = document.createElement("img")
        image.id = 'image';
        image.style.margin = '20px'
        image.src = url;
        image.style.height = '30%'
        image.style.width = '30%'
        resultElement.appendChild(image)
        console.log("Printando!!")

    }
}

const button = document.getElementById('button')

button.addEventListener ('click', loadImage)