const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Toloto',
    idade: 20,
    endereco: {
        rua: 'Madureira Calheiros',
        numero: 432,   
    }
}
// Atribuição via desestruturação
const  { 
    nome: teste, sobrenome, idade, 
    endereco: {
    rua: r, numero
}
} = pessoa;
console.log(pessoa.endereco);