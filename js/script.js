const container = document.querySelector(".container");
const clearButton = document.querySelector("#clearButton");
const newGridSize = document.querySelector("#newGridSize");
const clearChildren = document.querySelector(".container").childNodes;
const painting = document.querySelectorAll(".gridSquare")

// Clears the colored squares.
clearAllGrid = () => {
    for(let k = 0; k < clearChildren.length; k++){
        if (clearChildren[k].classList){
            clearChildren[k].classList.remove("gridSquareColor");
        }
    }
}

// Creates rows from user input and adds to container as child element.
create = (userInput) => {
    for(let i = 0; i < userInput; i++){
        let row = document.createElement("div");
        container.appendChild(row);

// Fills the row with same amount as input, creating 1x1 ration.
    for (let j = 0; j < userInput; j++){
        squares = document.createElement("div");
        squares.className = "gridSquare";
        squares.style.width = `${500 / userInput}px`;
        squares.style.height = `${500 / userInput}px`;
        container.appendChild(squares);
        }
    }
}

// takes input and pass it towards create function.
gridSize = () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    } 

    userInput = prompt("Enter number");
    if (userInput >= 100 || userInput == 0 || userInput === "String"){
        alert("Enter a number below 100");
        gridSize();
    }else {
        create(userInput);
    }

// runs through each square and on mouseOver, change class -
// - to colored square.
    paintSquares = document.querySelectorAll(".gridSquare");
    paintSquares.forEach(function(colorSquare){
        colorSquare.addEventListener("mouseover", () =>{
            colorSquare.classList.add("gridSquareColor")
        })
    });
}

// Buttons for clearing and creating grids
newGridSize.addEventListener("click", gridSize);
clearButton.addEventListener("click", clearAllGrid);