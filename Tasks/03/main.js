console.log("task 3");

// لیست دانش آموزان
const students = [
  {
    fullname: "monica jones",
    age: 18,
    classes: ["js", "python"],
    address: {
      city: "maku",
      street: "emam",
      code: 334,
    },
  },
  {
    fullname: "adam smith",
    age: 17,
    classes: [],
    address: {
      city: "maku",
      street: "emam",
      code: 136,
    },
  },
  {
    fullname: "mike martin",
    age: 19,
    classes: ["html", "js"],
    address: {
      city: "khoy",
      street: "emam",
      code: 220,
    },
  },
  {
    fullname: "mason smith",
    age: 18,
    classes: ["css", "python", "php"],
    address: {
      city: "maku",
      street: "bolvar",
      code: 130,
    },
  },
  {
    fullname: "ben smith",
    age: 22,
    classes: ["html"],
    address: {
      city: "yazd",
      street: "baharan",
      code: 425,
    },
  },
  {
    fullname: "jack parker",
    age: 24,
    classes: ["python"],
    address: {
      city: "tehran",
      street: "hemat",
      code: 635,
    },
  },
  {
    fullname: "john martin",
    age: 20,
    classes: ["js", "css"],
    address: {
      city: "yazd",
      street: "golha",
      code: 187,
    },
  },
  {
    fullname: "alex jones",
    age: 23,
    classes: ["html", "css"],
    address: {
      city: "tabriz",
      street: "valiasr",
      code: 236,
    },
  },
  {
    fullname: "sara foster",
    age: 19,
    classes: ["css"],
    address: {
      city: "tehran",
      street: "emam",
      code: 124,
    },
  },

  {
    fullname: "tim wilson",
    age: 25,
    classes: ["html", "js", "css"],
    address: {
      city: "bane",
      street: "emam",
      code: 136,
    },
  },
];

// SORTING



// 1
students.sort(compare);
function compare(value1, value2) {
  return value2.age - value1.age;
}

// 2
students.sort(function (value1, value2) {
  return value1.classes.length - value2.classes.length;
});

// 3
students.sort((student1, student2) => {
  let lastname1 = student1.fullname.slice(student1.fullname.indexOf(" "));
  let lastname2 = student2.fullname.slice(student2.fullname.indexOf(" "));

  if(lastname1 > lastname2){
    return 1
  }else if(lastname1 < lastname2){
    return -1
  }else{
    if(student1.fullname > student2.fullname){
      return 1 
    }else{
      return -1
    }
  }
});

console.log('sorted students:', students);

// FILTERING

// برای فیلتر کردن از تابع زیر استفاده کنید که در جلسه ۹ آموزش داده شد
// تابع را از حالت کامنت خارج کنید  Ctrl + /

function filter(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 4

let filtered = filter(
  students,
  (student) => student.age < 21
);
console.log(filtered);
// 5
 filtered = filter(
  students,
  (student) => student.classes.includes('html')
);
console.log(filtered);
// 6
 filtered = filter(
  students,
  (student) => student.address.city === 'maku' && student.classes.length >= 2
);
console.log(filtered);


