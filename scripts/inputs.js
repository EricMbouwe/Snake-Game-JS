const upButton = document.getElementById('upBtn')
const downButton = document.getElementById('downBtn')
const rightButton = document.getElementById('rightBtn')
const leftButton = document.getElementById('leftBtn')

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp' :
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

upButton.addEventListener('click', function() {
  if (lastInputDirection.y !== 0) return
  inputDirection = { x: 0, y: -1 }
})

downButton.addEventListener('click', function() {
  if (lastInputDirection.y !== 0) return
  inputDirection = { x: 0, y: 1 }
})

leftButton.addEventListener('click', function() {
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: -1, y: 0 }
})

rightButton.addEventListener('click', function() {
  if (lastInputDirection.x !== 0) return
  inputDirection = { x: 1, y: 0 }
})