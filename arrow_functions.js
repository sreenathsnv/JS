
let sum = (a,b)=> a+b
console.log(sum(2,3))


sum = (a,b)=> {a+b}
console.log(sum(2,3))
// This above code prints undefined beacuse if we use {} in arrow functions
// then we must mention return explicitly

sum = (a,b)=> {return a+b}
console.log(sum(2,3))




// let number = prompt("Guess the number", "");
let number  = 10
let guessNumber = (number == 10) ?
  () => console.log('It’s right') :
  () => console.log('It’s a wrong number')
guessNumber(); // it’s work