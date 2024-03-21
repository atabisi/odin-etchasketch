// const container = document.querySelector("#container")
const grid = document.querySelector('#grid')
const sizebtn = document.querySelector("#sizebtn")
const resetbtn = document.querySelector("#reset")
let cols = 16
let rows = 16
let gridsize = 600

grid.style.width = `${gridsize}px`
grid.style.height = `${gridsize}px`

function createGrid() {
    for (let i = 1; i <= (cols * rows); i++) {
        const gridCell = document.createElement('div');
        gridCell.style.width = `${gridsize / cols - 2}px`;
        gridCell.style.height = `${gridsize / rows - 2}px`;
        gridCell.classList.add('square');
        grid.appendChild(gridCell);
        gridCell.addEventListener('mouseover', function () {
            gridCell.style.backgroundColor = 'black';
        })
    }
}

createGrid();

sizebtn.addEventListener('click', function () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    cols = parseInt(prompt("Type the desired Grid Size (between 1-100)", 16))
    if (cols > 100 || cols < 1) {
        cols = parseInt(prompt("Grid Size should be between 1 and 100 cells", 16))
    }
    rows = cols
    createGrid()
})

resetbtn.addEventListener('click', function () {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    createGrid()
})





