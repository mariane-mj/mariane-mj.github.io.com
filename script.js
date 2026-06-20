var quotes = [
    'O Brasil é a única equipe a ter participado de todas as edições do torneio.',
    'O maior goleador geral é o alemão Miroslav Klose, com 16 gols. O brasileiro Ronaldo Fenômeno vem logo atrás, com 15.',
    'Lionel Messi é o jogador com mais partidas disputadas na história do torneio, acumulando 26 jogos.',
    'A maior goleada da história das Copas ocorreu em 1982, quando a Hungria venceu El Salvador por 10 a 1.',
    'O nome "Copa" vem do francês coupe, que significa taça, o prêmio original entregue aos campeões.',
    'A Copa de 1950, sediada no Brasil, foi a única a não ter uma final oficial. O campeão foi decidido através de um quadrangular final.'
]

function newQuote () {
    var randomNumber = Math.floor(Math.random () * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes(randomNumber);
}