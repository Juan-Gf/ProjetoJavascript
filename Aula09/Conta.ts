export class Conta {

    //Atributos da Clase
    private _numero: number    // indica que o atributo só é acessivel dentro da Classe
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    // Metiodo Construtor
    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        this._numero = numero // this => Representa a classe atual. Neste caso a Conts => Conta.numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    // Metodo de Acesso - Get e o Set -> Getters e Setters
    public set numero(novoValor: number) { // SET -> atualiza de forma segura os atributos 
        this._numero = novoValor
    }

    public get numero() { // GET -> retorna/mostra de forma segura o valor do atributo
        return this._numero
    }

    public get agencia() {
        return this._agencia;
    }

    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

}