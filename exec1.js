let jogos = ['Read Dead Redemption', 'Super Mario', 'Just Cause', 'The Last Of Us', 'Sonic']

jogos.forEach((jogo, index, arrayCompleto) => {
    console.log(`Jogo ${index + 1}: ${jogo}`);
    console.log(`Array completo ${arrayCompleto}`);
    console.log('=====================');
});