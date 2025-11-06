// Exemplo de função

// Declaração da Função
export function somar(a: number, b: number): number{
    
    let resultado: number = a + b
    
    return resultado
}

export function logar(usuario: number | string): void{ // | => Pipe / ||
    
    if (typeof(usuario) === "number" ) // typeof verifica a tipagem da variavel
        console.log("\nVoce está acessando o Insta pelo seu Celular");
    else
        console.log("\nVoce está acessando o Insta pelo seu E-mail");
}
/*
= : Atribuição => let A recebe 5 (A = 5)
== : Igualdade => 5 é igual a '5' 
=== : Identico => 5 é igual a '5' e eles tem o mesmo tipo?
*/


