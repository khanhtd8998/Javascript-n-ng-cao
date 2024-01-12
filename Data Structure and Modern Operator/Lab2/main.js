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
// const arr = 'khanh_tran_duy'
// const arr = str.split('_');
// const arr2 = [];
// arr2.push(arr[0]);
// for(let i = 1; i < arr.length; i++) {
//     arr2.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
// }
// console.log(arr2);
// console.log(arr2.join(""));


const form = document.querySelector('form');
const string = document.querySelector('#stringValue');
const showString = document.querySelector('h2');
form.addEventListener('submit',function (event) {
    event.preventDefault();
    changeStr();
});
function changeStr() {
    const stringValue = string.value;
    const arr = stringValue.split('\n');
    for(const i of arr) {
        const [a,b] = i.toLowerCase().trim().split('_');
        const output = `${a}${b.replace(b[0],b[0].toUpperCase())}`;
        console.log(output);
    }
    
}
