
let a =2,b =3 
function sum(a,b)
{
    return a+b
}
console.log(sum)

console.log(sum(a,b))

function show(arg1, arg2) {
    if (arg2 === undefined) {
      arg2 = '\ntext not specified';
    }
    console.log(arg1 + " to " + arg2);
  }
  show("Welcome");

function show(arg1, arg2) {
    arg2 = arg2 || 'text not specified';
    console.log(`${arg1} + ${arg2}`)}
show("hello")


// Function expression
Sum = function(a,b){return a+b}
console.log(Sum(1,2))

Sub = (a,b)=>{return a-b}
console.log(Sub)
console.log(Sub(2,1))

/*
A function passed to another function is called a “callback” in JavaScript.

There are examples of passing functions as values and using function expressions presented below.

*/

function hello(){console.log("hello")}
function hi(){console.log("hi")}

function callbackBoth(hel,hii,person)
{
    if (person == 'snv')
    {
        hel()
    }
    else{hii()}

}

callbackBoth(hello,hi,'snv')

