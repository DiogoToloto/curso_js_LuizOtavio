function iniciar() {
    let timer = document.querySelector('.texto')
    let data = new Date()
    let tempoLimite = data.getDate()
    const tempo = setInterval(function() {
        for (let i = 0; i < tempoLimite;) {

        }
    }, 1000)
    

    timer.innerHTML = tempo
}
