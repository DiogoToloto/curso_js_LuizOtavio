
const data = new Date();
const texto = document.querySelector('.container h1');


function  semanaValor(dataSemana) {
    const diasSemanas = ['Domingo','Segunda-feira','Terça-feira','Quart-feira','Quinta-feira','Sexta-feira','Sábado']

    return diasSemanas[dataSemana]
}

function  mesValor(dataMes) {
   const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

   return meses[dataMes];
}

function zeroAEsquerda(num){
   return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const dataSemana = data.getDay();
    const dataMes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());

    const nomeDia = semanaValor(dataSemana);
    const nomeMes = mesValor(dataMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${ano} <br> ${hora}:${minuto}`
}

texto.innerHTML = criaData(data);


//const data = new Date();
//const texto = document.querySelector('.container h1');
//texto.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});