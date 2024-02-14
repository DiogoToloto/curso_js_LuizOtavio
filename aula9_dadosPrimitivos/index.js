const a = {
    nome: 'luiz',
    sobrenome: 'otavio',
}

const b = {...a};

a.nome = 'joao';
console.log(b);

















/*
let a = [1,2,3];
let b = [...a];// b esta copiando dados da variavel a, ele é totalmente independente
let c = b;// esta apontando para o mesmo local na momeria que a variavel b
console.log(a, b, c);

a.push(4);
console.log(a, b, c);

b.pop();
console.log(a, b, c)

a.push('Luiz')
console.log(a, b, c)
*/