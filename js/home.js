// variable to keep track of slide index
let i = 0;
// variable for the array of slide elements
const slides = document.querySelectorAll(".slide");
// variable for the array of dots
const dots = document.querySelectorAll(".dot");

// function to show automatically change slides
const showSlide = () => {
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.style.backgroundColor = "#bab4a4";
  }
  slides[i].style.display = "flex";
  dots[i].style.backgroundColor = "#aca698";
  i++;
  if (i > slides.length-1) {
    i = 0;
  }
  setTimeout(function() {showSlide(i);}, 2000);
}; // end showSlide

showSlide();