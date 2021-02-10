import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Werner = () => {
  
  const [ word, setWord ] = useState("")
  const [ color, setColor ] = useState("")
  const [ question, setQuestion ] = useState("")
  const [ points, setPoints ] = useState(0)
  const [ showGuess, setShowGuess ] = useState(false)
  const [ boothId, setBoothId ] = useState("") 
  const [ playClick ] = useSound(click, { volume: 0.25 })
  const [ playWheel ] = useSound(wheel, { volume: 0.25 })
           
  document.addEventListener('mousedown', playClick);

  const segments = [
    '40 POINTS',
    '60 POINTS',
    '20 POINTS',
    '30 POINTS',
    '10 POINTS',
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
      setQuestion("What is the load capacity of a Type 2 ladder in pounds?")
      setWord('225')
      setColor("#00B3BF")
      setPoints(40)
    } else if (winner === segments[1]) {
      setQuestion("A ____ ladder is the preferred type of ladder used by a Painter")
      setWord('NEYMAN')
      setColor("#FF4DBA")
      setPoints(60)
    } else if (winner === segments[2]) {
      setQuestion("How many points of contact should a ladder have while climbing it?")
      setWord('3')
      setColor("#EB2931")
      setPoints(20)
    } else if (winner === segments[3]) {
      setQuestion("For every 4’ of climb height, a ladder base should be __ft from the wall")
      setWord('1')
      setColor("#0067B0")
      setPoints(30)
    }else if (winner === segments[4]) {
      setQuestion("Is it safe to stand on the top rung of a ladder?")
      setWord('NO')
      setColor("#FBB03B")
      setPoints(10)
    } else if (winner === segments[5]) {
      setQuestion("What is the preferred ladder material for a Painter?")
      setWord('ALUMINUM')
      setColor("#F15A24")
      setPoints(70)
    } else if (winner === segments[6]) {
      setQuestion("What's the recommended ladder material for working with electricity?")
      setWord('FIBERGLASS')
      setColor("#009245")
      setPoints(50)
    } else if (winner === segments[7]) {
      setQuestion("__ft higher than ladder height is the maximum safe reach height on a ladder")
      setWord('4')
      setColor("#662D91")
      setPoints(80)
    } 
    setShowGuess(true)
    setBoothId('327752057')
  }
  // #142CA2 #DA0D21

  const reset = () => {
    setShowGuess(false)
    setQuestion("")
    setWord("")
    setColor("")
    setPoints("")
  }

  return (
    <>
      { showGuess ? <Guess word={word} color={color} question={question} points={points} boothId={boothId} reset={reset}/> : 
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