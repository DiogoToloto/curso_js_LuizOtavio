const nome = 'Diogo Gabriel';
const sobrenome = 'Toloto';
const idade = 21;
const peso = 63;
const altura = 1.68;
let imc = peso / (altura**2);
let anoDeNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg tem ${altura} de altura e seu IMC é de ${imc}, ${nome} nasceu em ${anoDeNascimento}`)