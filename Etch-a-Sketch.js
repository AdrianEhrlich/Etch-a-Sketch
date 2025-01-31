const gridContainer = document.querySelector(".gridContainer");

const createGrid = (rows, columns) => {
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("gridCell");
        gridContainer.appendChild(cell);
    }
}

createGrid(16, 16);
