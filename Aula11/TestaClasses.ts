import { Ciclista } from "./Ciclista";
import { Nadador } from "./Nadador";

export function main() {
    
    const nadador: Nadador = new Nadador("Juan")
    const ciclista: Ciclista = new Ciclista("Paulo")

    nadador.visualizar()
    nadador.aquecer()
    nadador.nadar()

    console.log('')

    ciclista.visualizar()
    ciclista.aquecer()
    ciclista.pedalar()
    
    
}

main()