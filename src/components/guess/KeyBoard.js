import React from 'react';
import { Button } from 'reactstrap';
import '../../app/App.css'

export const KeyBoard = (props) => {
    const {onClick, data} = props 

    const click = c=>{
      if (typeof(onClick)==='function') {
        onClick(c)
      }
    }

    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'

    return (
      <div id="keyboard" >
        <div id="keys">
          {
            ABC.split('').map((e,i)=>{
              const disabled = data.join('').indexOf(e)>=0
              const btn = {}
              const classNames = ['m-1']
              if (disabled) {
                btn.secondary = true
                classNames.push('shadow-inset')
              } else {
                btn.light = true
                btn.shadow = 'sm'
              }
              return (
                <div key={i} className="key">
                  <Button onClick={()=>click(e)} disabled={disabled}>{e}</Button>
                </div>
              )
            })
          }
        </div>
      
      </div>
    )
  }