// mobile navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.75
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// when scrolling, execute

var navbar = document.getElementById("navbar");

// get offset position of the nav
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
