let [name1, name2, ...rest] = ["John", "Doe", "doctor", "surgeon"]; 
console.log(name1); // John
console.log(name2); // Doe
// Note that type of `rest` is Array.
console.log(rest[0]); // doctor
console.log(rest[1]); // surgeon
console.log(rest.length); // 2