import {test, expect} from "vitest"
import {array} from "./exercicio04";

test('pegar os dois primeiros elementos', () =>{

    const resultado = array([2, 4, 6, 2, 8, 9, 5])
    expect(resultado).toEqual([2,4])

})