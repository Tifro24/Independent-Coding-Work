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

let char = {
    x : charX,
    y : charY,
    width : charWidth,
    height : charHeight
}

window.onload =function(){

grid = document.getElementById("grid")
grid.width = gridWidth
grid.height = gridHeight
context = grid.getContext("2d")



//drawing character

//context.fillStyle = "orange";
//context.fillRect(char.x, char.y, charWidth, charHeight)


charImg = new Image();
charImg.src = "/Media/images/mariopng.png"
charImg.onload = function(){
context.drawImage(charImg, char.x, char.y, char.width, char.height)
}
//context.drawImage()

}



requestAnimationFrame(update);

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, grid.width, grid.height);

    //character
    context.drawImage(charImg, char.x, char.y, char.width, char.height);


}