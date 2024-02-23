import "./style.css";

let left = document.getElementById("left");
let right = document.getElementById("right");
let currentIndex = 0;
let elipises = document.querySelectorAll(".elipise");
let testi = document.querySelectorAll(".testi");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("modal-close");
const nav = document.getElementById("nav");

function next() {
  currentIndex = (currentIndex + 1) % elipises.length;

  setCurrentElipise();
  setCurrentTesti();
}

function prev() {
  currentIndex = (currentIndex - 1 + elipises.length) % elipises.length;
  setCurrentElipise();
  setCurrentTesti();
}

function setCurrentElipise() {
  elipises.forEach((eli, i) => {
    if (i === currentIndex) {
      eli.style.backgroundColor = "white";
      eli.style.border = " 3px solid rgb(251 146 60) ";
    } else {
      eli.style.backgroundColor = "rgb(251 146 60)";
      eli.style.border = "none";
    }
  });
}
function setCurrentTesti() {
  testi.forEach((t, i) => {
    if (i === currentIndex) {
      t.classList.add("active");
      t.style.display = "block";
    } else {
      t.classList.remove("active");
      t.style.display = "none";
    }
  });
}
function openModal() {
  setTimeout(() => {
    modal.style.display = "flex";
  }, 3000);
}
function closeModal() {
  modal.style.display = "none";
}
openModal();
window.addEventListener("scroll", () => {
  if (scrollY > 0) {
    nav.style.opacity = "0";
    nav.style.transition = "opacity 0.3s ease-in-out";
  } else {
    nav.style.opacity = "1";
    nav.style.display = "block";
  }
});
closeBtn.addEventListener("click", closeModal);
right.addEventListener("click", next);
left.addEventListener("click", prev);
