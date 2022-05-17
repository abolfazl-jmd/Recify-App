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
const labels = [
  "8 to 12",
  "13 to 16",
  "16 to 18",
  "18 to 20",
  "20 to 22",
  "22 to 24",
];

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
      data: [12, 10, 5, 2, 20, 30],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    title: {
      display: true,
      text: "Active Hours",
    },
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

const myChart = new Chart(document.getElementById("queriesChart"), config);

// second one
const priceLabels = [
  "11 to 13",
  "13 to 15",
  "15 to 17",
  "17 to 18",
  "19 to 21",
  "21 to 23",
];

const priceData = {
  labels: priceLabels,
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
      data: [12, 10, 5, 2, 20, 30],
    },
  ],
};

const priceConfig = {
  type: "doughnut",
  data: priceData,
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

const priceChart = new Chart(
  document.getElementById("priceChart"),
  priceConfig
);
