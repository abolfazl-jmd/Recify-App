import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".action__box");
  _searchBox = document.querySelector(".search__box");
  _searchIcon = document.querySelector(".search__icon");
  _searchInput = document.querySelector(".search__input");

  constructor() {
    super();
    this._openSearchInput();
    this._closeSearchInput();
  }

  _openSearchInput() {
    this._searchIcon.addEventListener("click", () => {
      this._parentElement.classList.add("active");
      this._searchInput.classList.add("active");
    });
  }

  _closeSearchInput() {
    document.addEventListener("click", (e) => {
      const clicked = e.target;

      if (clicked !== this._searchIcon && clicked !== this._searchInput) {
        this._parentElement.classList.remove("active");
        this._searchInput.classList.remove("active");
      }
    });
  }
}

export default new SearchView();
