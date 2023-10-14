// Handle modes

const rainbowHexArr = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];



function setMode(mode = "default") {
  // her er ideeen å ha if for hvile mode det er
  return [mode];
}

// Handle drawing

const handleMouseOver = (e) => {
  e.target.style.backgroundColor = "#000000";
};

// Make grid

const gridParent = document.querySelector(".grid-parent");

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

// Slider functions

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
