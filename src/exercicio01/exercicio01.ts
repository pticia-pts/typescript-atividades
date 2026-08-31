// Declara uma variável constante do tipo number[] 
// e inicializa com um array de números
export function quadradoFor(numeros: number[]): number[]{
// Cria um array vazio do tipo number[]
// que vai armazenar os quadrados
    const quadrado:number[]=[];

    for (let i = 0; i < numeros.length; i++) {

    // Pega o elemento na posição i
    // e calcula o seu quadrado
    const quad = numeros[i] * numeros[i];

    // Adiciona o resultado ao final do array quadrados, antes vazio
    quadrado.push(quad);
}
    return quadrado
}

export function quadradoForEach(numeros: number[]): number[] {
    const quadrados: number[] = [];

    numeros.forEach((numero) => {
        const quad = numero * numero;
        quadrados.push(quad);
    });

    return quadrados;
}

// 