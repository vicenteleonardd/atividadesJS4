let idades = [16, 48, 23, 22, 45, 8, 12]

let idadesMaioresQue18 = idades.filter((idades) => {
    return idades > 18


})
console.log(`Idades maiores que 18 sao ${idadesMaioresQue18}`);
console.log('====================');
idades.forEach((age) => {
    console.log(`Sua idade é ${age}`);
})



