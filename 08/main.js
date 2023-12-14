console.log("jalase 8");

function mean(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  let avrage = total / numbers.length;

  return avrage;
}

function operation(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

// فراخوانی توابع
operation("sum", 12, 13, 14, 145, 12, 12, 13);
mean([2, 5, 8, 9, 12, 18]);

let scores = [32, 125, 12, 18];
let myNumber = mean(scores);
console.log(myNumber);

function power(a, b = 4) {
  return a ** b;
}

console.log(power(2, 12));

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven("12"));

// identifiers scopes
// حوزه شناسه ها

let a = 12;
function example() {
  let a = 13;

  if (true) {
    a = 18;
    console.log("inner a is " + a);
  }
}

example();
console.log("outer a is " + a);

// hoisting (function declare)

example2();
// declare
function example2() {
  console.log("example 2");
}

//  hoisting is not for function expression

const myFunc = function () {
  console.log("my func");
};
myFunc();

// arrow function , function expression

// ()=>{
//     body
//   }

const myFunc2 = (a) => {
  return a ** 2;
};
// const myFunc2 = (a) => a ** 2;

let result = myFunc2(3);
console.log(result);
