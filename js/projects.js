// variable for the hidden HTML article with class project
const project = document.querySelector(".project");
// title variable to change "My Portfolio" to the project's name
const title = document.querySelector(".title");

// get id variable saved in local storage then clear local storage
const id = localStorage.getItem("id");
localStorage.removeItem("id");

// get portfolio project data from a local json server (portfolio.json)
const getData = async function (id) {
    const res = await fetch("http://localhost:3000/projects");
    const data = await res.json();
    filterData(data, id);
  }; // end getData
  
  // function to filter data array above to get desired object
  const filterData = (data, id) => {
    for (let object of data) {
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
        <p class="code">Click <a class="here" href=${object.code} target="_blank" rel="noreferrer noopener">here</a> to see this project's <span class="react">GitHub Repo</span> & code!</p>
        <a class="website-button-link" href=${object.url} target="_blank" rel="noreferrer noopener">
          <button class="website-button">View this project's live website!</button>
        </a>
        <button class="back-button">Back</button>
      </div>
    `;
    const react = div.querySelector(".react");
    if (object.react === "yes") {
      react.innerText = "React CodeSandbox";
    }
    div.classList.add("project-div");
  
    // display new info page
    project.append(div);
    window.scrollTo(0, 0);
  
    // event listener for back button
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", function() {
      title.innerText = "My Portfolio";
      project.innerHTML = "";
      project.classList.add("hide");
      projectItems.classList.remove("hide");
      window.location.reload();
    }); // end backButton event listener
  
  }; // end displayProjectInfo

  // run getData function
  getData(id);