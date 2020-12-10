import React, { useEffect, useState } from 'react'
import { SpinButton } from './SpinButton'

export const WheelComponent = ({
  segments,
  segColors,
  winningSegment,
  onFinished,
  primaryColor,
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
      window.scrollTo(0, 2)
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
    console.log("spinning", isStarted)
    // eslint-disable-next-line no-unused-vars
      if (timerHandle === 0) {
        spinStart = new Date().getTime()
        maxSpeed = Math.PI / segments.length
        frames = 0
        timerHandle = setInterval(onTimerTick, timerDelay)
      }

  }

  const onTimerTick = () => {
    console.log("onTimerTick")
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
    ctx.fillStyle = primaryColor
    ctx.lineWidth = 10
    ctx.font = 'bolder 1.75vw Arial_Black'
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
    ctx.strokeStyle = primaryColor
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = 'bolder 1.75vw Arial_Black'
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
    ctx.strokeStyle = primaryColor
    ctx.stroke()

  }

  // Draw spin button 
  const drawNeedle = () => {
    const ctx = canvasContext
    const spinBtn = new Image()
    spinBtn.setAttribute('id', 'btn--spin')
    spinBtn.src = "https://eventfinity-production-assets.s3.amazonaws.com/materials/742941/original/SPIN.png"
    spinBtn.onload = function() {ctx.drawImage(spinBtn, 235, 195, 140, 175)}
    const change = angleCurrent + Math.PI / 2
    let i = segments.length - Math.floor((change / (Math.PI * 2)) * segments.length) - 1
    if (i < 0) i = i + segments.length
    currentSegment = segments[i]
  }

  const clear = () => {
    const ctx = canvasContext
    ctx.clearRect(0, 0, 1000, 800)
  }

  return (
    <>
      <SpinButton isStarted={isStarted} />
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