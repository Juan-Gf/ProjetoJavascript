// Importa biblioteca
const leia = require('readline-sync')

// Variaveis    
let nota1, nota2, media

//Entrada de dados
nota1 = leia.questionFloat("Digite a primeira nota: ")

nota2 = leia.questionFloat("Digite a segunda nota: ")

// Processamento
media = (nota1 + nota2) / 2

if(media >= 6){
    // Saida IF (verdadeiro)
    console.log("Parabéns, você passou!")
}else if(media == 5){
    // Saida Else - If (verdadeiro)
    console.log("Voce está de exame!")
}else{
     // Saida Else (falso)
    console.log("Você reprovou!")
}