// search border
const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("focusin", (e) => {
  e.target.parentElement.classList.add("searchActive");
});

searchInput.addEventListener("focusout", (e) => {
  e.target.parentElement.classList.remove("searchActive");
});

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
