const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const calc = document.querySelector(".calc");
const close = document.querySelector(".close");
toggle.addEventListener("click", () => {
  body.classList.toggle("openHamb");
})
calc.addEventListener("click", () => {
  body.classList.add("openModal");
})
close.addEventListener("click", () => {
  body.classList.remove("openModal");
})
