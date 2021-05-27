import React, { useEffect, useState } from 'react'

export const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
}) => {
  let currentSegment = ''
  const [isFinished, setFinished] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  let timerHandle = 0
  const timerDelay = segments.length
  let angleCurrent = 0
  let angleDelta = 0
  const size = 290
  let canvasContext = null
  let maxSpeed = Math.PI / `${segments.length}`
  const upTime = segments.length * 100
  const downTime = segments.length * 1000
  let spinStart = 0
  let frames = 0
  const centerX = 300
  const centerY = 300
  useEffect(() => {
    wheelInit()
    setTimeout(() => {
      window.scrollTo(0, 3)
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  window.onload = function() {
    initCanvas()
    draw()
  }

  const wheelInit = () => {
    initCanvas()
    draw()
  }

  const draw = () => {
    clear()
    drawWheel()
    drawNeedle()
  }

  const initCanvas = () => {
    let canvas = document.getElementById('canvas')
    if (navigator.appVersion.indexOf('MSIE') !== -1) {
      canvas = document.createElement('canvas')
      canvas.setAttribute('width', 1000)
      canvas.setAttribute('height', 600)
      canvas.setAttribute('id', 'canvas')
      document.getElementById('wheel').appendChild(canvas)
    }
    canvas.addEventListener('click', spin, false)
    canvasContext = canvas.getContext('2d')
  }

  const spin = () => {
    setIsStarted(true)
    // eslint-disable-next-line no-unused-vars
    if (timerHandle === 0) {
      spinStart = new Date().getTime()
      maxSpeed = Math.PI / segments.length
      frames = 0
      timerHandle = setInterval(onTimerTick, timerDelay)
    }
  }

  const onTimerTick = () => {
    frames++
    draw()
    const duration = new Date().getTime() - spinStart
    let progress = 0
    let finished = false
    if (duration < upTime) {
      progress = duration / upTime
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
          progress = 1
        } else {
          progress = duration / downTime
          angleDelta =
            maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
        }
      } else {
        progress = duration / downTime
        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
      }
      if (progress >= 1) finished = true
    }
    angleCurrent += angleDelta
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2
    if (finished) {
      setFinished(true)
      onFinished(currentSegment)
      clearInterval(timerHandle)
      timerHandle = 0
      angleDelta = 0
    }
  }

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext
    const value = segments[key]
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, size, lastAngle, angle, false)
    ctx.lineTo(centerX, centerY)
    ctx.closePath()
    ctx.fillStyle = segColors[key]
    ctx.fill()
    ctx.stroke()
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((lastAngle + angle) / 2)
    ctx.fillStyle = 'white'
    ctx.lineWidth = 10
    ctx.font = "bolder 1.7em 'Arial Black'"
    ctx.fillText(value.substr(0, 21), size / 2 + 20, 0)
    ctx.restore()
  }

  const drawWheel = () => {
    const ctx = canvasContext

    // Draw wedges 
    let lastAngle = angleCurrent
    const len = segments.length
    const PI2 = Math.PI * 2
    ctx.lineWidth = 5
    ctx.strokeStyle = 'white'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = "bolder 1.7em 'Arial Black'"
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent
      drawSegment(i - 1, lastAngle, angle)
      lastAngle = angle
    }

    // Draw outer circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, size, 0, PI2, false)
    ctx.closePath()
    ctx.lineWidth = 10
    ctx.strokeStyle = 'white'
    ctx.stroke()

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 50, 0, PI2, false)
    ctx.closePath()
    ctx.lineWidth = 8
    ctx.strokeStyle = 'white'

    // Define the gradient
    const gradient = ctx.createLinearGradient(300, 150, 620, 235) // starting points of x & y-axes, ending points of x & y-axes
    gradient.addColorStop(0, '#F8D3C5')
    gradient.addColorStop(0.3, '#f0e2ce')
    
    // Draw circle container for gradient
    ctx.fillStyle = gradient // define the fill
    ctx.beginPath() // start the circle drawing
    ctx.arc(centerX, centerY, 50, 0, PI2, false) // define the arc(path) of the circle
    ctx.closePath()
    ctx.fill() // fill the circle with the specified fillStyle
    
    // Draw 'SPIN' in center circle
    ctx.font = 'bolder 1.5em Arial Black'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText('SPIN', centerX, centerY + 3)
    ctx.stroke()
  }

  // Draw needle on spin button 
  const drawNeedle = () => {
    const ctx = canvasContext
    ctx.lineWidth = 1
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.moveTo(centerX + 20, centerY - 50)
    ctx.lineTo(centerX - 20, centerY - 50)
    ctx.lineTo(centerX, centerY - 70)
    ctx.closePath()
    ctx.fill()
    const change = angleCurrent + Math.PI / 2
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1
    if (i < 0) i = i + segments.length
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'white'
    ctx.font = "bolder 1.8em 'Arial Black'"
    currentSegment = segments[i]
    isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50)
  }

  const clear = () => {
    const ctx = canvasContext
    ctx.clearRect(0, 0, 1000, 800)
  }

  return (
    <>
      <div id='wheel'>
        <canvas
          id='canvas'
          width='1000'
          height='800'
          style={{ pointerEvents: isFinished ? 'none' : 'auto' }}
        />
      </div>
    </>
  )
}