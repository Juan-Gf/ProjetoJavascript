const leia = require('readline-sync')

// Variavel
let idade

// Entrada de dados
console.log("Digite sua idade: ")
idade = leia.questionInt()

// Processamento - IF
if(idade < 18){
    // Saida IF (verdadeiro)
    console.log("Você não pode dirigir")
}

// Saida de dados
console.log("Fim do programa")


