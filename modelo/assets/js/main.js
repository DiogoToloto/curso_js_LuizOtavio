function calcular() {
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let pesoNumero = Number(peso.value);
    let alturaNumero = Number(altura.value);
    let resposta = document.getElementById('res');
    let imc = pesoNumero / (alturaNumero * alturaNumero);
    let nivelImc = graupeso(imc)

    function graupeso(imc) {
        let nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau1','Obesidade grau2','Obesidade grau3']

        if(imc > 40) return nivel[5];
        if(imc >= 34.9) return nivel[4]
        if(imc >= 29.9) return nivel[3]
        if(imc >= 24.9) return nivel[2]
        if(imc >= 18.5) return nivel[1]
        if(imc <= 18.5) return nivel[0]

    }

    
    if (peso.value == 0) {
        resposta.innerHTML = `Peso inválido`;
        resposta.style.backgroundColor = 'rgb(254, 122, 122)';
        resposta.style.color = 'red';
        return;
    }
    if (altura.value == 0) {
        resposta.innerHTML = `Altura inválida`;
        resposta.style.backgroundColor = 'rgb(254, 122, 122)';
        resposta.style.color = 'red';
        return;
    }
    
    let msg = `seu IMC é ${imc.toFixed(2)} (${nivelImc})`

    resposta.innerHTML = msg
    resposta.style.backgroundColor = 'rgb(0, 183, 255)';
    resposta.style.color =  '#fff'
}