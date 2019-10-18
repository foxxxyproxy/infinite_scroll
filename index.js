import { loadMore } from "./data.js";

let page = -1;
const elementToObserve = document.querySelector("#list");
const sentinel = document.querySelector("#sentinel");

const showNextPage = () => {
  page++;
  loadMore(page).then(result => {
    elementToObserve.insertAdjacentHTML("beforeend", result);
  });
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    showNextPage();
  }
});
observer.observe(sentinel);
