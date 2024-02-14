const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    falar() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()
pessoa1.incrementaIdade()
pessoa1.falar()















/*
function criaPessoa(nome, sobrenome, idade) {
    return {nome,sobrenome,idade,}
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
const pessoa2 = criaPessoa('Luiza', 'Gabrieli', 53)
const pessoa3 = criaPessoa('Paula', 'Tejando', 32)
const pessoa4 = criaPessoa('Ana', 'Moreira', 65)
const pessoa5 = criaPessoa('Diogo', 'Gaybriel', 12)
const pessoa6 = criaPessoa('Bianca', 'Silva', 43)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome, pessoa6.nome)
*/
























/*

const nome01 = 'Luiz';
const sobreNome01 = 'Miranda';
const idade01 = '25';

const nome02 = 'Maria';
const sobreNome02 = 'Oliveira';
const idade = 55;



const pessoa1 = {
    nome: 'Olivia',
    sobreNome: 'Miranda',
    idade: 25,
}

const pessoa2 = {
    nome: 'Paula',
    sobreNome: 'Tejando',
    idade: 37,
}

console.log(pessoa1.nome)

*/