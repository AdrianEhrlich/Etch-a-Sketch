const gridContainer = document.querySelector(".gridContainer");

const createGrid = (rows, columns) => {

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.display = "flex";
    gridContainer.style.flexWrap = "wrap"

    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("gridCell");

        cell.style.flex = `0 0 calc(100% / ${columns})`;
        cell.style.aspectRatio = "1";

        cell.addEventListener("mouseenter", () =>{
            cell.style.backgroundColor = "lightBlue";
        });
        
        cell.addEventListener("mouseleave", () => {
            cell.style.filter = "blur(3px)";
            cell.style.transition = "filter 0.5s ease-out";
        });

        gridContainer.appendChild(cell);
    }
}

createGrid(16, 16);

const resetBttn = document.querySelector(".resetBttn")

resetBttn.addEventListener("click", () => {
    
    let gridSize = parseInt(prompt(
        "Enter the number of squares per side for a new grid (e.g. 16, 32, etc."))

    if (isNaN(gridSize) || gridSize <= 0) {
        alert("Please enter a positive number.");
    } else if (gridSize > 100) {
        alert("Please enter a number equal or smaller than 100.")
    } else {
        createGrid(gridSize, gridSize);
    }
    
    
})
