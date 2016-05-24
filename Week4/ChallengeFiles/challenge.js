// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.


//Part 1 Solution:
//Used .insertBefore to set first div for fun.
function addElement (){
  //Created new Div Element
  var planetDiv = document.createElement("div");
  //Adds "planet" class to new div
  planetDiv.classList.add("planet");
  //Change background-color
  planetDiv.style.backgroundColor = "#44F"
  //Parent Node
  var Parent = document.querySelector("body");
  //Reference child of  Parent
  var h2Tag = document.querySelector("h2");
  //Insert new PlanetDiv After h2 tag
  Parent.insertBefore(planetDiv, h2Tag.nextSibling);
}


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.


//Part 2 Solution
//Used .appendChild for a "quick" add.
function quickAppend (){
  //Creates new div
  var moonDiv = document.createElement("div");
  //Add's Class "moon" to new div
  moonDiv.classList.add("moon");
  //Quick adds new div to body
  document.body.appendChild(moonDiv);
}

addElement();
quickAppend();
