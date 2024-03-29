function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

const numero1 = parseFloat(prompt("Insira o primeiro número:"));
const numero2 = parseFloat(prompt("Insira o segundo número:"));

const resultadoSoma = soma(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoMultiplicacao = multiplicacao(numero1, numero2);
const resultadoDivisao = divisao(numero1, numero2);

console.log("Números inseridos:", numero1, "e", numero2);
console.log("Soma:", resultadoSoma);
console.log("Diferença:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);
