import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Shurtape = () => {
  
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
      setQuestion("What brand of tape features Paintblock Technology?")
      setWord('FROGTAPE')
      setColor("#00B3BF")
      setPoints(40)
    } else if (winner === segments[1]) {
      setQuestion("Which color of FrogTape is only available in pro multipacks?")
      setWord('BLUE')
      setColor("#FF4DBA")
      setPoints(60)
    } else if (winner === segments[2]) {
      setQuestion("Which color of FrogTape works best in hot or humid weather?")
      setWord('ORANGE')
      setColor("#EB2931")
      setPoints(20)
    } else if (winner === segments[3]) {
      setQuestion("Which color of FrogTape works best on freshly painted surfaces?")
      setWord('YELLOW')
      setColor("#0067B0")
      setPoints(10)
    }else if (winner === segments[4]) {
      setQuestion("How many days can CP66 be left on a surface before painting? ")
      setWord('3')
      setColor("#FBB03B")
      setPoints(30)
    } else if (winner === segments[5]) {
      setQuestion("Which brand of Duct tape is Ferociously strong?")
      setWord('TREX')
      setColor("#F15A24")
      setPoints(70)
    } else if (winner === segments[6]) {
      setQuestion('How many different FrogTape brand painter’s tape exist today?')
      setWord('4')
      setColor("#009245")
      setPoints(50)
    } else if (winner === segments[7]) {
      setQuestion("What month does the FrogTape sweepstakes begin?")
      setWord('MARCH')
      setColor("#662D91")
      setPoints(80)
    } 
    setBoothId('327752017')
    setShowGuess(true)
  }

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