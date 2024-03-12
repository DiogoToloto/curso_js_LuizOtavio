function Calculadora(display) {

        this.display = display
        
        this.iniciar = () => {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackSpace();
        };

        this.pressionaEnter = () => {
            document.addEventListener('keyup', elemento => {
                if (elemento.key === 'Enter') {
                    this.realizaConta();
                }
            })
        };

        this.pressionaBackSpace = () => {
            this.display.addEventListener('keydown', elemento => {
                if (elemento.key === 'Backspace') {
                    elemento.preventDefault();
                    this.clearDisplay();
                }
            }) 
        };

        this.realizaConta = () => {
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

        };

        this.clearDisplay = () => this.display.value = '';
        this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);


        this.cliqueBotoes = () => {
            document.addEventListener('click', evento => {
                const elemento = evento.target;

                if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
                if (elemento.classList.contains('btn-clear')) this.clearDisplay();
                if (elemento.classList.contains('btn-del')) this.apagaUm();
                if (elemento.classList.contains('btn-eq')) this.realizaConta();
            });
        };

        this.addNumDisplay = elemento => {
            this.display.value += elemento.innerText;
            this.display.focus();
        }

        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
        }
    };

const calculadora = new Calculadora(document.querySelector('.display'));
calculadora.iniciar();