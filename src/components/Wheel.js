import React, { createContext, useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import 'react-wheel-of-prizes/dist/index.css';

export const WordContext = createContext()

export const Wheel = (props) => {

  const [word, setWord] = useState("")
  const blue = "FOUNTAIN"
  // setWord(blue) 
  // console.log(blue)

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

  const red = "HEARTTHROB"
  const yellow = "FORSYTHIA"
  const green = "ENVY"

  function onFinished(winner) {
    if (winner === segments[0]) {
      setWord(blue)
      .then(console.log(word));
      debugger 
    } else if (winner === segments[2]) {
      setWord(red)
      .then(console.log(word));
      debugger
    } else if (winner === segments[4]) {
      setWord(yellow)
      .then(console.log(word));
      debugger
    } else if (winner === segments[6]) {
      setWord(green)
      .then(console.log(word));
      debugger
    } else {
      console.log(winner)
    }
    return word
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

      <WordContext.Provider 
        value={{ word }}>
        {props.children}
      </WordContext.Provider>
    </>
  )
}