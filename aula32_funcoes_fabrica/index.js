// Essa função retorna um objeto
// Função construtura
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 

        sobrenome,

        //getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome} seu imc é ${this.imc}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto) {
            return `${nome} está ${assunto}.`;
        },

        altura,

        peso,
        // getter
        get imc() {
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    };
}

const pessoa1 = criaPessoa('Diogo', 'Gabriel', 1.68, 63);
const pessoa2 = criaPessoa('Maria', 'Silva', 1.50, 69 )
console.log(pessoa1.nomeCompleto)