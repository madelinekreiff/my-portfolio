// variable for the hidden HTML article with class project
const project = document.querySelector(".project");

// variable for the original project items list of images to click on
const projectItems = document.querySelector(".project-items");

// title variable to change "My Portfolio" to the project's name
const title = document.querySelector(".title");

// get portfolio project data from a local json server (portfolio.json)
const getData = async function () {
    const res = await fetch("http://localhost:3000/projects");
    const data = await res.json();
    displayProjectInfo(data);
};

// function to display project info
const displayProjectInfo = (data) => {
    projectItems.classList.add("hide");

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
                <li>Languages Used: </li>
                <li>Additional Tools Used: </li>
                <li>Description:</li>
            </ul>
        </aside>
    `;
    project.append(div);
    const list = document.querySelector(".list");
    const li = document.createElement("li");
    if (project.react === "yes") {
        li.innerText = `Link to React CodeSandbox & code: ${test.code}`;
    } else {
        li.innerText = `Link to GitHub Repo & code: ${test.code}`;
    }
    list.append(li);

    project.classList.remove("hide");
};

getData();