/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOnwPropertyDescriptor(o, 'prop')
... (spread)


// ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.80};
const outraCoisa = { // object.assign({}, produto, {material: "Porcelana"})
    ...produto,
    material: "Porcelana"
};

outraCoisa.nome = "Garrafa";
outraCoisa.preco = 2.5

console.log(produto)
console.log(outraCoisa)