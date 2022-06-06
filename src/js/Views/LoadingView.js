import View from "./View.js";

class LoadingView extends View {
  _parentElement = document.querySelector(".main__loader");

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
}

export default new LoadingView();
