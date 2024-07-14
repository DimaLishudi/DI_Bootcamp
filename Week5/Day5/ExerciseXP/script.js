const kDrawGrid = document.getElementById("drawGrid");
const kDefaultColor = "white";

function createGrid() {
    const kNCols = 60;
    const kNRows = 24;
    kDrawGrid.style.gridTemplateColumns = `repeat(${kNCols}, 1fr)`;
    kDrawGrid.style.gridTemplateRows = `repeat(${kNRows}, 1fr)`;

    for (i = 0; i < kNCols; ++i) {
        for (j = 0; j < kNRows; ++j) {
            let child = document.createElement("div");
            child.style.backgroundColor = kDefaultColor;
            child.style.border = "1px grey solid";
            kDrawGrid.appendChild(child);
        }
    }
}
  
createGrid();


let color = kDefaultColor;

function Clear() {
    color = kDefaultColor;
    for (cell of kDrawGrid.children) {
        cell.style.backgroundColor = kDefaultColor;
    }
}

function ColorIfCell(event) {
    // if left click is not pressed, return
    if (!(event.buttons & 1)) {
        return
    }
    event.preventDefault();
    const target = event.target;
    if (target.parentElement.id === "drawGrid") {
        target.style.backgroundColor = color;
    }
}


addEventListener("click", (event) => {
    // event.preventDefault();
    const target = event.target;
    if (target.parentElement.id === "colorMenu") {
        color = target.style.backgroundColor;
    } else if (target.parentElement.id === "drawGrid") {
        target.style.backgroundColor = color;
    } else if (target.id === "clearBtn") {
        Clear()
    } 
})

addEventListener("mouseover", ColorIfCell)