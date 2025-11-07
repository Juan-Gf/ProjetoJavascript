import { Conta } from "./Conta";

export function main(){

    // Instancia da classe conta
    // Instanciamento de um objeto

    const conta1: Conta = new Conta(200500, 231, 1, "Juan G", 5000000.50)

    console.log("Titular  da conta: " + conta1.titular)

    conta1.saldo = 200.00

    console.log("Saldo da conta: R$", conta1.saldo.toFixed(2))

}

main()