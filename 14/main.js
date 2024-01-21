console.log("jalase 14");

const list = document.querySelector(".list");

let newLi = document.createElement("li");
newLi.textContent = "new item";

const li3 = document.querySelector(".item-3");
// list.appendChild(newLi);

// insertBefore(element, position)
list.insertBefore(newLi, list.firstElementChild);

newLi.classList.add("bg-green");

newLi.classList.add("paddingg");


// removechild ====> remove element from parent 
const removed = list.removeChild(newLi);

list.appendChild(removed);

li3.innerHTML = "<a href='google.com'>go to google</a>";
newLi.innerHTML = "its new text";

// document.head.innerHTML = "<title>new title</title>";

// style
// document.head.innerHTML = `<style> .item-3 a{color: red; font-size: 30px;} </style>`;
li3.style.color = "green";
li3.style.fontSize = "30px";
li3.classList.add("padding");



const styles = getComputedStyle(newLi);
console.log(styles.getPropertyValue("color"));
console.log(styles.getPropertyValue("padding"));
console.log(styles.getPropertyValue("width"));

// events
// eventListener  enventHandler
const text = document.querySelector("#text");
const btn = document.querySelector("#btn");

// first way 
btn.addEventListener("click", () => {
  text.classList.toggle("hide");
});

const btn2 = document.querySelector("#btn-2");
 // second way
btn2.onclick = function () {
  document.body.style.backgroundColor = "pink";
};
