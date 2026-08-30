import { test, expect } from "vitest";
import { Cachorro, Gato } from "./exercicio06";

test("Interface Animal em classes diferentes", () => {
    const cachorro = new Cachorro("Rex", "Labrador", 2);
    const gato = new Gato("Mimi", "Frajola", 12);

   
    cachorro.nome = "Thor";
    gato.idade = 12;

    
    expect(cachorro.emitirSom()).toContain("latindo");
    expect(gato.emitirSom()).toContain("miando");
});