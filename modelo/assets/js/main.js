    const form = document.getElementById('form');

    form.addEventListener('submit', function (evento) {

        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false);
            return;
        }

        const imc = calculoImc(peso, altura)
        const nivelImc = nivelDoImc(imc)

        const msg = `Seu IMC é ${imc} (${nivelDoImc(imc)})`

        setResultado(msg, true)
    });


    function nivelDoImc(imc) {

        const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau1','Obesidade grau2','Obesidade grau3']

        if (imc >= 39.9) { return nivel[5]}
        if (imc >= 34.9) { return nivel[4]}
        if (imc >= 29.9) { return nivel[3]}
        if (imc >= 24.9) { return nivel[2]}
        if (imc >= 18.5) { return nivel[1]}
        if (imc <= 18.5) { return nivel[0]}
    }

    function calculoImc(peso, altura) {
        const imc = peso / altura**2;
        return imc.toFixed(2);
    }

    function criaP() {
        const p = document.createElement('p')
        return p;
    }

    function setResultado (msg, isValid) {
        const resultado = document.querySelector('#res');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) 
        {p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('paragrafo-invalido')
    }
        p.innerHTML = msg;
        resultado.appendChild(p)

    }

    