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

        gridContainer.appendChild(cell);
    }
}

createGrid(16, 16);
