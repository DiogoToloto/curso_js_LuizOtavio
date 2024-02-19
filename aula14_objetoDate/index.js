function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData() {

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);7


/*
const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(2024, 3, 13, 15, 8, 12);

console.log(data.toString)
*/