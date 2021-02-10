import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Wheel = () => {
  
  const [ word, setWord ] = useState("")
  const [ color, setColor ] = useState("")
  const [ question, setQuestion ] = useState("")
  const [ points, setPoints ] = useState(0)
  const [ showGuess, setShowGuess ] = useState(false)
  const [ playClick ] = useSound(click, { volume: 0.25 })
  const [ playWheel ] = useSound(wheel, { volume: 0.25 })
           
  document.addEventListener('mousedown', playClick);

  const segments = [
    '40 POINTS',
    '60 POINTS',
    '20 POINTS',
    '10 POINTS',
    '30 POINTS',
    '70 POINTS',
    '50 POINTS',
    '80 POINTS'
  ];
  
  const segColors = [
    "#00B3BF", // TEAL 
    "#FF4DBA", // PINK
    "#EB2931", // RED 
    "#0067B0", // BLUE 
    "#FBB03B", // YELLOW 
    "#F15A24", // ORANGE 
    "#009245", // GREEN 
    "#662D91", // PURPLE
  ];
  

  function onFinished(winner) {
    if (winner === segments[0]) {
      setQuestion("_______ Sherwin was one of two SHERWIN-WILLIAMS founders")
      setWord('HENRY')
      setColor("#00B3BF")
      setPoints(40)
    } else if (winner === segments[1]) {
      setQuestion("Percy ___ was hired as the first paint chemist in the industry")
      setWord('NEYMAN')
      setColor("#FF4DBA")
      setPoints(60)
    } else if (winner === segments[2]) {
      setQuestion("In what city was SHERWIN-WILLIAMS founded?")
      setWord('CLEVELAND')
      setColor("#EB2931")
      setPoints(20)
    } else if (winner === segments[3]) {
      setQuestion("What's the 2020 Color of the Year?")
      setWord('NAVAL')
      setColor("#0067B0")
      setPoints(10)
    }else if (winner === segments[4]) {
      setQuestion("What year was SHERWIN-WILLIAMS founded?")
      setWord('1866')
      setColor("#FBB03B")
      setPoints(30)
    } else if (winner === segments[5]) {
      setQuestion("___ Williams was one of two SHERWIN-WILLIAMS founders")
      setWord('EDWARD')
      setColor("#F15A24")
      setPoints(70)
    } else if (winner === segments[6]) {
      setQuestion('First patent for ready-mixed paint was taken out in ___')
      setWord('1867')
      setColor("#009245")
      setPoints(50)
    } else if (winner === segments[7]) {
      setQuestion("First patent for ready-mixed paint was taken out by D.R. ___")
      setWord('AVERILL')
      setColor("#662D91")
      setPoints(80)
    } 
    setShowGuess(true)
  }
  // #142CA2 #DA0D21

const reset = () => {
  console.log("clicked reset")
  setShowGuess(false)
  setQuestion("")
  setWord("")
  setColor("")
  setPoints("")
  console.log(showGuess)
}

  return (
    <>
      { showGuess ? <Guess word={word} color={color} question={question} points={points} reset={reset}/> : 
      <div onClick={playWheel}>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={
          (winner) => onFinished(winner)
        }
      />
      </div>
      } 
    </>
  )
  
}