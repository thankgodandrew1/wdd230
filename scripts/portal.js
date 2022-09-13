// To get current year via JS
const options = {
    year: "numeric",
  };
  document.getElementById("current_year").textContent =
    new Date().toLocaleDateString("en-US", options);

//TO GET THE LAST MOODIFIED TIME USING JS
// alert(document.lastModified);
let oLastModif = (document.lastModified);
document.getElementById("last_update").innerHTML = oLastModif;