const box = document.getElementById("box")
const char = document.createElement("div")
let charStartLeft = 40
let charStartBottom = 200
isGameOver = false
platformNo = 5
platforms = []

let controls = {
    left:false,
    right:false,
    up:false,
    keyListener: function(event){
        let control_state = (event.type == "keydown")?true:false;

        switch(event.keyCode){
            case 37:
                controls.left = control_state;
                console.log("left arrow pressed")
            break;
            case 38:
                controls.up = control_state;
                console.log("up arrow pressed")
            break;
            case 39:
                controls.right = control_state;
                console.log("right arrow pressed")
            break
        }
    }
    


}




function createChar() {
    box.appendChild(char)
    char.classList.add("character")
    char.style.left = charStartLeft + 'px'
    char.style.bottom = charStartBottom + 'px'
    
}

class PlatClass {
    constructor(newPlatBottom){
        this.bottom = newPlatBottom - 100
        this.left = Math.random() * 1050
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

function movingPlatforms(){
    if (charStartBottom > 200){
        platforms.forEach(platform => {
            platform.left -= 4
            let platReal = platform.platReal
            platReal.style.left = platform.left + 'px'
        })
    }
}
















function begin(){
    if (isGameOver == false){
        createPlatforms()
        createChar()
        setInterval(movingPlatforms, 30)
    }
}
window.addEventListener("keydown", controls.keyListener)
window.addEventListener("keyup", controls.keyListener)

begin()