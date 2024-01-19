// const screen = document.querySelector(".screen")

// const button = document.querySelector(".clickableButton")

// button.addEventListener("click" , function(){
//     const createdElement = document.createElement("div")
//     createdElement.className= "newDiv"
//     createdElement.innerText("HI")
//     screen.appendChild(createdElement)
// })
const screen = document.querySelector(".screen");
const button = document.querySelector(".clickableButton");

button.addEventListener("click", function() {
  const createdElement = document.createElement("div");
  createdElement.className = "newDiv";
  createdElement.innerText = "HI";
  screen.appendChild(createdElement);
});
