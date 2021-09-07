// variable for the about-para class that holds the about-sq articles & about-hover divs
const aboutPara = document.querySelector(".about-para");

// get about data from GitHub hosted API (portfolio.json)
const getData = async function (div, id) {
  const res = await fetch("https://madelinekreiff.github.io/my-portfolio/portfolio.json");
  let data = await res.json();
  data = data.about;
  changeText(data, div, id);
}; // end getData

const changeText = (data, div, id) => {
  for (let object of data) {
    if (id === object.id) {
      div.innerText = object.text;
    }
  }
}; // end changeText

const toggleClasses = (div, divParent) => {
  div.classList.toggle("about-div-toggle");
  divParent.classList.toggle("about-parent-toggle");
}; // end toggleClasses

// event listener for clicking the about-hover divs inside aboutPara
aboutPara.addEventListener("click", function(e) {
  if (e.target.classList.contains("about-hover")) {
    const id = e.target.id;
    const div = document.querySelector(`#${id}`);
    const divParent = div.parentElement;
    toggleClasses(div, divParent);

    if (e.target.innerText !== "Click me") {
      e.target.innerText = "Click me";
    } else {
      getData(div, id);
    }
  }
}); // end event listener