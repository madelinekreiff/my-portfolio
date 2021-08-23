// Get Portfolio Project data from a local json server (portfolio.json)
const getData = async function () {
    const res = await fetch("http://localhost:8000/projects");
    const data = await res.json();
    for (let project of data) {
        console.log(project.name, ":", project.tools);
    }
};

getData();