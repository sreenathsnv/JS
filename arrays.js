let arr = new Array();
let arr1 = [];

let books = ["Html", "Css", "Javascript"];

/*

push - is used for appending an element to the end

shift - is used for getting an element from the beginning, advancing the queue. In consequence, the second element becomes the first.

Arrays support both of the above-mentioned operations, and it’s a widespread practice for developers.

You can use arrays for another practice as well. It’s data structure named stack, which supports two operations:

push - it’s aimed at adding an element to the end.

pop - is aimed at taking an element from the end.
*/

// console.log(books.splice(1,2))//from index 1 remove 2 element
// console.log(books)

// remove 2 first elements and replace them with another
console.log(books.splice(0,2,'vue','django','node'))
console.log(books)

console.log(books.push('pushed element'))// returns the index
console.log(books)

console.log(books.slice(1,3))
console.log(books)
// removes first element or left shift
console.log(books.shift())
console.log(books)

// removes last element
console.log(books.pop())

//adds an item at the end
console.log(books.unshift('vue'))
console.log(books)

// forEach
// array.forEach(function(currentValue, index, arr), thisValue)
numarray = [1,2,3,4,5,56,67,33,84,86,58]

// newarr = numarray.forEach((e,i,array)=>{console.log(`${e}\n , ${i}\n,${array}`)})
numarray.forEach((e,i,array)=> {array[i] = e**2})
console.log(numarray)


// filter

let animals = [{
    id: 1,
    name: "dog"
  },
  {
    id: 2,
    name: "cat"
  },
  {
    id: 3,
    name: "mouse"
  }
];
// returns array of the first two animals
let someAnimals = animals.filter(item => item.id < 3);
console.log(someAnimals.length); // 2

// map

let lengths = ["dog", "cat", "mouse"].map(item => item.length);
console.log(lengths); // 3,3,5

// sort

arr = [1, 3, 25];
// the method reorders the content of arr

// You will find something quite strange in the outcome. The order looked like 1, 25, 3

// The reason is that the items are sorted as strings.

// All the elements are converted to strings for comparisons. The lexicographic ordering is used for strings ( "3" > "25").

// For using your sorting order, you need to supply a function as the argument of the arr.sort().
arr.sort();
console.log(arr); // 1, 25, 3


arr.sort((a,b)=>{
    if (a>b) return 1
    if (a==b) return 0
    if (a<b) return -1
})
console.log(arr)

// split join

 animals = 'dog, cat, mouse';
arr = animals.split(', ');
for (let animal of arr) {
  console.log(`A message to ${animal}.`); // A message to dog  (and other names)
}
arr = 'dog, cat, mouse, lion'.split(', ', 2);
console.log(arr); // dog, cat


let animalsArr = ['dog', 'cat', 'mouse'];
let str = animalsArr.join(';'); // glue the array into a string using ; 
console.log(str); // dog;cat;mouse

/*  

let value = arr.reduce(function (accumulator, item, index, array) {
  // ...
}, [initial]);
The arguments are:

the accumulator represents the result of the previous function call equaling initial the first time;
the item can be described as the current array item.
the index is its position.
the array is the array.

*/

let sumArr = [1, 2, 3, 4, 5];
let result = sumArr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15