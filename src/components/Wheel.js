import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import { Guess } from './Guess';
import 'react-wheel-of-prizes/dist/index.css';

export const Wheel = () => {
  
  const [ word, setWord ] = useState("X")
  const [ color, setColor ] = useState("")
  const [ showGuess, setShowGuess ] = useState(false)

  const segments = [
    'Name this teal paint',
    'Name this pink paint',
    'Name this red paint',
    'Name this blue paint',
    'Name this yellow paint',
    'Name this orange paint',
    'Name this green paint',
    'Name this purple paint'
  ];
  
  const segColors = [
    "#56B5CA", //Name this paint color (Fountain)
    "#ED939D", //Name this pink paint (Amaryllis)
    "#EE2528", //Name this paint color (Heartthrob)
    "#105F97", // Blue: Hyper
    "#FCD200", //Name this paint color (Forsythia)
    "#EC8431", //Name this paint color (Navel)
    "#358C3F", //Name this paint color (Envy)
    "#7E6596", //Purple: Clematis
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
      { showGuess ? <Guess word={word} color={color}/> : 
      
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
      } 
    </>
  )
  
}