const gridContainer = document.querySelector(".gridContainer");

const createGrid = (rows, columns) => {

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
