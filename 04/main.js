console.log("جلسه 4");

// مقایسه به صورت متنی و ترتیب حروفات
console.log("111" < "90");

// if statement
// ساختار شرطی

// if (شرط){
//  کدها 
//  }

let grade = 10;

if (grade >= 10) {
  if (grade === 20) {
    console.log("you score full grade");
  }
  console.log("you pass exam");
}

if (grade >= 0 && grade <= 20) {
  if (grade >= 10) {
    if (grade === 20) {
      console.log("you score full grade");
    }
    console.log("you pass exam");
  } else {
    console.log("you couldn't pass exam");
  }
} else {
  console.log("invalid number");
}



if (grade === 18) {
  console.log("score is 18");
} else {
  console.log("score is other");
}

let user = "mehdi";
if (user) {
  console.log("user  exist");
}

// کاملترین شکل ساختار شرطی
// اگر هر کدام از شرط ها برقرار باشد از ساختار خارج میشود
// if(condition1){

// }else if(condition2){

// }else if(condition2){

// }else if(condition2){

// }else{

//  }



grade = 12;
if (grade === 20) {
  console.log("A++");
} else if (grade > 15 && grade < 20) {
  console.log("A");
} else if (grade > 10 && grade <= 15) {
  console.log("b");
} else if (grade > 5 && grade <= 10) {
  console.log("c");
} else if (grade >= 0 && grade <= 5) {
  console.log("d");
} else {
  console.log("invalid grade");
}

// ternary
// condition ? state true : state false

grade === 20 ? console.log("a++") : console.log("not pass");

// اگر نمره معتبر باشد  مقدار نمره را
// در متغیر جدید ذخیره میکند در غیر اینصورت مقدار صفر را ذخیره میکند

let validGrade = grade >= 0 && grade <= 20 ? grade : 0;
console.log(validGrade);

// array
// آرایه ها برای ذخیره گروهی از داده های دیگر استفاده میشود

let grades = [12, "hello", 14, true, 9];
console.log(grades);
console.log(grades.length);
console.log(grades[1]);
console.log(grades[7]);
grades[1] = "well";
grades[6] = "hello ";
console.log(grades);
console.log(grades.length);
grades.length = 0;
console.log(grades);


// array method
grades.push("hello from class");
grades.unshift("15");
console.log(grades);
let data = [12, true, [2, "hello", [1, 9]], "well"];
console.log(data);
let array1 = ["hello", 1];
let array2 = ["hello", "1"];
console.log(array1[1] === array2[1]);
array1[0] === array2[0];
