const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const calc = document.querySelector(".calc");
const close = document.querySelector(".close");
const next = document.querySelector(".next");
toggle.addEventListener("click", () => {
  body.classList.toggle("openHamb");
})
calc.addEventListener("click", () => {
  body.classList.add("openModal");
})
close.addEventListener("click", () => {
  body.classList.remove("openModal");
})
next.addEventListener("click", () => {
  const first = document.querySelector(".field:nth-of-type(1)")
  const second = document.querySelector(".field:nth-of-type(2)");
  const third = document.querySelector(".field:nth-of-type(3)");
  const step = document.querySelector(".step");
  first.setAttribute("style", "display:none");
  step.textContent = "Шаг 2 из 3";
  if (second.hasAttribute("style", "display:block")) {
    third.setAttribute("style", "display:block");
    second.setAttribute("style", "display:none");
    step.textContent = "Шаг 3 из 3";
    next.setAttribute("style", "visibility:hidden")
  } else {
    second.setAttribute("style", "display:block");
  }
})