import React from 'react';
import '../app/App.css';

export const Char = ( props)  => {
  
  const { value, reveal, color } = props

    if (/[A-Za-z]/.test(value)) {
      if (reveal) {
        return (
          <span className="correct" style={{backgroundColor: color, boxShadow: `0px 0px 5px 3px ${color}`}}>{value}</span>
        )
      }
      return (
        <span className="correct" style={{backgroundColor: color, boxShadow: `0px 0px 5px 3px ${color}`}}>?</span>
      )
    }
    if (value===' ') {
      return (
        <span className="correct" style={{backgroundColor: color, boxShadow: `0px 0px 5px 3px ${color}`}}></span>
      )
    }
    return (
      <span className="correct" style={{backgroundColor: color, boxShadow: `0px 0px 5px 3px ${color}`}}>{value}</span>
    )
  }

