export interface Animal {
    emitirSom(): string;
}

export class Cachorro implements Animal {
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    emitirSom(): string {
        return `${this.nome} (da raça ${this.raca}) está latindo`;
    }
}

export class Gato implements Animal {
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    emitirSom(): string {
        return `${this.nome} (gato de idade ${this.idade}) está miando: Miau!`;
    }
}