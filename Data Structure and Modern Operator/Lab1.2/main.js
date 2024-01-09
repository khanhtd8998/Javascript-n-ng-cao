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
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    }
}
//1
for (var i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i+1}: ${game.scored[i]}`);
}
//2
let average = 0;
let odd = Object.values(game.odds);
// console.log(odd);
for(let i = 0; i < odd.length; i++) average += odd[i];
average /= odd.length;
console.log(average);
//3
for(const [team,odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Ti le ${teamStr}: ${odd}`);
}
//4
const scores = {}
game.scored.forEach(player => {
    scores[player] = (scores[player] || 0) + 1;
});
console.log(scores);
