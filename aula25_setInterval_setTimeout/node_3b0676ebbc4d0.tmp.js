function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-br', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

setInterval(funcaoDoInterval, 1000)