function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        

        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', elemento => {
                if (elemento.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', elemento => {
                if (elemento.keyCode === 8) {
                    elemento.preventDefault();
                    this.clearDisplay();
                }
            }) 
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }

        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', e => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();