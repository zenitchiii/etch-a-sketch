function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector("#container");
let size = 16;

for (let i = 0; i<size; i++) {
    for (let j = 0; j<size; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseenter", () =>{
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
}