let mainNav = document.getElementById("js-menu");

let navbarToggler = document.getElementById("js-toggler");

navbarToggler.addEventListener("click", () =>
  mainNav.classList.toggle("active")
);
