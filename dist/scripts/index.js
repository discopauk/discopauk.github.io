
"use strict"
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const calc = document.querySelector(".calc");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
toggle.addEventListener("click", () => {
  body.classList.toggle("openHamb");
})
calc.addEventListener("click", () => {
  body.classList.add("openModal");
})
close.addEventListener("click", () => {
  body.classList.remove("openModal");
})
const first = document.querySelector(".field:nth-of-type(1)")
const second = document.querySelector(".field:nth-of-type(2)");
const third = document.querySelector(".field:nth-of-type(3)");
const step = document.querySelector(".step");
next.addEventListener("click", () => {
  if (second.hasAttribute("style", "display:none")) {
    second.setAttribute("style", "display:flex");
    first.setAttribute("style", "display:none");
    step.textContent = "Шаг 2 из 3";
    prev.removeAttribute("disabled", "disabled");
  } else {
    third.setAttribute("style", "display:flex");
    second.setAttribute("style", "display:none");
    step.textContent = "Шаг 3 из 3";
    next.setAttribute("disabled", "disabled");
  }
})
prev.addEventListener("click", () => {
  if (first.hasAttribute("style", "display:none")) {
    first.setAttribute("style", "display:flex");
    second.setAttribute("style", "display:none");
    step.textContent = "Шаг 1 из 3";
    prev.setAttribute("disabled", "disabled");
  } else {
    third.setAttribute("style", "display:none");
    first.setAttribute("style", "display:none");
    second.setAttribute("style", "display:flex");
    step.textContent = "Шаг 2 из 3";
    next.removeAttribute("disabled", "disabled")
  }
})