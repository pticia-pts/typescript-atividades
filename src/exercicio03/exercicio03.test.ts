import {test, expect} from "vitest"
import {array} from "./exercicio03";

test('ordenação decrescente', () =>{

    const resultado = array(['carro', 'boneco', 'ave', 'lapis'])
    expect(resultado).toEqual(['lapis', 'carro','boneco', 'ave'])

})