import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Titan = () => {
  
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
    '500 POINTS',
    '300 POINTS',
    '700 POINTS',
    '100 POINTS',
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
      setQuestion("The new pumping technology used on the Elite 3000, 3500 & 4500 is ____?")
      setWord('PERMASTROKE')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("The name of Titan's new silicone & heavy body coatings sprayers is ____?")
      setWord('HYDRAX')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("Our #1 selling sprayer, the Titan 440, is part of what sprayer series?")
      setWord('IMPACT')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("What is the trade name of Titan's exclusive airless cut-in tool?")
      setWord('SPRAYGUIDE')
      setColor("#0067B0")
      setPoints(500)
    }else if (winner === segments[4]) {
      setQuestion("What's the length of the warranty on Elite 3000, 3500 & 4500 fluid pumps?")
      setWord('LIFETIME')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("What is the acronym used for Titan's online promotions redemption system?")
      setWord('THOR')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion('What color flag does the Titan TR1 HEA Reversible tip have?')
      setWord('GREEN')
      setColor("#009245")
      setPoints(100)
    } else if (winner === segments[7]) {
      setQuestion("In what state is Titan US headquarters located?")
      setWord('MINNESOTA')
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