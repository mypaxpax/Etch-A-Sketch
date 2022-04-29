let test = document.querySelectorAll(".grid");

let paint = function(){
    test.forEach(function(square){
        square.addEventListener("mouseover", () =>{
            square.classList.add("gridColoring");
        })
    })
}

paint();
