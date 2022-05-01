// grabbing effect
const slider = document.querySelector(".diets__categories");
let isDown = false;
let startX;
let scrollLeft;

// start dragging
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  // add class
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// exiting dragging
slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  // remove class
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

// dragging function
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();

  // when moving
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // the time to move
  slider.scrollLeft = scrollLeft - walk;
});

// pagination btn effects
const allPages = document.querySelector(".pages");

allPages.addEventListener("click", (e) => {
  const clickedPage = e.target.closest(".page");

  console.log(clickedPage, clickedPage.offsetLeft, e.pageX);
});

// show search input
const searchBtn = document.querySelector(".search__box");
const searchInput = document.querySelector(".search__input__wrapper");
const closeSearchBtn = document.querySelector(".close__icon");

searchBtn.addEventListener("click", () => {
  searchInput.classList.add("searchActive");
});

closeSearchBtn.addEventListener("click", () => {
  searchInput.classList.remove("searchActive");
});
