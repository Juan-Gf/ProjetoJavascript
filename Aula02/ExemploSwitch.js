const leia = require('readline-sync')

let opcao

console.log("* ** *** **** ********   Menu   ******** **** ** *")
console.log("\n--Digite 1 para ver Indicação de um Livro--")
console.log("--Digite 2 para ler uma Frase Motivacional--")
console.log("--Digite 3 para receber uma Indicação de Música--")

opcao = leia.questionInt()

switch(opcao){
    case 1:
        console.log("Livro: Asylum")
        break
        
    case 2:
        console.log("Frase motivacional: Se você cair levante! Não da para andar deitado.")
        break
    
    case 3:
        console.log("Música: Linkin Park - Up From the Bottom")
        break

    default:
        console.log("Opção invalida - Digite de 1 a 3")
        break
}
s
console.log("Programa encerrado!")