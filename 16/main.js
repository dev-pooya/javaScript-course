console.log("jalase 16");
const main = document.querySelector(".main");

document.body.addEventListener("click", bodyHandler, false);
document.body.addEventListener("click", bodyHandler, true);

function bodyHandler(event) {
  console.log(event);
  main.innerHTML += `body handler happend -  ${event.eventPhase} <br /> `;
}

main.addEventListener("click", divHandler);

function divHandler(event) {
  main.innerHTML += `div handler happend -  ${event.eventPhase} <br /> `;
}
