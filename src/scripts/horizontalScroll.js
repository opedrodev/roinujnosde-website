document.addEventListener("DOMContentLoaded", function (event) {
  const scrollContainer = document.querySelector(".projects-section__slider");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
});
