const grid = document.getElementById("grid")
const char = document.createElement("div")

function createChar(){
    grid.appendChild(char)
    char.classList.add("character")
}

createChar()