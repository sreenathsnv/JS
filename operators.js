

// let x = 2.5,y =3
// console.log(x+y)
// console.log(x-1.232)
// console.log(x*y)
// console.log(y**2)
// console.log(y/x)
// console.log(y%2)
// console.log(y++)
// console.log(++x)
// console.log(1+ +'3')

// let z = -3
// let w = -z
// console.log(w)


// // assignment operators

// let n = 4

// n /= 1
// n <<= 2
// n|= 1
// n &= 2
// etc 

// let X = 5, Y= 0
// console.log(X || Y)
// console.log(X && Y)
// console.log(!Y)

// yield operator
function* hello(){ yield 1; yield 2 ; yield 3}

// x = hello()
// console.log(x.next()) // returns a dictionary with keys value and done. Here value is 1 and done is false
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())//done == true

// let x = hello()
// console.log(x.next().value)
// console.log(x.next().value)
// console.log(x.next().value)
// console.log(x.next().value) // undefined

// del operator

let Val = 5

console.log(Val)
delete Val
console.log(Val)
