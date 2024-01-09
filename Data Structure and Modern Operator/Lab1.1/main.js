const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dormund",
    players: [
        [
           'Neuer',
           'Bander',
           'Marcell',
           'Alfred',
           'Dart',
           'King',
           'Golomb',
           'Comander',
           'Muller',
           'Gnarby',
           'Lewandoski',
        ],
        [
            'Bay',
            'Schult',
            'Hund',
            'Akanji',
            'Hakimi',
            'Warrior',
            'Wister',
            'Hazard',
            'Brand',
            'Sancho',
            'Gotze',
        ]

    ],
    score: '4:0',
    scored: ['Lewandoski', 'Gnarby', 'Muller', 'Lewandoski'],
    date: "Jan 2, 2024",
    odds: {
        team1: 2.33,
        x:  3.25,
        team2: 5.6,
    }
}
//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
//3
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const {
    odds: {team1, x: draw, team2}
} = game;
console.log(team1, draw, team2);
//6
function printGoal(...players) {
    console.log(`${players.length} Goal: ${players}`);
}
printGoal(...game.scored);
//7
(team1 < team2 && console.log(`${game.team1} win`)) || (team1 > team2 && console.log(`${game.team2} win`)) ;
