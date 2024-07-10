const box = document.getElementById("box")
const char = document.createElement("div")
let charStartLeft = 40
let charStartBottom = 200
isGameOver = false
platformNo = 5
platforms = []


function createChar() {
    box.appendChild(char)
    char.classList.add("character")
    char.style.left = charStartLeft + 'px'
    char.style.bottom = charStartBottom + 'px'
    
}

class PlatClass {
    constructor(newPlatBottom){
        this.bottom = newPlatBottom - 100
        this.left = Math.random() * 1100
        this.platReal = document.createElement("div")


        const platReal = this.platReal
        platReal.classList.add("platform")
        platReal.style.left = this.left + 'px'
        platReal.style.bottom = this.bottom + 'px'
        box.appendChild(platReal)
    }
}


function createPlatforms(){
    for(let i=0; i<platformNo; i++){
        let platGap = 800 / platformNo
        let newPlatBottom = 150 + i *  platGap
        let newPlatform = new PlatClass(newPlatBottom)
        platforms.push(newPlatform)
    }
}














function begin(){
    if (isGameOver == false){
        createPlatforms()
        createChar()
    }
}

begin()