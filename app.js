const container = document.querySelector("#grid-container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

function changeColor() {}

createGrid(257);
