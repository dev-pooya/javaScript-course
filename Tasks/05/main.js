console.log("task 5");

const view = document.querySelector(".view img");
const thumbnails = document.querySelector(".thumbnails");

thumbnails.addEventListener("click", (event) => {
  for (child of thumbnails.children) {
    child.classList.remove("active");
  }

  view.src = event.target.src;
  event.target.classList.add("active");
});
