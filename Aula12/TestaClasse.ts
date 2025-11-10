import { Estudante } from "./Estudante";

export function main() {

    const estudante: Estudante = new Estudante("Juan")

    estudante.saudacao()
    estudante.escrever()
    estudante.pintar()

    estudante.visualizar()

}

main()