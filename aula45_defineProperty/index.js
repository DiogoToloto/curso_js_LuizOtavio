// defineProperty - defineProperties

function Produto(nome,preco,estoque) {

    Object.defineProperties(this,{
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false,// pode alterar
            configurable: true,// configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false,// pode alterar
            configurable: true,// configuravel
        },
    })

    Object.defineProperty(this, 'estoque', {
        value: estoque, // valor
        writable: false,// pode alterar
        enumerable: true, // mostra a chave
        configurable: true,// configuravel
    });
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);

for (let chave in p1) {
    console.log(chave)
}