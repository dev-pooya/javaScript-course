console.log("jalase 15");

const btn = document.querySelector("#btn-1");
const message = document.querySelector(".message");

btn.addEventListener("click", handler);
btn.addEventListener("dblclick", handler);
btn.addEventListener("mousedown", handler);
btn.addEventListener("mouseup", handler);

btn.addEventListener("contextmenu", (e) => {
  message.innerHTML += "right click <br />" ;
});
function handler(event) {
  message.innerHTML += ` ${event.type} <br />`
 
}



// event object

const box = document.querySelector(".box");
box.addEventListener("click", (event) => {
  box.innerHTML += `x is: ${event.screenX} <br />`;
  box.innerHTML += `y is: ${event.screenY} <br />`;
  box.innerHTML += `altKey is: ${event.altKey} <br />`;
  box.innerHTML += `ctrlKey is: ${event.ctrlKey} <br />`;
  box.innerHTML += `shiftKey is: ${event.shiftKey} <br />`;
});

// mouse evets part 2
const outer = document.querySelector(".outer-box");
// outer.addEventListener("mouseover", newHandler);
// outer.addEventListener("mouseout", newHandler);
outer.addEventListener("mouseenter", newHandler);
outer.addEventListener("mouseleave", newHandler);
outer.addEventListener("mousemove", newHandler);

function newHandler(event) {
  console.log(event.type);
}

let input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  console.log('event type is : ', event.type);
  console.log('code is : ', event.code);
});

input.addEventListener("keyup", (event) => {
  console.log(event.code);

  if (event.altKey && event.code === "KeyW") {
    event.target.style.backgroundColor = "#00000040";
  }
});

input.addEventListener("keypress", (event) => {
  console.log('event type is : ', event.type);
  console.log('key is is : ', event.key);
});
