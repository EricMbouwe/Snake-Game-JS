import { update as updateSnake, draw as drawSnake, getSnakeHead,snakeIntersection, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0
let gameOver
const gameBoard = document.getElementById('board')

function main(currentTime) {
  if (gameOver) {
    return alert('You lose')
  }
  
  window.requestAnimationFrame(main)
  const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)


function update() {
  updateSnake()
  updateFood()
  checkDeath()
}
 
function draw() {
  // clear the previous pieces of the snake on the gameBoard
  gameBoard.innerHTML = ''

  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}