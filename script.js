"strict mode";

const menuBtn = document.querySelector(".menu");
const menuBar = document.querySelector(".menuBar");
const navLists = document.querySelector(".nav-lists");
// const menuPics = document.querySelector(".menu-pics");
const menuBarClose = document.querySelector(".menuBar-close");

menuBtn.addEventListener("click", function () {
  // console.log(navLists.classList);
  navLists.classList.toggle("translate");
  menuBarClose.classList.toggle("menu-none");
  menuBar.classList.toggle("menu-none");
});

const Jsdata = JSON.parse(data.json);
console.log(data);
