let million = 1e6; // 1 million, literally: 1 and 6 zeroes
console.log(2.5e6); // 2.5 millions (2,500,000)

let hex = 0xfff;
console.log(hex); // 4095
console.log(0xff); // 255
console.log(0xFF); // 255 (the same, case doesn't matter)

let octal = 0o30;
console.log(octal); // 24

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
console.log(a == b); // true


let num = 255;
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111