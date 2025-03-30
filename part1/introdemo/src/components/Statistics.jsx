import React from 'react'
import { useState } from 'react'

export default function Statistics (props){
  const all = (props.good + props.neutral + props.bad)
  const average = all / 3
  const positive = (props.good / all) * 100

  return (
    <div>
     <h1>statistics</h1>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </div>
      
  )

}
