// ایجاد توابع
// 1 declaration
// 2 expression

function showInfo(firstName) {
  // body of function

  console.log("my name is " + firstName);
}

showInfo("ali");
showInfo("mehdi");

// 2 function expression , anonymous functions

let myFunc = function () {
  console.log("this is myFunc");
};
myFunc();

console.log("-------------");

// input , parameters and arguments

function sum(a, b, c) {
  let result = a + b + c;
  console.log(result);
}

sum(12, 13, 16);

function mean(n1, n2, n3, n4, n5) {
  let total = n1 + n2 + n3 + n4 + n5;
  console.log(total);
  let avrage = total / 5;
  console.log(avrage);
}
mean(12, "15", 18);
