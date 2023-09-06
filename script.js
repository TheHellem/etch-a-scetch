let defaultGridSize = 16;

function createGridChildren(gridSize){
    const gridParent = document.querySelector('.grid-parent')
    for (let i = 0; i < gridSize; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-child');
        gridSquare.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        gridParent.appendChild(gridSquare);
    }

}

createGridChildren(defaultGridSize)