// Importando a biblioteca
const leia = require('readline-sync')

// Declarando multiplas variaveis 
let nome, distancia

// Entrada dos Dados
console.log("Digite seu nome: ")
nome = leia.question()

console.log("\nDigite a distância percorrida em sua corrida: ")
distancia = leia.questionFloat()

// Saida dos Dados
console.log("\nBom dia, " + nome)
console.log("\nA distância percorrida foi de "+ distancia)



