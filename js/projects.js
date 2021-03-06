// variable for the hidden HTML article with class project - clear when page is loaded
const project = document.querySelector(".project");
// title variable to change "My Portfolio" to the project's name - clear when page is loaded
const title = document.querySelector(".title");

// get id variable saved in local storage then clear local storage
const id = localStorage.getItem("id");

// get portfolio project data from GitHub hosted API (portfolio.json)
const getData = async function (id) {
  const res = await fetch("https://madelinekreiff.github.io/my-portfolio/portfolio.json");
  let data = await res.json();
  data = data.projects[0];
  filterData(data, id);
}; // end getData
  
  // function to filter data array above to get desired object
  const filterData = (data, id) => {
    for (let object of data.htmlCss) {
      if (object.id === id) {
        displayProjectInfo(object);
      }
    }
    for (let object of data.javascript) {
      if (object.id === id) {
        displayProjectInfo(object);
      }
    }
    for (let object of data.react) {
      if (object.id === id) {
        displayProjectInfo(object);
      }
    }
  }; // end filterData
  
  // function to display project info
  const displayProjectInfo = (object) => {
  
    title.innerText = `${object.name}`;
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="info-div">
        <figure class="photo">
          <img src="${object.imgSrc}" alt="${object.imgAlt}">
        </figure>
        <aside class="info">
          <ul class="list">
            <li class="list-item"><span class="heading">Skills:</span> ${object.skills}</li>
            <li class="list-item"><span class="heading">Tools Used:</span> ${object.tools}</li>
            <li class="list-item"><span class="heading">Description:</span> ${object.description}</li>
          </ul>
        </aside>
      </div>
      <div class="buttons-div">
        <p class="code">Click <a class="here" href=${object.code} target="_blank" rel="noreferrer noopener">here</a> to see this project's&nbsp;<span class="react">GitHub Repo</span>&nbsp;& code!</p>
        <div class="button-div">
          <a class="website-button-link" href="${object.url}" target="_blank" rel="noreferrer noopener">
            <button class="website-button">View this project's live website!</button>
          </a>
        </div>
        <div class="button-div"> 
          <button class="back-button">Back</button>
        </div>
      </div>
    `;
    div.classList.add("project-div");
  
    // display new info page
    project.append(div);
  
    // event listener for back button
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", function() {
      title.innerText = "";
      project.innerHTML = "";
      window.open("../portfolio", "_self");
    }); // end backButton event listener
  
  }; // end displayProjectInfo

  // run getData function
  getData(id);