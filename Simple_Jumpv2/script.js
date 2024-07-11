// grid

let grid
let gridWidth = 1280
let gridHeight = 720
let context

window.onload =function(){

grid = document.getElementById("grid")
grid.width = gridWidth
grid.height = gridHeight
context = grid.getContext("2d")
}