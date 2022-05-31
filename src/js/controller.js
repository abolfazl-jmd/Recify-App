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

// search bar appear func
const searchIcon = document.querySelector(".search__icon");
const actionBox = document.querySelector(".action__box");
const searchInput = document.querySelector(".search__input");

searchIcon.addEventListener("click", () => {
  actionBox.classList.add("active");
  searchInput.classList.add("active");
});

document.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked !== searchIcon && clicked !== searchInput) {
    actionBox.classList.remove("active");
    searchInput.classList.remove("active");
  }
});

// switch sections
const allSections = document.querySelectorAll(".sections");
const sideBar = document.querySelector(".sidebar");

sideBar.addEventListener("click", (e) => {
  const clicked = e.target.closest(".nav__item");

  if (!clicked) return;

  const id = clicked.dataset.value;
  console.log(clicked, id);

  allSections.forEach((section) => {
    section.classList.add("hidden");

    if (id === section.dataset.value) {
      section.classList.remove("hidden");
    }
  });
});

// cahrts js

const labels = ["Pizza", "Salad", "Pasta", "Soup", "Fish", "Hamburger"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
      borderColor: "rgba(255, 255, 255, 0)",
      data: [5, 7, 15, 2, 4, 17],
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    animations: {
      tension: {
        duration: 5000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  },
};

const priceChart = new Chart(document.getElementById("priceChart"), config);

// FIRST LOADING ANIMATION DISAPPEARING FUNC
const mainLoader = document.querySelector(".main__loader");

const removerLoader = () => {
  setTimeout(() => {
    mainLoader.classList.add("disappear");
  }, 3000);
};

removerLoader();

const recipe = document.querySelector(".recipe");

recipe.addEventListener("click", () => {
  window.location.href = "recipe.html";
});
