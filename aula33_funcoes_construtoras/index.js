//Função construtora => objetos
//Função fabrica => objetos
//Construtora => Pessoa (new)
function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {}

    //Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(`${this.nome}: Sou um método`)
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Diogo', 'Gabriel');

p1.metodo();