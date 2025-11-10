import { Automovel } from "./Automovel";
import { Terreste } from "./Terrestre";

export function main() {

    // Intanciou o objeto da Classe Terrestre
    const bike: Terreste = new Terreste(2, 2, 20)

    const carro: Automovel = new Automovel(4, 4, 80, "Lilas", 4, "DIF-0357", 0)

    console.log("A capacidade do meio de transporte é: " + bike.capacidade)

    bike.visualizar()

    carro.visualizar()

}

main()
