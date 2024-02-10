const numero = Number(prompt('Digite um numero: '))
let resposta = document.getElementById('res')
let texto = document.getElementById('texto')

resposta.innerHTML = numero
texto.innerHTML += `Raiz quadrada: ${numero ** 0.5} <br>`
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} <br>`
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br>`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br>`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br>`
texto.innerHTML += `Com duas casas decimais: ${Number(numero).toFixed(2)} <br>`