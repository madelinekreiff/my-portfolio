// variable for the hidden HTML article with class project
const project = document.querySelector(".project");
// variable for the original project items list of images to click on
const projectItems = document.querySelector(".project-items");
// title variable to change "My Portfolio" to the project's name
const title = document.querySelector(".title");
// variable for the portfolio class to change the min-height
const portfolio = document.querySelector(".portfolio")

// get portfolio project data from a local json server (portfolio.json)
const getData = async function () {
  const res = await fetch("http://localhost:3000/projects");
  const data = await res.json();
  displayProjectInfo(data);
}; // end getData

// function to display project info
const displayProjectInfo = (data) => {
  projectItems.classList.add("hide");
  portfolio.style.minHeight = "1000px";
  // * test variable *
  const test = data[0];

  title.innerText = `${test.name}`;
  const div = document.createElement("div");
  div.innerHTML = `
    <figure class="photo">
      <img src="${test.imgSrc}" alt="${test.imgAlt}">
    </figure>
    <aside class="info">
      <ul class="list">
        <li><span class="heading">Languages Used:</span> ${test.languages}</li>
        <li><span class="heading">Additional Tools Used:</span> ${test.tools}</li>
        <li><span class="heading">Description:</span> ${test.description}</li>
      </ul>
      <p class="code">Click <span class="here"><a href=${test.code}>here</a></span> to see this project's <span class="react">GitHub Repo</span> & code!</p>
      <button class="website">View this project live on the internet!</button>
    </aside>
  `;

  // editing styles for new project info section
  const react = div.querySelector(".react");
  if (test.react === "yes") {
    react.innerText = "React CodeSandbox";
  }
  // create variables
  const info = div.querySelector(".info");
  const list = div.querySelector(".list");
  const li = div.querySelectorAll("li");
  const description = div.querySelector("ul li:nth-child(3)");

  info.style.lineHeight = "2em";
  list.style.padding = "30px 0";
  li[0].style.padding = "20px 0";
  li[1].style.padding = "20px 0";
  li[2].style.padding = "20px 0";

  // display new info page
  project.append(div);
  project.classList.remove("hide");
}; // end displayProjectInfo

getData();

