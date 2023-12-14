console.log("jalase 10");

// create object literal way
let user = {
  name: "max",
  age: 12,
  show: function () {
    console.log("my name is max");
  },
};

// array of object
// آرایه ای از اشیاء
let students = [
  {
    firstname: "ali",
    age: 23,
    lastname: "hasani",
    verified: true,
    address: {
      city: "maku",
      postCode: 525236,
      street: "bolvar",
    },
    courses: ["html", "css", "math"],
  },
  {
    firstname: "mahdi",
    age: 21,
    lastname: "moradi",
    verified: false,
    address: {
      city: "khoy",
      postCode: 525236,
      street: "12",
    },
    courses: ["js", "css", "math"],
  },
];

// this keyword
// به خود ابجکت اشاره میکند
let person = {
  firstname: "ali",
  lastname: "jalali",
  age: 33,
  verified: true,

  address: {
    city: "maku",
    postCode: 525236,
    street: "bolvar",
    showPostCode: function () {
      console.log(this.postCode);
    },
  },
  changeName: function (newName) {
    this.firstname = newName;
  },
};

person.changeName("hamid");

person.car = "peykan";
person.parents = {
  dad: "ali",
  mom: "rose",
};

// for in  حلقه

for (let key in person) {
  console.log(person[key]);
}
// عملگر in برای چک کردن وجود یک ویژگی با متد در اشیاء
// if (property in object) {

// }
if ("firstname" in person) {
  console.log("is here");
}

// ذخیره سازی ابجکت ها به صورت آدرس ارجاع میباشد
let object1 = {
  x: 10,
  y: 20,
};
// کپی کردن اشیاء
let object2 = { ...object1 };

let objec3 = Object.assign({}, object1);
object2.x = 30;
console.log(object1);
console.log(object2);

// تابع سازنده
// cunstructor function
function Student(name, age, city) {
  // ابجکت تهی ایجاد میکند
  this.name = name;
  this.age = age;
  this.city = city;
  // ابجکت تهی را برمیگرداند
}

let student1 = new Student("hasan", 21, "maku");

let student2 = new Student("ali", 18, "khoy");
console.log(student1);
console.log(student2);

// instanceof
console.log(student1 instanceof Student);

// Math  برای عملگرهای ریاضی

console.log(Math.cbrt(27));
console.log(Math.abs(-27.2));
console.log(Math.floor(-12.5));
console.log(Math.ceil(12.5));
console.log(Math.random());
console.log(Math.pow(5, 12));
console.log(Math.min(5, 12, 15));
console.log(Math.sin(Math.PI / 2));
console.log(Math.trunc(12.9));
console.log("----------------------");

// تولید عدد تصادفی
function getRandomNumber(n) {
  let number = Math.random() * 10 ** n;
  return Math.floor(number);
}
console.log(getRandomNumber(4));
