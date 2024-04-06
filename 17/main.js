console.log("jalase 17");
const menu = document.querySelector(".menu");

const container = document.querySelector(".container");
container.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  // show menu

  menu.style.display = "block";

  menu.style.left = event.clientX - 150 + "px";
  menu.style.top = event.clientY + "px";
});

document.addEventListener("mousedown", (event) => {
  menu.style.display = "none";
});
