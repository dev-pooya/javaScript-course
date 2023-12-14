console.log("jalase 11");

let myDate = new Date();

console.log(myDate.toString());

myDate = new Date("2020-07-21 10:11:20");
console.log(myDate.toString());

myDate = new Date(2001, 5, 35, 12, 12, 1, 220);
console.log(myDate.toString());

// timestamp
// origin 1970/01/01 00:00:00:00

myDate = new Date(1601031170610);
console.log(myDate.toString());
