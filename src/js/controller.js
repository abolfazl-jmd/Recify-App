import * as model from "./model.js";
import CategoriesView from "./Views/CategoriesView.js";
import LoadingView from "./Views/LoadingView.js";
import SiadebarTabsView from "./Views/SiadebarTabsView.js";

const init = () => {
  LoadingView.renderMarkup();
};

init();

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
