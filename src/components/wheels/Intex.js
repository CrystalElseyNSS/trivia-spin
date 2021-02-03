import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Intex = () => {
  
  const [ word, setWord ] = useState("")
  const [ color, setColor ] = useState("")
  const [ question, setQuestion ] = useState("")
  const [ points, setPoints ] = useState(0)
  const [ showGuess, setShowGuess ] = useState(false)
  const [ playClick ] = useSound(click, { volume: 0.25 })
  const [ playWheel ] = useSound(wheel, { volume: 0.25 })
           
  document.addEventListener('mousedown', playClick);

  const segments = [
    '400 POINTS',
    '600 POINTS',
    '200 POINTS',
    '100 POINTS',
    '300 POINTS',
    '700 POINTS',
    '500 POINTS',
    '800 POINTS'
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
      setQuestion("What color were the Desert Storm Rags before bleaching?")
      setWord('BLACK')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("The New White Knits stocked in your DSC from Intex come from ___ material")
      setWord('RAW')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("The 1-lb Roll of Rags caters to DIY-ers & ___ contractors")
      setWord('PROFESSIONAL')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("The Desert Storm Rag is ___, so it won't bleed, fade or run with solvents")
      setWord('COLORFAST')
      setColor("#0067B0")
      setPoints(100)
    }else if (winner === segments[4]) {
      setQuestion("How many Nationally DSC Skus does Intex have in your DSCs")
      setWord('7')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("Is PFC cut to an exact and consistent size?")
      setWord('YES')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion('Intex been a supplier to Sherwin-Williams for ___ years')
      setWord('27')
      setColor("#009245")
      setPoints(500)
    } else if (winner === segments[7]) {
      setQuestion("Eco Soft is produced from 100% ___?")
      setWord('COTTON')
      setColor("#662D91")
      setPoints(800)
    } 
    setShowGuess(true)
  }
  // #142CA2 #DA0D21
  return (
    <>
      { showGuess ? <Guess word={word} color={color} question={question} points={points}/> : 
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