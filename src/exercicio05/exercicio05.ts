// let vet=[1,2,3,4];

// let novo_vet= vet.filter (element => element > 1)

// console.log(novo_vet)


export function array(valor: number[]): number[]{

    let valor_pares= valor.filter (element => element % 2 ===0);
    return valor_pares
}
