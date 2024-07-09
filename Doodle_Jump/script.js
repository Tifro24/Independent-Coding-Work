const grid = document.getElementById("grid")
const char = document.createElement("div")
let charStartLeft = 40
let startPoint = 100
let charStartBottom = startPoint
let isGameOver = false
let pformNo = 5
let platforms = []
let upTimerId
let downTimerId
let isJumping = false

function createChar(){
    grid.appendChild(char)
    char.classList.add("character")
    charStartLeft = platforms[0].left
    char.style.left = charStartLeft + 17.5 + 'px'
    char.style.bottom = charStartBottom + 'px'
    
}

class Pform {
    constructor(newPFormBottom) {
        this.bottom = newPFormBottom
        this.left =  Math.random() * 315
        this.visual = document.createElement('div')
        
        const visual = this.visual
        visual.classList.add("platforms")
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        grid.appendChild(visual)
    }
}

function createPlatforms(){
    for(let i=0; i<pformNo; i++){
        let pGap = 600 / pformNo
        let newPFormBottom = 75 + i * pGap
        let newPform = new Pform(newPFormBottom)
        platforms.push(newPform)
        

    }
}

function shiftPlatforms(){
    if(charStartBottom > 200) {
        platforms.forEach(platform => {
            platform.bottom -= 4
            let visual = platform.visual
            visual.style.bottom = platform.bottom + 'px'
        })
            
        
    }
}

function jump(){
    clearInterval(downTimerId)
    isJumping = true
    upTimerId = setInterval(function() {
        charStartBottom += 20
        char.style.bottom = charStartBottom + 'px'
        if (charStartBottom > startPoint + 200){
            fall()
        }
    }, 30)
}

function fall(){
    clearInterval(upTimerId)
    isJumping = false
    downTimerId = setInterval(function(){
        charStartBottom -= 20
        char.style.bottom = charStartBottom + 'px'
        if(charStartBottom <= 0 ) {
            gameEnd()
        } 

        platforms.forEach(platform => {
            if (
                (charStartBottom >= platform.bottom) && 
                (charStartBottom <= platform.bottom + 15) &&
                ((charStartLeft + 50) >= platform.left) &&
                (charStartLeft <= (platform.left + 85)) &&
                isJumping === false
           ) {
            console.log("landed")
            startPoint = charStartBottom
            jump()
           }

        })

        
    } ,30)
}

function gameEnd(){
    console.log("game done")
    isGameOver = true
    clearInterval(upTimerId)
    clearInterval(downTimerId)
}

function movement(){
    if (e.key === "ArrowLeft"){
        // move left
    } else if (e.key === "ArrowRight"){
        //move right
    } else if (e.key === "ArrowUp"){
        //move Up
    }
}
    




function begin(){
    if(isGameOver == false){
        createPlatforms()
        createChar()
        setInterval(shiftPlatforms,30)
        jump()
    }
}

// Will attach button to this and make a menu, maybe add a leaderboard too.
begin()