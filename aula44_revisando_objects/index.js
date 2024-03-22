// Factory functions / Construtor fuctions / Classes
function criaPessoal(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoal('Diogo','Toloto')
console.log(p1.nomeCompleto())

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Luiz','Otavio');
const p3 = new Pessoa('Ana','Maria');
console.log(p2)
//Object.freeze(alguma coisa) trava um Object












/*
const pessoa1 = new Object(); // Objeto construtor
pessoa1.nome = 'Diogo';
pessoa1.sobrenome = 'Toloto'
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}

const pessoa2 = { // Objeto literal
    nome: 'Diogo',
    sobrenome: 'Toloto'
}
*/