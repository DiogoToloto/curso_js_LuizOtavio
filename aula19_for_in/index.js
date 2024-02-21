const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Toloto',
    idade: 20,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

//for (let indice in frutas) {
//    console.log(frutas[indice])}