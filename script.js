// Handle modes

let mode = "default";

const setMode = (newMode) => {
  mode = newMode;
  currentModeClass = ".mode-"+newMode;
  document.querySelector(currentModeClass).style.backgroundColor = "yellow";
}

const rainbowHexArr = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];

let currentIndex = 0;

function getNextColor() {
  const currentColor = rainbowHexArr[currentIndex];
  currentIndex = (currentIndex + 1) % rainbowHexArr.length; 
  return currentColor;
}

// Handle drawing

const handleMouseOver = (e) => {
  switch (mode) {
    case "default":
      e.target.style.backgroundColor = "#000000";
      break;
    case "erase":
      e.target.style.backgroundColor = "lightgray";
      break;
    case "rainbow":
      e.target.style.backgroundColor = getNextColor();
      break;
  }
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
