

function saudacao(nome) {
    return `Bom dia ${nome}`// depois de return nao sera executado mais nada

}

console.log(saudacao('Diogo'))

// nao se pode alterar ou utilizar nada dentro de uma funcao
//const variavel = saudacao('Luiz');
//console.log(variavel)

/*

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado


    const resultado = soma(4, 2)
    console.log(resultado)
}*/

/*
const raiz = function(n) {
    return n ** 0.5;
}

*/


const raiz = n => n ** 0.5; // arrow function, usada para codigos pequenos de uma linha


console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))