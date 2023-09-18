let map = new Map();
map.set('10', 'str'); // string key
map.set(10, 'num'); // numeric key
map.set(false, 'bool'); //  boolean key
 
//Map can save the type, and a regular object can convert keys to a string,
//so these two values are different:
console.log(map.get(10)); // 'num'
console.log(map.get('10')); // 'str'
console.log(map.size); // 3