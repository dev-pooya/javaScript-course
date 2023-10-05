console.log("hello");

let myName = "mehdi"; // تولید متغییر
myName = "ali";
console.log(myName);

// data types  -- انواع داده

let num = 12.2; // number
let string1 = "12"; // string
console.log(num);
console.log(string1);

let yes = true; //boolean
let no = false;

// اگر متغییر مقدار دهی نشود و یا کلا تعریف نشده باشد
let pc = undefined;
console.log(typeof pc); // undefined

// null  تهی
let person = null;
console.log(person);

//  operators

// + * - / % **
let num1 = 12;
let num2 = 5;
let result = num1 ** num2; //  توان
result = num1 % num2; // باقیمانده

//  انواع روش برای تولید متغییر

let myStudentName = "mehdi";

let string2 = "my name  \n is \"mehdi\" \\ ' irani'";
let string3 = `my name is "${myStudentName}"  I'm student`;
console.log(string3);

let number1 = 12;

number1 += 12; //  number1 = number1 + 12
number1 *= 10; //  number1 = number1 * 10
console.log(number1);

let counter = 5;
 counter++  // counter = counter + 1
 ++counter  // counter = counter + 1

 counter--  // counter = counter -1
 --counter  // counter = counter -1
console.log(counter)

console.log(-1 / 0);  // Infinity  مقدار بینهایت
console.log("true" / 5);  // NaN (not a number)  مقدار غیر عددی


// strings آشنایی با رشته ها

let message = "wellcome!";
console.log(message);
// ایندکس ها از صفر شروع میشوند
console.log(message.charAt(1));  // نمایش کاراکتر دوم e
console.log(message[5]);  // o
console.log(message.length); // طول رشته 9
console.log(message.indexOf("z"));  // ایندکس کاراکتر 
console.log(message.lastIndexOf("l")); // جستجو از آخر
console.log(message.includes("z"));    // اگر کاراکتر در رشته وحود داشته باشد true یا false 

console.log(message.toUpperCase());  // به حروف بزرگ تبدیل میکند

let string5 = "hello";
let string6 = " world";
let string7 = string5.concat(string6) // الحاق دو رشته به یکدیگر ، چسباندن 
console.log(string7)
string7 = string5  + string6 + "!";
console.log(string7)
