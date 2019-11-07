import React, { useState, useEffect } from 'react';

function HookMouse() {
const[x, setX] = useState(0)
const[y, setY] = useState(0)

const logMousePositions = e => {
  setX(e.clientX)
  setY(e.clientY)
}
useEffect(() => {
  window.addEventListener('mousemove', logMousePositions)
}, [])

  return(
    <div>
      Hooks x-{x} y-{y}
    </div>
  )
}
export default HookMouse;
