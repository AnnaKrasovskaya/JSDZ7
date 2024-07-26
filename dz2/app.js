const menu = document.querySelector(".left_menu");
const buttonClose = document.querySelector(".close");
const burgerButton = document.querySelector(".burger");
const mainMenu = document.querySelector(".main");

buttonClose.addEventListener("click", (event) => {
  menu.classList.add("disabled");
  burgerButton.style.display = "block";
});
burgerButton.addEventListener("click", (event) => {
  menu.classList.remove("disabled");
  burgerButton.style.display = "none";
});
