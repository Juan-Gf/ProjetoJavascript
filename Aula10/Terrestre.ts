import { Transporte } from "./Transporte"

export class Terreste extends Transporte{ // Classe filha | Sub-Classe
    private _numeroRodas: number
    private _velocidade: number

    constructor (capacidade: number, numeroRodas: number, velocidade: number){
        super(capacidade) // Rerencia ao Métodp Construtor da classe Transporte
        // Transporte(capacidade)

        this._numeroRodas = numeroRodas
        this._velocidade = velocidade

    }

    public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

    // Sobrescrita de Método
    public visualizar(): void {
		super.visualizar();

    
		console.log("Número de rodas: " + this.numeroRodas);
		console.log("Velocidade: " + this.velocidade.toFixed(2));
	}

}