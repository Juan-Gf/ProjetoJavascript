import { IEscritor } from "./IEscritor";
import { IPintor } from "./IPintor";
import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa implements IEscritor, IPintor {
    
    constructor(nome: string){
        super(nome)
    }

    public saudacao(): void {
        console.log("Olá, meu nome é " + super.nome)
    }

    escrever(): void {
        console.log("Escrevendo pelo computador...")
    }

    pintar(): void {
        console.log("Pintar com giz de cera...")
    }




}