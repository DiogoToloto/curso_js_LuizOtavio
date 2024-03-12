//               -5      -4      -3        -2       -1
//                0       1       2         3        4
const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia']
// nomes.splice(indice, delete, elemt1, element2, element3,);
//pop
const removidos = nomes.splice(3, 2, 'Diogo','Sofia');
console.log(nomes, removidos)