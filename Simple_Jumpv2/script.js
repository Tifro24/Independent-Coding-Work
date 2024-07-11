// grid

let grid
let gridWidth = 1280
let gridHeight = 720
let context

// character

let charWidth = 48
let charHeight = 68
let charX = gridWidth/16
let charY = gridHeight/4
let charImg;
let charLeftImg

let char = {
    x : charX,
    y : charY,
    width : charWidth,
    height : charHeight
}

//platforms

let platArr = []
let platWidth = 96
let platHeight = 20
let platformImg;

window.onload =function(){

grid = document.getElementById("grid")
grid.width = gridWidth
grid.height = gridHeight
context = grid.getContext("2d")





//drawing character

context.fillStyle = "orange";
context.fillRect(char.x, char.y, charWidth, charHeight)


charImg = new Image();
charImg.src = "/Media/images/mariorightpng.png"
charImg.onload = function(){
context.drawImage(charImg, char.x, char.y, char.width, char.height)
}

charLeftImg = new Image();
charLeftImg.src = "/Media/images/marioleftpng.png";




platformImg = new Image();
platformImg.src = "/Media/images/ruler.png"


}


placePlatforms();
requestAnimationFrame(update);

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, grid.width, grid.height);

    //character
    context.drawImage(charImg, char.x, char.y, char.width, char.height);

    //platforms

    for(let i = 0; i<platArr.length; i++){
        let platform = platArr[i]
        context.fillStyle = "green";
        context.fillRect(platform.x, platform.y, platform.width, platform.height)
    }

}

function placePlatforms(){
    platArr = [];

    //starting platform

    let platform = {
        // img: platformImg
        x : gridWidth - 300,
        y : gridHeight/2,
        width : platWidth,
        height : platHeight
    }

    platArr.push(platform);

    platform = {
        // img: platformImg
        x : gridWidth - 600,
        y : gridHeight/2,
        width : platWidth,
        height : platHeight
    }

    platArr.push(platform);
}