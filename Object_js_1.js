
// create an empty object

let obj = new Object()
console.log(typeof obj)// object

let Employee = {
                    'name' : 'Raja ravi',
                    'occupation' : 'Artist',
                    'salary' : 25000,
                    'age' : 38
                }
console.log(Employee)
Employee.name = 'Kishan Kumar'
console.log(Employee)

Employee.isPresent = true
console.log(Employee)

let site = {};
// set
site["teaches JS"] = true;
// get
console.log(site["teaches JS"]); // true
// delete
delete site["teaches JS"];
console.log(site);


function makeCar(name, model) {
    return {
      name: name,
      model: model,
    };
  }
  let car = makeCar("BMW", "M5");
  console.log(car.name); // BMW

  let obj1 = {name:'hello'}
  let obj2 = {n:'hii'}
  let obj3 = obj1+obj2;
  console.log(obj3)
  console.log(obj3.valueOf())
  console.log(obj3.toString())
