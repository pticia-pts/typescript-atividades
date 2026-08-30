import {test, expect} from "vitest"
import {array} from "./exercicio05";


test ('filtragem de números pares', () =>{

    const resultado =array([8, 3, 9, 5, 6, 12]);
    expect (resultado).toEqual([8,6,12]) 

})
