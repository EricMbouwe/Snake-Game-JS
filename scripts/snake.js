import { getInputDirection } from "./inputs.js"

export const SNAKE_SPEED = 6
let newSegments = 0

// set our snake postion in the grid (x -> row, y -> column)
const snakeBody = [{ x: 11, y: 11 }]

export function update() {
  // the logic here is to shift the head and make each segment(but not the tail) below the head to take the previous position of his following

  addSegments()

  // snakeBody[i + 1] is the segment before the last one, it take the place of the last. the process is repeated until i = 0
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  //we update the head position
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
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

export function expandSnake(amount) {
  newSegments += amount
}

// If any segment of the snake equals the position passed as argument, this return true
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}