const GRID_SIZE = 21
const endGame = document.getElementById('endGame')
const message = document.getElementById('message')

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGrid(position) {
  // valid positions are { x : [1 - 21], y: [1- 21]}
  return(
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}

export function endGamePanel() {
  endGame.classList.add('show')
}

export function restart() {
  endGame.classList.remove('show')
  window.location = '/'
}

message.addEventListener('click', restart)