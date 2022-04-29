let inside = document.querySelector("#inside");
const resetButton = document.querySelector("#reset");
let myInput = prompt("Enter number") * 2;

resetButton.addEventListener("click", () => {
    while(inside.firstChild){
        inside.removeChild(inside.firstChild);
    }
});

for(let i = 0; i < myInput; i++){
    let myGrid = document.createElement("div");
    myGrid.textContent = ".";
    myGrid.classList.add("grid");
    inside.appendChild(myGrid);

}
let pageGrid = document.querySelectorAll(".grid");
let paint = function(){
    pageGrid.forEach(function(square){
        square.addEventListener("mouseover", () =>{
            square.classList.add("gridColoring");
        })
    })
}

if (myInput >= 10000 || myInput == null){
    alert("Too big dude!");
}

paint();