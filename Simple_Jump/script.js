const box = document.getElementById("box")
const char = document.createElement("div")
let charStartLeft = 40
let charStartBottom = 200


function createChar() {
    box.appendChild(char)
    char.classList.add("character")
    char.style.left = charStartLeft + 'px'
    char.style.bottom = charStartBottom + 'px'
    
}

createChar()