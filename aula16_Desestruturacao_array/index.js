//                    0         1         2
/*                 0  1  2   0  1  2   0  1  2
const numeros = [ [1, 2, 3],[4, 5, 6],[7, 8, 9]]
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);
*/

let cores = ['branco','verde','azul','amarelo','marom','rosa','vermelho']
cores.push('lilas')
cores.unshift('preto')
let [cor1,cor2,cor3,...cor4] = cores;

console.log(cores)


