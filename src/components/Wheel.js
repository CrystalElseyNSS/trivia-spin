import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import useSound from 'use-sound';
import click from './click.mp3';
import wheel from './wheel.mp3';
import { Guess } from './Guess';
import 'react-wheel-of-prizes/dist/index.css';

export const Wheel = () => {
  
  const [ word, setWord ] = useState("")
  const [ color, setColor ] = useState("")
  const [ showGuess, setShowGuess ] = useState(false)
  const [ playClick ] = useSound(click, { volume: 0.25 })
  const [ playWheel ] = useSound(wheel, { volume: 0.25 })
           
  document.addEventListener('mousedown', playClick);


  const segments = [
    'Name the teal paint',
    'Name the pink paint',
    'Name the red paint',
    'Name the blue paint',
    'Name the yellow paint',
    'Name the orange paint',
    'Name the green paint',
    'Name the purple paint'
  ];
  
  const segColors = [
    "#56B5CA", // FOUNTAIN
    "#ED939D", // AMARYLLIS
    "#EE2528", // HEARTTHROB
    "#105F97", // HYPER
    "#FCD200", // FORSYTHIA
    "#EC8431", // NAVEL
    "#358C3F", // ENVY
    "#7E6596", // CLEMATIS
  ];
  

  function onFinished(winner) {
    if (winner === segments[0]) {
      setWord('FOUNTAIN')
      setColor("#56B5CA")
    } else if (winner === segments[1]) {
      setWord('AMARYLLIS')
      setColor("#ED939D")
    } else if (winner === segments[2]) {
      setWord('HEARTTHROB')
      setColor("#EE2528")
    } else if (winner === segments[3]) {
      setWord('HYPER')
      setColor("#105F97")
    }else if (winner === segments[4]) {
      setWord('FORSYTHIA')
      setColor("#FCD200")
    } else if (winner === segments[5]) {
      setWord('NAVEL')
      setColor("#EC8431")
    } else if (winner === segments[6]) {
      setWord('ENVY')
      setColor("#358C3F")
    } else if (winner === segments[7]) {
      setWord('CLEMATIS')
      setColor("#7E6596")
    } 
    setShowGuess(true)
  }

  return (
    <>
      { showGuess ? <Guess word={word} color={color} /> : 
      <div onClick={playWheel}>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winning_segment='won 10'
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        onFinished={
          (winner) => onFinished(winner)
        }
      />
      </div>
      } 
    </>
  )
  
}