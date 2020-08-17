import { getInputDirection } from "./inputs.js"

export const SNAKE_SPEED = 5

// set our snake postion in the grid (x -> row, y -> column)
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
  // the logic here is to shift the head and make each segment(but not the tail) below the head to take the previous position of his following
  // snakeBody[i + 1] is the segment before the last one, it take the place of the last. the process is repeated until i = 0

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  //we update the head position
  const head = snakeBody[0]
  head.x += inputDirection.x
  head.y += inputDirection.y
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement =  document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.className = 'snake'
    gameBoard.appendChild(snakeElement)
  })
}