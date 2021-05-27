import React, { useState } from 'react';
import { WheelComponent } from './WheelCanvas';
import useSound from 'use-sound';
import click from '../assets/click.mp3';
import wheel from '../assets/wheel.mp3';
import { Guess } from '../guess/Guess';

export const Wheel = () => {
  
  const [ word, setWord ] = useState("")
  // const [ color, setColor ] = useState("")
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
    "#F8D3C5", 
    "#DDE6D5",
    "#A3B899",
    "#FCEEE9",
    "#F8D3C5", 
    "#DDE6D5",
    "#A3B899",
    "#FCEEE9",


  ];
  

  function onFinished(winner) {
    if (winner === segments[0]) {
      setQuestion("What was Alan Rickman's first feature film?")
      setWord('DIE_HARD')
      // setColor("#F8D3C5")
      setPoints(40)
    } else if (winner === segments[1]) {
      setQuestion("What animal did Indiana Jones hate?")
      setWord('SNAKES')
      // setColor("#DDE6D5")
      setPoints(60)
    } else if (winner === segments[2]) {
      setQuestion("What was E.T.'s favorite candy?")
      setWord('REESES_PIECES')
      // setColor("#AEB899")
      setPoints(20)
    } else if (winner === segments[3]) {
      setQuestion("What year does Marty McFly travel back to in the first Back to the Future movie?")
      setWord('1955')
      // setColor("#FCEEE9")
      setPoints(10)
    }else if (winner === segments[4]) {
      setQuestion("What 1980's theme song inspired its own movie?")
      setWord('EYE_OF_THE_TIGER')
      // setColor("#F8D3C5")
      setPoints(30)
    } else if (winner === segments[5]) {
      setQuestion("What is the name of the spirit who possesses Sigourney Weaver's character in Ghostbusters?")
      setWord('ZUUL')
      // setColor("#DDE6D5")
      setPoints(70)
    } else if (winner === segments[6]) {
      setQuestion("What was Baby's real name in Dirty Dancing?")
      setWord('FRANCES')
      // setColor("#AEB899")
      setPoints(50)
    } else if (winner === segments[7]) {
      setQuestion("What color did Daniel have to paint Mr. Miagi's house in The Karate Kid?")
      setWord('DIE_HARD')
      // setColor("#FCEEE9")
      setPoints(80)
    } 
    setShowGuess(true)
  }
  // #142CA2 #DA0D21

const reset = () => {
  setShowGuess(false)
  setQuestion("")
  setWord("")
  // setColor("")
  setPoints("")
}

  return (
    <>
      { showGuess ? <Guess word={word} /*color={color}*/ question={question} points={points} reset={reset}/> : 
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