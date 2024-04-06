console.log("jalase 18");
const myFrom = document.querySelector("#register");
console.log(myFrom.firstname.value);
// event blur focus

myFrom.firstname.addEventListener("blur", (event) => {
  // get value
  if (event.target.value.length <= 3) {
    console.log(event.target.value);
    event.target.nextElementSibling.textContent = "your name is too short";
  }
});
let ageLimit = 18;
myFrom.age.addEventListener("blur", (event) => {
  // get value

  if (parseInt(event.target.value) <= ageLimit) {
    event.target.nextElementSibling.textContent = "your are not old enough";
  }
});

myFrom.city.checked = true;

myFrom.firstname.disabled = false;

myFrom.age.focus();
// event change
myFrom.mashad.addEventListener("change", (event) => {
  if (myFrom.mashad.checked) {
    document.querySelector("#c").disabled = false;
  } else {
    document.querySelector("#c").disabled = true;
  }
});

myFrom.school.addEventListener("change", (event) => {
  if (myFrom.school.value === "dabestan") {
    ageLimit = 7;
  } else {
    ageLimit = 18;
  }
});

myFrom.addEventListener("submit", (e) => e.preventDefault());
// bom

console.log("hello");

function show() {
  console.log("show me data");
}

// alert confirm prompt
const btn1 = document.querySelector("#b1");
const btn2 = document.querySelector("#b2");
const btn3 = document.querySelector("#b3");
const btn4 = document.querySelector("#b4");

btn1.addEventListener("click", (even) => {
  alert("this is alert for you");
});
btn2.addEventListener("click", (even) => {
  let result = window.confirm("are u sure?");
});
btn3.addEventListener("click", (even) => {
  let result = prompt("what is your name");
  console.log(result);
});

console.log(window.innerWidth);
console.log(window.innerHeight);

btn4.addEventListener("click", (even) => {
  window.location.href = "https://google.com";
});
