// 1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


/* a) Vai imprimir 10 e 50 no console, pois a função minhaFuncao multipica 
o argumento variavel por 5 e retorna o resultado.*/

/* b) Se você simplesmente invocar a função minhaFuncao(2) e minhaFuncao(10) sem usar console.log 
para imprimir os resultados no console, nada será exibido no console. O código será executado, 
mas como não há instruções para imprimir os resultados, 
nenhum valor será mostrado no console. As chamadas da função serão processadas, mas os resultados 
não serão visíveis para o usuário.*/

// 2)

let textoDoUsuario = ("Eu gosto de cenoura");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/* a) Esta função JavaScript solicita ao usuário que insira 
um texto por meio de uma caixa de diálogo (prompt), 
e então verifique se o texto contém a palavra "cenoura".*/

/* b) A saída vai ser true para cada uma dessas entradas*/