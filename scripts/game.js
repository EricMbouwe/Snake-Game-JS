import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js";

const gameBoard = document.getElementById('board')
let lastRenderTime = 0

function main(currentTime) {
  const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
  window.requestAnimationFrame(main)

  if (secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
}
 
function draw() {
  // clear the previous pieces of the snake on the gameBoard
  gameBoard.innerHTML = ''

  drawSnake(gameBoard)
  drawFood(gameBoard)
}