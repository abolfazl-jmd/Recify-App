import View from "./View.js";

class CategoriesView extends View {
  _parentElement = document.querySelector(".diets__categories");
  _isDown = false;
  _startX;
  _scrollLeft;

  constructor() {
    super();
    this._startDragging();
    this._exitDragWhenMouseLeave();
    this._exitDragWhenMouseUp();
    this._drag();
  }

  _startDragging() {
    this._parentElement.addEventListener("mousedown", function (e) {
      this._isDown = true;
      // add class
      this.classList.add("active");
      this._startX = e.pageX - this.offsetLeft;
      this._scrollLeft = this.scrollLeft;
    });
  }

  _exitDragWhenMouseUp() {
    this._parentElement.addEventListener("mouseup", (e) => {
      this._isDown = false;
      this._parentElement.classList.remove("active");
    });
  }

  _exitDragWhenMouseLeave() {
    this._parentElement.addEventListener("mouseleave", () => {
      this._isDown = false;
      // remove class
      this._parentElement.classList.remove("active");
    });
  }

  _drag() {
    this._parentElement.addEventListener("mousemove", (e) => {
      if (this._isDown) return;

      e.preventDefault();

      // when moving
      const x = e.pageX - this._parentElement.offsetLeft;
      const walk = (x - this._parentElement._startX) * 3; // the time to move
      this._parentElement.scrollLeft = this._parentElement._scrollLeft - walk;
    });
  }
}

export default new CategoriesView();
