const texto1 = "Olá, mundo! 8.8****@#$%¨&&";
console.log(texto1)

const stringNumeros = '15489975145231';
console.log(stringNumeros)

const citacao = 'Eu havia dito "Olá!"';
console.log(citacao)

//template string ou template literal


// concatenação

const vezes = 5;

const novaCitacao = citacao +  " mais de "  +  vezes  +  " vezes. ";
console.log(novaCitacao)

// strings codificação

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//length

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


//upper and lower
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true