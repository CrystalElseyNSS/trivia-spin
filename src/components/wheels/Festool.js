import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Festool = () => {
  
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
      setQuestion("Can we arrange for more training through joint calls or group trainings?")
      setWord('YES')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("Of tools/accessories/consumables, which is covered by a 30-day guarantee period?")
      setWord('TOOLS')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("Currently, how many tools can be ordered out of the DSC?")
      setWord('9')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("Can we order wood cutting tools or the blades and parts for DSC?")
      setWord('NO')
      setColor("#0067B0")
      setPoints(100)
    }else if (winner === segments[4]) {
      setQuestion("How many years is the warranty on Festool tools and dust extractors? ")
      setWord('3')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("What does the AC stand for on the 36 E AC dust extractor used with the Planex?")
      setWord('AUTOCLEAN')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion('With the 36 E AC AUTOCLEAN function, the filter should ___ be cleaned by hand')
      setWord('OCCASIONALLY')
      setColor("#009245")
      setPoints(500)
    } else if (winner === segments[7]) {
      setQuestion("Festoolusa.com/___ has info on our products available through Sherwin-Williams")
      setWord('PAINT')
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