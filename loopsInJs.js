
ls = [1,2,3,3,5,6,7]

for(let i= 0;i<ls.length;i++){console.log(ls[i])}

console.log('-----------------------')
let i = 0
while(i<ls.length){console.log(ls[i]); i++}
console.log('-----------------------')
let j = 0;
do
{
    console.log(j)
    j++;
}while(j<ls.length)
console.log('-----------------------')
// for (i of ls){console.log(i)}

for (char of "Hellooo"){console.log(char)}

obj = {"one" : "Hello",
        "Two" : "hi"}

for (i in obj){console.log(i)}