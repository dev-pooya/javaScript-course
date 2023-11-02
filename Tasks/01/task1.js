let students = ["ali", "mahdi", "حسین", [12, "hassan", 18, "167"]];
console.log(students[2]);
console.log(Number(students[3][3]));

let message = "دوره آموزش برنامه نویسی مقدماتی";
let target = message.indexOf("مقدماتی");
console.log(message.substring(0, target) + "جاوااسکریپت");

studentsCount = 10;

if (studentsCount % 5 === 0 && studentsCount > 5) {
  console.log("group 5");
} else if (studentsCount % 4 === 0 && studentsCount !== 4) {
  console.log("group 4");
} else if (studentsCount % 3 === 0) {
  console.log("group 3");
} else if (studentsCount % 2 === 0) {
  console.log("group 2");
} else {
  console.log("invalid");
}
