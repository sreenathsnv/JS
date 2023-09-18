let languagesList = `Languages:
 * Javascript
 * Php
 * Java
`;
console.log(languagesList); // a list of languages, multiple lines


let str = "W3Docs"; 
console.log(`Welcome to ${str}`); // Welcome to W3Docs

console.log(languagesList.length)
console.log(languagesList.split('\n'))
console.log(languagesList.slice(12,32))
console.log(str.toUpperCase())
console.log(str.charAt(12))
console.log(languagesList.replace('Language','Lang'))

// find a substring - indexOf,lastIndexOf,includes

txt = 'Hello, Im Sreenath.Im a Mca student'

console.log(txt.indexOf('Im'))//7
console.log(txt.lastIndexOf('Im'))//19
console.log(txt.includes('Hello'))//true


//slicing of a string

text = "JavaScript includes three methods of getting a substring: substring, substr, and slice"

console.log(text.slice(12,25))
console.log(text.slice(4,))
console.log(text.slice(-7,12))

//substring 
// - It looks much like slice. The most notable difference
// is that in the framework of 
// this method, the start can be greater than the end.
console.log('-------------------------')
console.log(text.substring(19,3))

/*

str.substr(start [, length])

This method returns the part of the string from the start,
 with a particular length. It differs from the previous methods.
This method will help you specify the length instead of the ending position.

*/

console.log(text.substr(1,7))