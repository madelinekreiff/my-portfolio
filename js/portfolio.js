// variable for the original project items list of images to click on
const projectItems = document.querySelector(".project-items");

// event listener for opening new projects page and saving the id variable when a portfolio image is clicked on
projectItems.addEventListener("click", function(e) {
  if (e.target.matches("div")) {
    const id = e.target.id;
    localStorage.setItem("id", id);
    window.open("../projects/index.html", "_self");
  }
}); // end projectItems event listener

