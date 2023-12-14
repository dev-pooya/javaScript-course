console.log("جلسه ۶");

// for loop  حلقه

//   for (init ; condition ; afterthouth){
//      statement
//   }

for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("-----------------------------------------------------");

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i);
  }
  console.log("round ended");
}

console.log("-----------------------------------------------------");

// جدول ضرب
let result = "";

for (let n = 1; n <= 10; n++) {
  for (let m = 1; m <= 10; m++) {
    result = result + m * n + "     ";
  }

  result = result + "\n";
}

console.log(result);

console.log("-----------------------------------------------------");

// ارایه ها و حلقه ها

let students = ["ali", "mohammad", "hossein", "david", "ben", "vali"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("-----------------------------------------------------");

let studentScores = [12, 15, 19, 17, "18", 20, 8, 9];
let newstudentScores = [];

for (let j = 0; j < studentScores.length; j++) {
  if (typeof studentScores[j] === "number") {
    if (studentScores[j] < 20) {
      newstudentScores.push(studentScores[j] + 1);
    } else {
      newstudentScores.push(studentScores[j]);
    }
  }
}

console.log("نمرات دانش آموزان :", studentScores);
console.log("نمرات افزایش یافته :", newstudentScores);

console.log("-----------------------------------------------------");

students = ["ali", "mohammad", "hossein", "david", "ben", "vali"];
let filteredStudents = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].length === 3) {
    filteredStudents.push(students[i]);
  }
}

console.log("دانش آموزان اصلی :", students);
console.log("دانش آموزان فیلتر شده :", filteredStudents);

console.log("-----------------------------------------------------");

// break شکستن کل حلقه
// continue  رفتن به اول حلقه

for (let i = 0; i < 15; i++) {
  // پنج و شش نمایش داده نمیشود

  if (i === 5 || i === 6) {
    continue;
  }
  console.log(i);
}
