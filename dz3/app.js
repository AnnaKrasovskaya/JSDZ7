const buttonBurger = document.querySelector(".burger");
const buttonClose = document.querySelector(".close");
const inputSearch = document.querySelector(".search");
const blockMenu = document.querySelector(".menu");
const input = document.querySelector("input");

buttonBurger.addEventListener("click", (event) => {
  blockMenu.style.display = "block";
  buttonBurger.style.display = "none";
  buttonClose.style.display = "block";
});
buttonClose.addEventListener("click", (event) => {
  blockMenu.style.display = "none";
  buttonBurger.style.display = "block";
  buttonClose.style.display = "none";
  input.style.background = "rgb(236, 234, 234)";
});

inputSearch.addEventListener("click", (event) => {
  input.style.background = "white";
});
