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
  portfolio.classList.remove("portfolio");
  portfolio.classList.add("new-portfolio");

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
        <li class="list-item"><span class="heading">Skills:</span> ${test.skills}</li>
        <li class="list-item"><span class="heading">Tools Used:</span> ${test.tools}</li>
        <li class="list-item"><span class="heading">Description:</span> ${test.description}</li>
      </ul>
      <p class="code">Click <a class="here" href=${test.code} target="_blank" rel="noreferrer noopener">here</a> to see this project's <span class="react">GitHub Repo</span> & code!</p>
      <a class="button-link" href=${test.url} target="_blank" rel="noreferrer noopener">
        <button class="website">View this project's live website!</button>
      </a>
    </aside>
  `;
  const react = div.querySelector(".react");
  if (test.react === "yes") {
    react.innerText = "React CodeSandbox";
  }

  // display new info page
  project.append(div);
  project.classList.remove("hide");
}; // end displayProjectInfo

getData();