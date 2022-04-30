const container = document.querySelector(".container");
const resetButton = document.querySelector("#reset");

// takes user input from prompt window.
let myInput = prompt("Enter number");

// Error message if more than allowed or empty.
if (myInput >= 10000 || myInput == null){
    alert("Too big dude!");
}

// Creates rows from user input and adds to container as child element.
for(let i = 0; i < myInput; i++){
    let row = document.createElement("div");
    container.appendChild(row);

// Fills the row with same amount as input, creating 1x1 ration.
    for (let j = 0; j < myInput; j++){
        let squares = document.createElement("div");
        squares.className = "gridSquare";
        squares.style.width = `${960 / myInput}px`;
        squares.style.height = `${500 / myInput}px`;
        container.appendChild(squares);
    }

}

// grabs .gridSquare class and assign it to variable
let paintSquares = document.querySelectorAll(".gridSquare");

// runs through each scare and on mouseOver, change class -
// - to colored square.
let paint = function(){
    paintSquares.forEach(function(colorSquare){
        colorSquare.addEventListener("mouseover", () =>{
            colorSquare.classList.add("gridSquareColor");
        })
    })
}

// Clears all created divs.
resetButton.addEventListener("click", () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
});

paint();