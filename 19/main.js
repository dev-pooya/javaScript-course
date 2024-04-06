console.log(window.outerHeight);
let timer;
let angle = 0;
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const box = document.querySelector(".box");

const message = document.querySelector("#message");

function callback1() {
  box.setAttribute("style", `transform: rotate(30deg);`);
}
//

function callback2() {
  angle += 1;
  box.setAttribute("style", `transform: rotate(${angle}deg);`);
}
//

function callback3() {
  angle += 1;
  box.setAttribute("style", `transform: rotate(${angle}deg);`);
  timer = requestAnimationFrame(callback3);
}

// رویداد های دکمه ها
btn.addEventListener("click", (e) => {
  timer = setTimeout(callback1, 2000);
});
btn2.addEventListener("click", (e) => {
  clearTimeout(timer);
  clearInterval(timer);
  cancelAnimationFrame(timer);
});

btn3.addEventListener("click", (e) => {
  timer = setInterval(callback2, 30);
});

btn4.addEventListener("click", (e) => {
  timer = requestAnimationFrame(callback3);
});

// دکمه برگشت و جلو
btn5.addEventListener("click", (e) => {
  window.history.back();
});
btn6.addEventListener("click", (e) => {
  console.log(window.history.forward());
});

localStorage.setItem("id", "1243");
console.log(localStorage.getItem("id"));
