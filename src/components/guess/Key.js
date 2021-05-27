import React from 'react'
import '../../app/App.css'

export const Key = (props) => {

  const { value, reveal/*, color*/ } = props
  if (/[A-Za-z0-9 _]/.test(value)) {
    if ( value === "_") {
      return (
        <span className="correct" style={{ backgroundColor: "transparent", border: "none" }}></span>
      )
    }
    if (reveal) {
      return (
        <span className="correct" style={{ backgroundColor: "#A3B899" }}>{value}</span>
      )
    }
    return (
      <span className="correct" style={{ backgroundColor: "#A3B899" }}>?</span>
    )
  }
}