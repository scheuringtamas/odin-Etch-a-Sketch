function createGrid(size) {
  const container = document.querySelector("#grid-container");
  const squareSize = 960 / size;
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

function changeSize() {
  let newSize;
  do {
    newSize = parseInt(
      prompt("Enter the number of squares per side (max 100):"),
      10
    );
  } while (isNaN(newSize) || newSize <= 0 || newSize > 100);

  createGrid(newSize);
}

createGrid(16);

document.getElementById("resize").addEventListener("click", changeSize);
