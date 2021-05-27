import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PointsContext } from '../../providers/PointsProvider';
import { KeyBoard } from './KeyBoard';
import { Key } from './Key';
// import { DrawStar } from '../confetti/DrawStar';
import useSound from 'use-sound';
import trombone from '../assets/trombone.mp3';
import click from '../assets/click.mp3';
import Confetti from 'react-confetti'
import '../../app/App.css'

export const Guess = (word) => {

  const wordStr = word.word
  // const color = word.color
  const question = word.question
  const points = word.points
  const resetGame = word.reset
  const booth = word.boothId
  const count = wordStr.length
  const [guesses, setGuesses] = useState(["_"])
  const [hasWon, setHasWon] = useState(false)
  const [hasLost, setHasLost] = useState(false)
  const { gameOverText, addPoints } = useContext(PointsContext)
  const [guessCount, setGuessCount] = useState(15)
  const width = window.innerWidth
  const height = window.innerWidth
  const [playTrombone] = useSound(trombone, { volume: 0.25 })
  const [playClick] = useSound(click, { volume: 0.1 })

  document.addEventListener('mousedown', playClick);

  const { player } = useParams()
  const guess = (c) => {
    if (guesses.join('').indexOf(c) < 0)
      setGuesses([...guesses, c])
    setGuessCount(guessCount - 1)
  }

  const win = () => {
    setHasWon(true)
    // addPoints(points, player, booth)
  }

  const lose = () => {
    setHasLost(true)
    playTrombone()
  }

  useEffect(() => {
    if (guesses.length > 0) {
      const guessesStr = guesses.join('')
      let n = 0
      for (let i = 0; i < wordStr.length; i++) {
        const c = wordStr.charAt(i)
        if (guessesStr.indexOf(c) >= 0) {
          n++
        }
      }
      if (n === count) win()
      if (guessCount === 0) lose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guesses])
  return (
    <>
      { hasWon ?
        <div className="gameOverContainer">
          <Confetti width={width} height={height} numberOfPieces={900} gravity={0.2} colors={["#F8D3C5", "#DDE6D5", "#A3B899", "#FCEEE9", "#F7E7CE", "D3D0C9", "whitesmoke"]}></Confetti>
          {/* { gameOverText.length ?
            <h1 className="gameOver">{gameOverText}</h1>
            : <h1 className="gameOver">CHECKING YOUR ANSWER...</h1>
          } */}
           <h1 className="gameOver">"A PERSON SHOULD NOT BELIEVE IN AN -ISM. HE SHOULD BELIEVE IN HIMSELF." (FERRIS BUELLER)</h1>
          <div className="playAgain" id="playAgainWin" onClick={() => resetGame()}>PLAY AGAIN</div>
        </div>
        :
        <div>
          {hasLost ?
            <div className="gameOverContainer">
                <h1 className="gameOver">SORRY. JUMP IN THE DELOREAN TO GO BACK AND TRY AGAIN!</h1>
                <div className="playAgain" id="playAgainLose" onClick={() =>resetGame()}>PLAY AGAIN</div>
            </div>
            :
            <div id="guessContainer">
              <div className="goBack" onClick={() => resetGame()}>GO BACK</div>
              <div className="question">
                <p>{question}</p>
              </div>
              <div className="answerDiv">
                <div className="answer">
                  {(new Array(wordStr.length)).fill(0).map((e, i) => {
                    const c = wordStr.charAt(i)
                    const reveal = guesses.join('').indexOf(c) >= 0
                    return (<Key key={i} value={c} reveal={reveal} /*color={color}*/ />)
                  })}
                </div>
              
                  <div id="counter" /*style={{ backgroundColor: color }}*/>{guessCount}</div>
                
              </div>
              <div>
                <div className="keyboard">
                  <KeyBoard onClick={guess} data={guesses} />
                </div>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}