let lista = [1, 'dois', 3, 'quatro']

let map1 = lista.map((array) => {
    if(typeof array === 'number'){
        return array * 2
    } else if (typeof array === 'string'){
        return array.toUpperCase()
    } else {
        console.log('insira um number ou uma string')
    }

})
console.log(map1)

let lista2 = lista.filter((filtrar) => typeof filtrar === 'number')
console.log(lista2)


let lista3 = lista.reduce((cont, soma) => {
    if (typeof soma === 'number'){
    return soma + cont
    } else {
        return cont
    }
}, 0)
console.log(lista3)
