console.log("jalase 9");

let students = ["ali", "mahdi", "hossein", "rose", "jack", "john"];
let colors = ["red", "green", "purple", "orange", "black", "brown", "yellow"];
let numbers = [1, 13, 2, 19, 20, 90, 60, 40, 145, 25, 36, 25, 32, 37, 29];

let newStudents = filter(students, (name) => name[1] === "o");
console.log("newStudents is :", newStudents);

// callback functions
// تابعی که به عنوان آرگومان به تابع دیگر فرستاده شود

// function show(callback){
//  callback()
// }

function filter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

let filteredArray1 = filter([12, 13, 45, 22, 10, 14], (number) => number < 20);
let filteredArray2 = filter(numbers, (number) => number % 5 === 0);

console.log("filtered array1 is :", filteredArray1);
console.log("filtered array2 is :", filteredArray2);

// array methods
// sort and forEach

numbers.sort((a, b) => b - a);

console.log("sorted numbers is :", numbers);

students.sort((a, b) => a.length - b.length);
console.log("sorted students is :", students);

colors.forEach((color, index) => console.log(`value is ${color} and index is ${index}`));

// objects
// تولید اشیاء
let car = new Object();

car.speed = 200;
car.color = "blue";
car.size = "suv";
car.model = 2015;
car.owners = ["ali", "hasan", "mahdi"];
car.speedUp = function () {
  console.log("speed is going up");
};
car.speedUp();
car.model = 2013;

car.owners.push([12, 13]);
console.log(car);

let person = new Object();

person.name = "mahdi";
person["first-age"] = 12;
console.log(person);
