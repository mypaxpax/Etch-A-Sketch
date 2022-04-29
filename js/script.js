let inside = document.querySelector("#inside");
let myInput = prompt("Enter number");

for(let i = 0; i < myInput; i++){
    let myGrid = document.createElement("div");
    myGrid.textContent = ".";
    myGrid.classList.add("grid");
    inside.appendChild(myGrid);

}
let test = document.querySelectorAll(".grid");
let paint = function(){
    test.forEach(function(square){
        square.addEventListener("mouseover", () =>{
            square.classList.add("gridColoring");
        })
    })
}

paint();