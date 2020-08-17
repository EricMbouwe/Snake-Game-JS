import { onSnake, expandSnake } from "./snake.js";
// set our food postion in the grid (x -> column, y -> row)
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.className = 'food'
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodposition
  while (newFoodposition == null || onSnake(newFoodposition)) {
    newFoodposition = randomGridPosition()
  }
  return newFoodposition
}