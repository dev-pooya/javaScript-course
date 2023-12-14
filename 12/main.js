console.log("jalase 12");
let myDate = new Date();

 console.log(myDate);

console.log(myDate.getDay());
console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getUTCHours());
console.log(myDate.getUTCMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());

console.log(myDate.setFullYear(2020));
console.log(myDate.getFullYear());

console.log(Date.now());
console.log(Date.parse("2021-02-15"));
console.log(Date.UTC(2012, 2, 11, 12));

myDate = new Date();
console.log(myDate.toDateString());

let options = {
  year: "numeric",
  day: "2-digit",
  month: "long",
  weekday: "long",
};
console.log(myDate.toLocaleDateString("fa-IR", options));

console.log('-------------------------DOM--------------------------')

// select dom elements

console.log(document);

// let text = document.getElementById("heading");
// console.log(text.nodeName);
// console.log(text.nodeType);

// let paragraphs = document.getElementsByTagName("p");

// paragraphs = document.getElementsByClassName("p2");
// console.log(paragraphs);


//  queryselector  ==> css selector

let heading = document.querySelector("#heading");
console.log('heading elements is : ',heading);

let paragraphs = document.querySelectorAll("p.p1");
console.log('paragraph elements nideList : ', paragraphs);

let container = document.querySelector(".container");

// search inside container element
console.log(container.querySelector("li").nodeName);


console.log(document.body);
console.log(document.head);
console.log(document.forms);
console.log(document.images);


