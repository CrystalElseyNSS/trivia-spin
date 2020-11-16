import React, { useEffect, useState, createContext } from 'react';
import { Char } from './Char';
import { KeyBoard } from './KeyBoard';
import Confetti from 'react-confetti'
import '../app/App.css';


export const WinContext = createContext()

export const Guess = ( word ) => {

    const wordStr = word.word
    const color = word.color
    const count = wordStr.length
    const [ guesses,setGuesses ] = useState([])
    const [ hasWon, setHasWon ] = useState(false)
    const width = window.innerWidth
    const height = window.innerHeight
           
    const guess = (c) =>{
      if (guesses.join('').indexOf(c)<0)
        setGuesses([...guesses,c])
    }
    
    const win = ()=>{
      setHasWon(true)
    }
    
    useEffect(()=>{
      if (guesses.length>0) {
        const guessesStr = guesses.join('')
        let n = 0
        for (let i=0;i<wordStr.length;i++) {
          const c = wordStr.charAt(i)
          if (guessesStr.indexOf(c)>=0) {
            n++
          }
        }
        if (n===count) win()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guesses])
    
    return (
      <>
        { hasWon ? <h1 id="huzzah">HUZZAH!<Confetti width={width} height={height}></Confetti></h1> : 

          <div>
      
            <div className="answer">
              {(new Array(wordStr.length)).fill(0).map((e,i) => {
                const c = wordStr.charAt(i)
                const reveal = guesses.join('').indexOf(c)>=0
                if (c===' ') { return <div key={i} className="col-12"></div> }
                return ( <Char key={i} value={c} reveal={reveal} color={color} numberOfPieces={400} gravity={0.2}/> )
              })}
            </div>
      
            <div>
              <KeyBoard onClick={guess} data={guesses} />
            </div>

          </div>
        }
      </>
    )
  }