// ? : Operador ternario

const pontuacaoUsuario = 1100;

const usuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Black'

console.log(usuario, corPadrao)



/* condiçoes

if ( pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario normal')
}
*/