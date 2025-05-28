const $header = document.querySelector("[data-header]");
const $logoImg = document.getElementById("logo-img");
window.addEventListener("scroll", () => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  $logoImg.src =
    window.scrollY > 50 ? "../../../bakery-color.png" : "../../../logo.png";
});
