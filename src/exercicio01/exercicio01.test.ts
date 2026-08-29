import {test, expect} from "vitest"
import {quadradoFor} from "./exercicio01";
import {quadradoForEach} from "./exercicio01";

test ("deve calcular o quadrado dos números", () => {

    const resultado= quadradoFor([3, 5, 7, 3, 8, 9, 1]);
    console.log(resultado)
    expect(resultado).toEqual([9,25,49,9,64,81,1]);
});

test ("deve calcular o quadrado dos números com ForEach", () => {

    const resultado= quadradoForEach([3, 5, 7, 3, 8, 9, 1]);
    console.log(resultado)
    expect(resultado).toEqual([9,25,49,9,64,81,1])
})
