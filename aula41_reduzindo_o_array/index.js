// Some todos os números (Reduce)
// Retorne um array com pares (Fiter)
// Retorne um array com o dobro dos valores (Map)
//               0  1  2 3 4 5 6 7 8 9
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const total = numeros.reduce(function(acumulador,valor,indice,array) {
    if(valor %2 === 0) acumulador.push(valor);
    return acumulador; //acumulador += valor; acescenta e soma
},[]);


//Retorne a pessoa mais velha
const pessoa = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoa.reduce(function(acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
});
console.log(maisVelha)