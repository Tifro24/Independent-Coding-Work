const grid = document.getElementById("grid")
const char = document.createElement("div")
let charStartLeft = 40
let charStartBottom = 100
let isGameOver = false
let pformNo = 5
let platforms = []
let upTimerId
let downTimerId

function createChar(){
    grid.appendChild(char)
    char.classList.add("character")
    char.style.left = charStartLeft + 'px'
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
    upTimerId = setInterval(function() {
        charStartBottom += 20
        char.style.bottom = charStartBottom + 'px'
        if (charStartBottom > 300){
            fall()
        }
    }, 30)
}

function fall(){
    clearInterval(upTimerId)
    downTimerId = setInterval(function(){
        charStartBottom -= 20
        char.style.bottom = charStartBottom + 'px' 
    } ,30)
}
    




function begin(){
    if(isGameOver == false){
        createChar()
        createPlatforms()
        setInterval(shiftPlatforms,30)
        jump()
    }
}

// Will attach button to this and make a menu, maybe add a leaderboard too.
begin()