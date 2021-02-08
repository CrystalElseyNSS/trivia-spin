import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const USGypsum = () => {
  
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
      setQuestion("USG Sheetrock® Brand All Purpose joint compound is a ___ weight joint compound")
      setWord('CONVENTIONAL')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("USG's finishing products include both ready-mix and ___-type joint compounds")
      setWord('SETTING')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("USG ___ Brand has the highest Net Promoter score in its category")
      setWord('SHEETROCK')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("USG Sheetrock® Brand ___ compound weighs ~40% less than conventional compounds")
      setWord('ULTRALIGHTWEIGHT')
      setColor("#0067B0")
      setPoints(100)
    }else if (winner === segments[4]) {
      setQuestion("In cold weather applications of joint ___, building temps should stay above 55 °F")
      setWord('FINISHING')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("USG Sheetrock® Brand Dust Control meets ___ silica requirements & reduces dust")
      setWord('OSHA')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion('USG Sheetrock® Brand Paper Joint Tape is sanded for increased ___')
      setWord('BOND')
      setColor("#009245")
      setPoints(500)
    } else if (winner === segments[7]) {
      setQuestion("USG Sheetrock® Brand Plus 3 joint compound is a _________ joint compound")
      setWord('LIGHTWEIGHT')
      setColor("#662D91")
      setPoints(800)
    } 
    setBoothId('327752037')
    setShowGuess(true)
  }

  return (
    <>
      { showGuess ? <Guess word={word} color={color} question={question} points={points} boothId={boothId}/> : 
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