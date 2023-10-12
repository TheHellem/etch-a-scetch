const gridParent = document.querySelector(".grid-parent");

function setMode(mode = "default") {
  // her er ideeen å ha if for hvile mode det er
  return [mode];
}

const handleMouseOver = (e) => {
  e.target.style.backgroundColor = "black";
};

function createGridChildren(gridSize = 64) {
  const cellSize = 780 / gridSize;
  for (let i = 0; i < gridSize ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
    gridSquare.classList.add("grid-child");
    gridSquare.addEventListener("mouseover", handleMouseOver);
    gridParent.appendChild(gridSquare);
  }
}

const slider = document.querySelector("#slider");

slider.addEventListener("input", () => {
  gridSize = document.querySelector("#slider").value;
  gridParent.innerHTML = "";
  createGridChildren(gridSize);
  document.querySelector(
    "#grid-size-display"
  ).innerHTML = `${gridSize}x${gridSize}`;
});

createGridChildren();