//Lab3.2
const checkDog = (Julia,Kate) => {
    const JuliaTrue = Julia.slice();
    JuliaTrue.splice(0, 1);
    JuliaTrue.splice(-2);
    console.log(JuliaTrue);
    const arraySum = [...JuliaTrue, ...Kate];
    console.log(arraySum);
    const output = arraySum.map((x,i) => (x > 3) ? console.log(`Cho thu ${i+1} truong thanh va ${x} tuoi`) : console.log(`Cho thu ${i+1} la cho con`) )
    return output;
}
checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

//Lab3.3

const dogsAge = (dog) => { 
    const humanAge = dog.map(age => age <= 2 ? age*2 : 16 + age*4);
    const adults = humanAge.filter(age => age >= 18);
    const sumAdults = adults.reduce((acc, cur) => {
        return acc + cur;
    },0)
    const average = sumAdults / adults.length;
    console.log(humanAge);
    console.log(adults);
    console.log(average);
}
dogsAge([5, 2, 4, 1, 15, 8, 3])

//Lab3.4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

const check = voters.reduce((acc,voter) => {
  if(voter.age >= 20 && voter.age <= 30) {
    return acc + (voter.voted ? 1  : 0);
  }
  
  return acc;
}, 0);
console.log(check);

// dùng hàm reduce
// 1. trả về một đối tượng
// Số lượng người vote từ 20-30 tuổi
// Số lượng người vote từ 30-40 tuổi
// Số lượng người vote từ 40 trở lên

