//task 2
// 1
let numbers = [
  12, 18, 25, 28, 76, 77, 89, 41, 17, 36, 60, 88, 92, 78, 72, 25, 43, 39,
];

// 1
let bowl = 0;
let index = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > bowl) {
    bowl = numbers[i];
    index = i;
  }
}
console.log(bowl);
console.log(index);

// 2

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total / numbers.length);

// 3
let result = "";
for (let i = 1; i < 8; i++) {
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

// 4
let array5 = [];
let array3 = [];
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    array5.push(i);
  } else if (i % 3 === 0) {
    array3.push(i);
  }
}
console.log([...array3, ...array5]);

// 5
let array1 = ["ali", "12", 25, 14, 12];
let array2 = ["ali", "12", 25, 14];

if (array1.length === array2.length) {
  let info = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      info = false;
    }
  }
  console.log(info);
} else {
  console.log(false);
}
