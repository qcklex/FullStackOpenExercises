import React from 'react'
import './statistics.css'

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} 
      
      <div className='value'>{props.value}</div>
      
    </div>
  )}

 const Statistics = (props) => {
  const all = (props.good + props.neutral + props.bad)
  const average = all / 3
  const positive = (props.good / all) * 100

  return(
    <div>
     <h1>statistics</h1>
     {all > 0 ?
     <div className='statistics'>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <div>all<div className='value'>{all}</div></div>
      <div>average <div className='value'>{average}</div></div>
      <div>positive <div className='value'>{positive}</div></div>
      </div> : <div> No feedback given</div>}
    </div>
      )
}

export default Statistics