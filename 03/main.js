console.log("جلسه ۳");

let message = "welcome to javascript";

// تولید زیر رشته
// رشته اصلی را تغییر نمیدهد و یک رشته جدید تولید میکند
let string1 = message.substring(12);
console.log(string1);

// convert data type
// تبدیل انواع داده

// to string
let number1 = 56;
// روش اول
let number1String =  String(number1);  // => '56'
// روش دوم
number1String =  number1.toString(); // => '56'

console.log(number1String);

console.log(String(null)); // => 'null'

// تبدیل به عدد
// to number
let result = "26.6";
result = Number(result);
console.log(result);

console.log(parseFloat(result));
console.log(parseInt(result));

// convert to boolean
// Boolean()
console.log(Boolean(0));             // => false
console.log(Boolean(""));            // => false
console.log(Boolean(null));          // => false
console.log(Boolean(NaN));           // => false
console.log(Boolean(undefined));     // => false

// auto convert 
//  تبدیل اتوماتیک توسط جاوا اسکریپت
console.log(12 * "12.2");
console.log(12 * false);
console.log(12 * "a12");

// logical operator
// not operator !
// علامت تعجب ارزش منطقی را معکوس میکند
let yes = true;
let no = !yes;

// logical and  &&
// اگر هر دو طرف true باشد مقدار 
true && true; // ==> true


// logical or  ||
// اگر  یکی از طرفین true باشد  
false || false; // ==> false
true || false   // ==> true


// compare operator
// عملگر مقایسه
// == ===  !==  !=

let num1 = 12,
  num2 = 19,
  num3 = 18,
  num4 = 13;

console.log(num1 === num4 || num3 === num2);

// تقدم عملگر ها 
// عملگر && اولویت بیشتر دارد

true || (false && true);

console.log(13 <= "13");


// برای جک کردن مقدار NaN از متد زیر استفاده میکنیم
// Number.isNaN()
console.log(NaN === NaN); // false 
let myNan = 12; 
console.log(Number.isNaN(myNan)); // false

