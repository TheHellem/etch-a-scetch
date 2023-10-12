let gridSize = 64;

function setMode(mode = "default") {
  // her er ideeen å ha if for hvile mode det er
  return [mode];
}

function createGridChildren() {
  const cellSize = 780 / gridSize;
  
  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = "black";
  };
  
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridParent = document.querySelector(".grid-parent");
    const gridSquare = document.createElement("div");
    gridSquare.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
    gridSquare.classList.add("grid-child");
    gridSquare.addEventListener("mouseover", handleMouseOver);
    gridParent.appendChild(gridSquare);
  }
}

const slider = document.querySelector("#slider");

slider.addEventListener("input", (e) => {
  gridSize = document.querySelector("#slider").value;
  console.log(gridSize);
});

createGridChildren();
