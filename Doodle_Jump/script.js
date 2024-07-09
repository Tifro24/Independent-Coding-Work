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
let isMovingLeft = false
let isMovingRight = false
let leftTimerId
let rightTimerId
let score = 0

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

            if (platform.bottom < 10){
                let firstPform = platforms[0].visual
                firstPform.style.display = "none"
                platforms.shift()
                score ++
                console.log(platforms)
                let newPlatform = new Pform(585)
                platforms.push(newPlatform)

            
                

               
    
            }
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
    }, 20)
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

        
    } ,20)
}

function gameEnd(){
    console.log("game done")
    isGameOver = true
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    grid.innerHTML = `You scored: ${score}`
    clearInterval(upTimerId)
    clearInterval(downTimerId)
    clearInterval(rightTimerId)
    clearInterval(leftTimerId)
}

function movement(e){
    if (e.key === "ArrowLeft"){
        shiftLeft()
    } else if (e.key === "ArrowRight"){
        shiftRight()
    } else if (e.key === "ArrowUp"){
        shiftUp()
    }
}

function shiftLeft(){
    
    if(isMovingRight) {
        clearInterval(leftTimerId)
        isMovingLeft = false
    }
    leftTimerId = setInterval(function (){
        if (charStartLeft >= 0) {
            charStartLeft -= 5
            char.style.left = charStartLeft + 'px'
        } else shiftRight()

    } ,30)

}

function shiftRight(){
   
    if(isMovingLeft){
        clearInterval(leftTimerId)
        isMovingRight = False 
    }
    rightTimerId = setInterval(function (){
        if (charStartLeft <= 350) {
            charStartLeft += 5
            char.style.left = charStartLeft + 'px'
        } else shiftLeft()

    } ,30)

}

function shiftUp(){
    isMovingLeft = false
    isMovingRight = false
    clearInterval(rightTimerId)
    clearInterval(leftTimerId)
}


    




function begin(){
    if(isGameOver == false){
        createPlatforms()
        createChar()
        setInterval(shiftPlatforms,30)
        jump()
        document.addEventListener("keyup", movement)
    }
}

// Will attach button to this and make a menu, maybe add a leaderboard too.
begin()