import View from "./View.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination__wrapper");

  _generateMarkup() {
    return `
       <div data-value="" class="previous__page">
            <i class="fa-solid fa-angle-left icons"></i>
        </div>
        <div class="pages">
            <span data-value="1" class="page pageActive">1</span>
            <span data-value="2" class="page">2</span>
            <span data-value="3" class="page">3</span>
            <span data-value="4" class="page">4</span>
            <span data-value="5" class="page">5</span>
            <span data-value="6" class="page">6</span>
            <span data-value="7" class="page">7</span>
            <span data-value="8" class="page">8</span>
            <span data-value="9" class="page">9</span>
            <span data-value="10" class="page">10</span>
        </div>

        <div data-value="" class="next__page">
            <i class="fa-solid fa-angle-right icons"></i>
        </div>
    `;
  }
}

export default new PaginationView();
