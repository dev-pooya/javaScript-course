//
console.log("hello world!");

// variables
let message = "hello from js";
const age = 12;
console.log(message);
console.log(age);

// identifiers
// فقط حروفات و اعداد و $ _ مجاز میباشد
// اعداد نباید در اول کلمه ها باشد
// از کلمات کلیدی خود جاوا اسکریپت نمیتوان استفاده کرد

// let age$12 =  20;  => مجاز
// let 12age =  20;  => غیر مجاز

// primitive data types  انواع داده اولیه
//number
const pi = 3.14;
const height = 18;

// strings (text)
let width = "18";
const msg = "my message";

//boolean
let yes = true;
let no = false;

// undefined  تعریف نشده
let empty;
empty = undefined;

// null   تهی
let person = null;

//  + - * / ٪ **

console.log(25 + 12);
// باقیمانده تقسیم
let result = 12 % 5;
console.log(result);

// توان
result = 2 ** 4;
console.log(result);

// تقسیم
result = 1 / 3;
console.log(result);
