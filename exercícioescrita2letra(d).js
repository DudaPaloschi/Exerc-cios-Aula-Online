function imprimirTamanhoEMaiusculas(mensagem) {
 
    console.log(`O tamanho da mensagem é: ${mensagem.length}`);
    
    console.log(`Versão em letras maiúsculas: ${mensagem.toUpperCase()}`);
}

const mensagem = "Olá, mundo!";
imprimirTamanhoEMaiusculas(mensagem);
