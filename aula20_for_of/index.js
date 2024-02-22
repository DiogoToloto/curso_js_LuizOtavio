const nome = ['Diogo','Luiz','Miguel'];

for ( let valor of nome) {
    console.log(valor)
}

console.log('############')

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})