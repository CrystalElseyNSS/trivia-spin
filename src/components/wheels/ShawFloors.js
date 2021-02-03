import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const ShawFloors = () => {
  
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
      setQuestion("___ is the Shaw Floors digitial experience platform")
      setWord('SHAWNOW')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("Since 2012, Shaw has donated $__ mil to St. Jude's")
      setWord('14')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("ProKure is a hospital-type disinfection & ___ solution")
      setWord('DEODORIZATION')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("___ is our sheet vinyl product with a 5-yr rip/tear/gauge warranty")
      setWord('AMPED')
      setColor("#0067B0")
      setPoints(100)
    }else if (winner === segments[4]) {
      setQuestion("___ is the third most frequent complaint made by residents")
      setWord('NOISE')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("Our all-new Relaxed Tonal carpet features Bleach & ___ technology")
      setWord('FADE')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion("This 2mm glue down product's wear layer is 60% greater than competitors'")
      setWord('SURPASS')
      setColor("#009245")
      setPoints(500)
    } else if (winner === segments[7]) {
      setQuestion("___ Base is available from Shaw Floors")
      setWord('COVE')
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