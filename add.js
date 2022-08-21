const button = document.querySelectorAll('[data-name="title"]');
const text = document.querySelectorAll(".text__1");
button.forEach(function (item) {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("text");
  });
});
