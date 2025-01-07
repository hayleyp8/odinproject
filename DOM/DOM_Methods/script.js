// your JavaScript file
const container = document.querySelector("#container");

const pRed = document.createElement("p");
pRed.classList.add("pRed");
pRed.textContent = "Hey, this is red!";
pRed.style.color = "red";

const h3Blue = document.createElement("h3");
h3Blue.classList.add("h3Blue");
h3Blue.textContent = "I’m a blue h3!";
h3Blue.style.color = "blue";

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: black solid; background-color: pink;");

const newH = document.createElement("h1");
newH.textContent = "I'm in div"
const newP = document.createElement("p");
newP.textContent = "another one";


container.appendChild(pRed);
container.appendChild(h3Blue);
container.appendChild(newDiv);
newDiv.appendChild(newH);
newDiv.appendChild(newP);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=> {
	alert("Hello Shadow the Hedgehog");
});


