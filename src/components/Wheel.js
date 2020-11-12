import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import { Guess } from './Guess';
import 'react-wheel-of-prizes/dist/index.css';

export const Wheel = () => {
  
  const [ word, setWord ] = useState("X")

  const segments = [
    'Name this blue paint',
    'Womp womp',
    'Name this red paint',
    'Spin again',
    'Name this yellow paint',
    '50 points!',
    'Name this green paint',
    'Spin again'
  ];
  
  const segColors = [
    "#56B5CA", //Name this paint color (Fountain)
    "#F10792", //Womp womp
    "#EE2528", //Name this paint color (Heartthrob)
    "#0031E7", //Spin again
    "#FCD200", //Name this paint color (Forsythia)
    "#F05D27", //50 points!
    "#358C3F", //Name this paint color (Envy)
    "#932B8E", //Spin again
  ];
  

  function onFinished(winner) {
    if (winner === segments[0]) {
      setWord('FOUNTAIN')
    } else if (winner === segments[2]) {
      setWord('HEARTTHROB')
    } else if (winner === segments[4]) {
      setWord('FORSYTHIA')
    } else if (winner === segments[6]) {
      setWord('ENVY')
    } else {
      setWord('X')
      console.log(word)
      window.location.reload()
    }
  }

  return (
    <>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winning_segment='won 10'
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        onFinished={(winner) => onFinished(winner)}
      />
      <Guess word={word}/>
    </>
  )
}