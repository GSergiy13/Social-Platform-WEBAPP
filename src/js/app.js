import tabs from "./modules/tabs.js";

window.addEventListener('DOMContentLoaded', function() {

  const preloader = document.querySelector('.preloader');

  window.onload = () => {
    setTimeout(() => {
      preloader.classList.add('preloader--hide')
    }, 1000)
  }

  tabs()
  let element = document.querySelector(".actions__add");

  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (window.innerWidth <= 568 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      element.style.transform = "translateY(-250%)";
    } else {
      element.style.transform = "translateY(-150%)";
    }
  });
});