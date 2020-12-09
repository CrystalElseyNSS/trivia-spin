import React, { useState } from 'react';
import { WheelComponent } from './WheelBuild';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';
import 'react-wheel-of-prizes/dist/index.css';

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
      setQuestion("_______ Sherwin was one of two SHERWIN-WILLIAMS founders")
      setWord('HENRY')
      setColor("#00B3BF")
      setPoints(400)
    } else if (winner === segments[1]) {
      setQuestion("___  ___ was hired as the first paint chemist in the industry")
      setWord('PERCY NEYMAN')
      setColor("#FF4DBA")
      setPoints(600)
    } else if (winner === segments[2]) {
      setQuestion("In what city was SHERWIN-WILLIAMS founded?")
      setWord('CLEVELAND')
      setColor("#EB2931")
      setPoints(200)
    } else if (winner === segments[3]) {
      setQuestion("What's the 2020 Color of the Year?")
      setWord('NAVAL')
      setColor("#0067B0")
      setPoints(100)
    }else if (winner === segments[4]) {
      setQuestion("What year was SHERWIN-WILLIAMS founded?")
      setWord('1866')
      setColor("#FBB03B")
      setPoints(300)
    } else if (winner === segments[5]) {
      setQuestion("___ Williams was one of two SHERWIN-WILLIAMS founders")
      setWord('EDWARD')
      setColor("#F15A24")
      setPoints(700)
    } else if (winner === segments[6]) {
      setQuestion('First patent for ready-mixed paint was taken out in ___')
      setWord('1867')
      setColor("#009245")
      setPoints(500)
    } else if (winner === segments[7]) {
      setQuestion("First patent for ready-mixed paint was taken out by D.R. ___")
      setWord('AVERILL')
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
        primaryColor='white'
        contrastColor='black'
        buttonText='SPIN'
        onFinished={
          (winner) => onFinished(winner)
        }
      />
      </div>
      } 
    </>
  )
  
}