function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000)

setTimeout(function() {
    clearInterval(timer);
}, 100000);

setTimeout(function() {
    console.log('Olá meu amigo')
}, 11000)