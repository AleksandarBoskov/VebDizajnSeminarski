const hamburger = document.querySelector(".hamburger");

const meni = document.querySelector(".meni");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("aktivno");
  meni.classList.toggle("aktivno");
});