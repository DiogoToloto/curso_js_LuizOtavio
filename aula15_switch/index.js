const data = new Date();
const diaSemana = data.getDay();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda";
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça";
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta";
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta";
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta";
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        
            default:// valor padrão
                diaSemanaTexto = "";
    }

    return diaSemanaTexto;
}
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);

let dataMes = data.getMonth();

function getDataMes(dataMes) {
    let dataMesTexto;

    switch(dataMes) {
        case 0:
            dataMesTexto = "Janeiro";
            return dataMesTexto 
        case 1:
            dataMesTexto = "Fevereiro"
            return dataMesTexto
        case 2:
            dataMesTexto = "Março"
            return dataMesTexto
        case 3:
            dataMesTexto = "Abril"
            return dataMesTexto
        case 4:
            dataMesTexto = "Maio"
            return dataMesTexto
        case 5:
            dataMesTexto = "Junho"
            return dataMesTexto
        case 6:
            dataMesTexto = "Julho"
            return dataMesTexto
        case 7:
            dataMesTexto = "Agosto"
            return dataMesTexto
        case 8:
            dataMesTexto = "Setembro"
            return dataMesTexto
        case 9:
            dataMesTexto = "Outubro"
            return dataMesTexto
        case 10:
            dataMesTexto = "Novembro"
            return dataMesTexto
        case 11:
            dataMesTexto = "Dezembro"
            return dataMesTexto

        default:
            dataMesTexto = ""
    }

    return dataMesTexto
}

let dataMesTexto = getDataMes(dataMes);
console.log(dataMes, dataMesTexto);


/*
switch(diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo";
        break;
    case 1:
        diaSemanaTexto = "Segunda";
        break;
    case 2:
        diaSemanaTexto = "Terça";
        break;
    case 3:
        diaSemanaTexto = "Quarta";
        break;
    case 4:
        diaSemanaTexto = "Quinta";
        break;
    case 5:
        diaSemanaTexto = "Sexta";
        break;
    case 6:
        diaSemanaTexto = "Sábado";
        break;
    
        default:// valor padrão
            diaSemanaTexto = "";
}
*/
