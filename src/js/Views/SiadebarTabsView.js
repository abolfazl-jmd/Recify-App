import View from "./View.js";

class SidebarTabsView extends View {
  _parentElement = document.querySelector(".sidebar");
  _allSections = document.querySelectorAll(".sections");

  constructor() {
    super();
    this._switchTabs();
  }

  _switchTabs() {
    this._parentElement.addEventListener("click", (e) => {
      const clicked = e.target.closest(".nav__item");

      if (!clicked) return;

      const id = clicked.dataset.value;

      this._allSections.forEach((section) => {
        section.classList.add("hidden");

        if (id === section.dataset.value) {
          section.classList.remove("hidden");
        }
      });
    });
  }
}

export default new SidebarTabsView();
