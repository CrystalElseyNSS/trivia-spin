import React from 'react';
import '../app/App.css';

export const Char = (props) => {
    const {value,reveal} = props
    if (/[A-Za-z]/.test(value)) {
      if (reveal) {
        return (
          <span className="correct">{value}</span>
        )
      }
      return (
        <span className="correct">?</span>
      )
    }
    if (value===' ') {
      return (
        <span className="correct"></span>
      )
    }
    return (
      <span className="correct">{value}</span>
    )
  }

