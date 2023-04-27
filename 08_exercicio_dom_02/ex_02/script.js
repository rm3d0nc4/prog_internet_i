

function validate(...numbers) {
  for (let number of numbers) {
    if (isNaN(number)) {return false}
  }
  return true
}
  
function calcular(num1, num2, operador) {
  let resultado;
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      if(num2 === 0) {
        resultado = undefined
        alert('Divisor não pode ser 0') 
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = undefined;
  }
  return resultado;
}

function getResult() {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const operation = document.getElementById('op').value
  if(validate(num1, num2)) {
    const result = calcular(Number(num1), Number(num2), operation)
    console.log(result)
    const element = document.getElementById('result')
    element.innerHTML = result != undefined ? result : 'erro'
  } else {
    alert("Invalid Numbers!")
  }
}

const button = document.getElementById('button')

button.addEventListener('click', getResult)