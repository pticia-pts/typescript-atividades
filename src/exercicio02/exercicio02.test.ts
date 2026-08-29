import {test, expect} from "vitest"
import {concatenacao} from "./exercicio02";

test("deve concatenar as strings com espaço", () => {
    const resultado = concatenacao(["Arrays", "com", "TypeScript"]);

    expect(resultado).toBe("Arrays com TypeScript");
});