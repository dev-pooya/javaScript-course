console.log("جلسه 5");
// ternary

// condition ? true state : false state
// 1 < 2 ? console.log("hello") : console.log("bye");

let fruits = ["apple", "banana"];
let bascket = fruits;
bascket[2] = "peach";
console.log(fruits);
console.log(bascket === fruits);

fruits = ["apple", "banana", "orange", "pineapple", "cherry"];
let fruits2 = ["pineapple", "cherry"];

//array methods
let lastItem = fruits.pop();
console.log(fruits.push("peach"));
console.log(fruits.shift());
console.log(fruits.unshift("lemon"));
console.log(fruits.join("--"));

// concat
// الحاق دو ارایه

let newArray = fruits2.concat(fruits);
console.log(fruits);
console.log(fruits2);
console.log(newArray);

// spread
// گستراندن آرایه ها

let newArray2 = ["water", ...fruits, "12", 16, ...fruits2, "melon"];
console.log(newArray2);

// subarray
// زیر آرایه
let myFruits = fruits.slice(0, 3);
console.log(myFruits);

// splice
myFruits = fruits.splice(1, 0, "52", 13);
console.log(fruits);
console.log(myFruits);
// reverse array
//  معکوس کرن آرایه
fruits.reverse();

// حلقه ها
// loop , while , do while ,  for
// while (condition){
// statement
//}

let n = 0;
while (n < 5) {
  console.log(n);
  n++;
}

// do {
//   console.log(n);
//   n++;
// } while (n < 3);

fruits = ["apple", "banana", "orange", "pineapple", "cherry", "21", "ali"];

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
