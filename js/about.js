// variable for the about-para class that holds the about-sq articles & about-hover divs
const aboutPara = document.querySelector(".about-para");

const changeText = id => {
  const div = document.querySelector(`#${id}`);
  const divParent = div.parentElement;

  divParent.style.backgroundColor = "#506f7a";
  divParent.style.border = "3px solid #bab4a4";
  divParent.style.opacity = "0.5";
  div.style.fontFamily = "'PT Serif', serif";
  div.style.fontSize = "0.3em";
  div.style.opacity = "1";

}; // end changeText


// event listener for clicking the about-hover divs inside aboutPara
aboutPara.addEventListener("click", function(e) {
  if (e.target.classList.contains("about-hover")) {
    const id = e.target.id;
    changeText(id);
  }
}); // end event listener