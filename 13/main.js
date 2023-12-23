console.log("jalase 13");

// dom tranversing
//حرکت در دخت دام
const list = document.querySelector("ul");
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.lastElementChild);
// console.log(list.previousSibling);
// console.log(list.nextElementSibling);
// console.log(list.firstElementChild.parentNode);

// attribute 
const main = document.querySelector(".main");

let result = main.firstElementChild.getAttribute("id");
console.log(result);
main.firstElementChild.setAttribute("class", "bg-green");
main.firstElementChild.removeAttribute("class");

// روش بعدی برای خصوصیات 

main.id = "main-15";

// dataset
console.log(main.dataset.school);

// classList
console.log(main.classList);
//add
main.classList.add("class-5");
// remove
main.classList.remove("bg-red");
// toggle
main.classList.toggle("class-6");
// replace
main.classList.replace("class-5", "class-10");
// contains
console.log(main.classList.contains("class-8"));

// create element
const li6 = document.createElement("li");
const text = document.createTextNode("last item in list ");

li6.appendChild(text);

main.lastElementChild.appendChild(li6);

// textContent

li6.textContent = "edited text content";

const ul = document.querySelector("ul");


// factory fuction

function makeElement(type, text, parent, classList) {
  const elm = document.createElement(type);
  elm.textContent = text;
  if (classList.length) {
    elm.className = classList.join(" ");
  }

  parent.appendChild(elm);
}

makeElement("li", "item 8", ul, ["class1", "class2", "class3"]);
makeElement("li", "item 9", ul, ["class1", "class2", "class3"]);
makeElement("li", "item 10", ul, ["class1", "class2", "class3"]);

//  افزودن لیست میوه ها به درخت دام
const fruits = ["apple", "orange", "banana", "peach", "pineapple"];


// fruist.forEach((fruit) => {
//   makeElement("li", fruit, ul, []);
// });

for (let i = 0; i < fruits.length; i++) {
  makeElement("li", fruits[i], ul, ["clas1"]);
}
