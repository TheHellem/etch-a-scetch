const gridParent = document.querySelector('grid-parent')

function createGridChildren(){
    let gridSize = 16;
    for (let i = 0; i < gridSize; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-child')
        gridParent.appendChild(gridSquare)
    }

}