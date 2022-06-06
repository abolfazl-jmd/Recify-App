import View from "./View.js";

class LoadingView extends View {
  _parentElement = document.querySelector(".main__loader");

  constructor() {
    super();
    this._removeLoader();
  }

  _generateMarkup() {
    return `
        <div class="main__loader__bars">
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
          <span class="main__loader--bars"></span>
        </div>
      `;
  }

  _removeLoader() {
    setTimeout(() => {
      this._parentElement.classList.add("disappear");
    }, 3000);
  }
}

export default new LoadingView();
