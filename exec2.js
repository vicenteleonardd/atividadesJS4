let numeros = [1, 2, 3, 4, 5]

let dobroNumeros = numeros.map((numeros) => {
    return numeros * 2

})


let numerosPares = numeros.filter((num) => {
    return num % 2 === 0
});



console.log(numerosPares);
console.log(dobroNumeros);