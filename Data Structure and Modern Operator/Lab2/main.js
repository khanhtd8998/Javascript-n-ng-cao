//#Coding Challenge #3
const game = new Map([
    [9, 'Phạm lỗi'],
    [10, 'Phạt góc'],
    [15, 'Bàn thắng'],
    [26, 'Thay người'],
    [44, 'Thẻ vàng'],
    [60, 'Bàn thắng'],
    [64, 'Check VAR'],
    [78, 'Penalty'],
    [88, 'Thay người'],
    [90, 'Thẻ đỏ'],
]);

//1
const gameArr = [...new Set(game.values())];
console.log(gameArr);

//2
game.delete(64);
console.log(game);

//3
console.log(`1 xự kiển xảy ra, trung bình mỗi ${90 / game.size} phút`);

//4
for (const [key, value] of game) {
    (key < 45) ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
}

//#Coding Chellenge #4
const form = document.querySelector('form');
const string = document.querySelector('#stringValue');
const showString = document.querySelector('h2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    changeStr();
});
function changeStr() {
    const stringValue = string.value;
    const arr = stringValue.split('\n');
    for (const i of arr) {
        const [a, b] = i.toLowerCase().trim().split('_');
        const output = `${a}${b.replace(b[0], b[0].toUpperCase())}`;
        console.log(output);
    }

}

//Lab2.3
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
console.log(getCode);
for (const flight of flights.split('+')) {
    console.log(flight);
    const [type, from, to, time] = flight.split(';');
    console.log(type, from, to, time);
    const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll('_',' ')} 
    ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);

}

//Lab2.4
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener
        ('click', function () {
            setTimeout(() => header.style.color = 'blue', 3000);
        });
})();