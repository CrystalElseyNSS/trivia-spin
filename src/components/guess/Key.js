import React from 'react'
import '../../app/App.css'

export const Key = (props) => {

  const { value, reveal, color } = props

  if (/[A-Za-z0-9]/.test(value)) {
    if (reveal) {
      return (
        <span className="correct" style={{ backgroundColor: color }}>{value}</span>
      )
    }
    return (
      <span className="correct" style={{ backgroundColor: color }}>?</span>
    )
  }
}