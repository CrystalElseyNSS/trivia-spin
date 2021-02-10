import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const SherwinNational = () => {
  
  const [ word, setWord ] = useState("")
  const [ color, setColor ] = useState("")
  const [ question, setQuestion ] = useState("")
  const [ points, setPoints ] = useState(0)
  const [ boothId, setBoothId ] = useState('')
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
      setQuestion("You can find info about National Accounts on the Client ___ System")
      setWord('MANAGEMENT')
      setColor("#00B3BF")
      setPoints(40)
    } else if (winner === segments[1]) {
      setQuestion("Sherwin-Williams has an ___ agreement with 18 of 20 top Homebuilders")
      setWord('EXCLUSIVE')
      setColor("#FF4DBA")
      setPoints(60)
    } else if (winner === segments[2]) {
      setQuestion("Who is our largest Franchise painting contractor?")
      setWord('CERTAPRO')
      setColor("#EB2931")
      setPoints(20)
    } else if (winner === segments[3]) {
      setQuestion("What under-our-feet solution can we sell in the Multi-Family market?")
      setWord('FLOORCOVERING')
      setColor("#0067B0")
      setPoints(10)
    }else if (winner === segments[4]) {
      setQuestion("What color shirt is Mike Robidoux wearing?")
      setWord('YELLOW')
      setColor("#FBB03B")
      setPoints(30)
    } else if (winner === segments[5]) {
      setQuestion("Brookdale is part of what market segment? ")
      setWord('HEALTHCARE')
      setColor("#F15A24")
      setPoints(70)
    } else if (winner === segments[6]) {
      setQuestion('What market segment pre-approves customers for a charge account?')
      setWord('HOSPITALITY')
      setColor("#009245")
      setPoints(50)
    } else if (winner === segments[7]) {
      setQuestion("What segment has opportunity in either a Bull or a Bear Market?")
      setWord('GOVERNMENT')
      setColor("#662D91")
      setPoints(80)
    } 
    setBoothId('328136597')
    setShowGuess(true)
  }

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