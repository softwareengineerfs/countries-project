const elDarkModeButton=document.querySelector(".site-header-theme-toggler");
elDarkModeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode")
});