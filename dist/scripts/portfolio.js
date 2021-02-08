"use strict"

const card = document.querySelectorAll(".card");
const interval;
card.forEach((cardItem) => {
  cardItem.addEventListener("mouseenter", function() {
    console.log("enter")
    let i = 1;
    interval = setInterval(() => {
    if (i <= card.length) {
      cardItem.style.backgroundImage = `url("/public/portfolio${i}.jpg")`;
      i++;
      console.log(i)
    } else {
      i = 1;
    }}, 2000);
  });
  cardItem.addEventListener("mouseleave", () => {
    cardItem.removeAttribute("style");
    clearInterval(interval);
    console.log("leave")
  })
})