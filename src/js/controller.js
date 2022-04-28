// search border
const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("focusin", (e) => {
  e.target.parentElement.classList.add("searchActive");
});

searchInput.addEventListener("focusout", (e) => {
  e.target.parentElement.classList.remove("searchActive");
});
