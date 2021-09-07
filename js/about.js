// variable for the about-para class that holds the about-sq articles & about-hover divs
const aboutPara = document.querySelector(".about-para");

// event listener for clicking the about-hover divs inside aboutPara
aboutPara.addEventListener("click", function(e) {
  if (e.target.classList.contains("about-hover")) {
    const id = e.target.id;
    console.log(id);
  }
}); // end event listener