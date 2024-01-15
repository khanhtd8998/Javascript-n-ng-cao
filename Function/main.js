/* Callback Function */
// const oneWord = function (word) {
//     return word.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (word) { 
//     const [first, ...arr] = word.split(' ');
//     return [first.toUpperCase(), ...arr].join(' ');
// }

// const changeString = function (str, fn) {
//     console.log(` Chuỗi ban đầu: ${str} `);
//     console.log(` Chuỗi sau chuyển: ${fn(str)}`);
// }

// changeString('Khánh đẹp trai vô đối', oneWord)
// changeString('Khánh đẹp trai vô đối', upperFirstWord)

/** Functions Returning Function */
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     } 
// }
// const greetHi = greet('Hi');
// greetHi('Khanh');
// greet('Hello')('Hanh');

// //Chuyển đổi hàm trên sang arrow function
// const greet2 = greeting => name => {
//         console.log(`${greeting} ${name}`);
//     }
// greet2('Hello')('đâsddas')

/** Immediately  Invoked Function Expressions */
//Biểu thức hàm được gọi ngay lập tức
const run = function () {
    console.log('Running');
}
run();//gọi hàm như bt
//không gọi hàm
(function () {
    console.log('Running');
})();
(() => console.log('Runningggg'))();

(function inStr(name){
    console.log(name);
})('khanh');

//CODING CHALENNGE 
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener
    ('click', function() {
        setTimeout(() => header.style.color = 'blue', 3000);
    });
})();
