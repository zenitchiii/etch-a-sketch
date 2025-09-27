function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector("#container");
const button = document.querySelector("#button")

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 400/size;

    for (let i = 0; i< size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
}

createGrid(16);

button.addEventListener("click", () => {
    let input = prompt("Enter squares per side (max: 100)");
    let num = parseInt(input);

    if (num > 0 && num <= 100 ) {
        createGrid(num);
    } else {
        alert("Please enter a number within 1 - 100");
    }
});
