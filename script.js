
function createGridChildren(gridSize = 64) {
    const gridParent = document.querySelector(".grid-parent");
    const cellSize = 780 / gridSize;
    
    const handleMouseOver = (event) => {
      event.target.style.backgroundColor = "black";
    };
    
    for (let i = 0; i < gridSize ** 2; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
      gridSquare.classList.add("grid-child");
      gridSquare.addEventListener("mouseover", handleMouseOver);
      gridParent.appendChild(gridSquare);
    };
  }

createGridChildren(121)