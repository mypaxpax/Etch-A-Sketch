const container = document.querySelector(".container");
const clearButton = document.querySelector("#clearButton");
const newGridSize = document.querySelector("#newGridSize");

newGridSize.addEventListener("click", gridSize)
// Creates rows from user input and adds to container as child element.
function create(userInput){
    for(let i = 0; i < userInput; i++){
        let row = document.createElement("div");
        container.appendChild(row);

// Fills the row with same amount as input, creating 1x1 ration.
    for (let j = 0; j < userInput; j++){
        let squares = document.createElement("div");
        squares.className = "gridSquare";
        squares.style.width = `${960 / userInput}px`;
        squares.style.height = `${500 / userInput}px`;
        container.appendChild(squares);
        }
    }
}


// takes input and pass it towards create function.
function gridSize(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    userInput = prompt("Enter number");
    if (userInput >= 100 || userInput == 0){
        alert("Enter a number below 100");
        gridSize();
    }else {
        create(userInput);
    }

// runs through each scare and on mouseOver, change class -
// - to colored square.
    let paintSquares = document.querySelectorAll(".gridSquare");
    paintSquares.forEach(function(colorSquare){
        colorSquare.addEventListener("mouseover", () =>{
            colorSquare.classList.add("gridSquareColor");
        })
    })
}

// Clears all created divs.
clearButton.addEventListener("click", () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
})

gridSize();