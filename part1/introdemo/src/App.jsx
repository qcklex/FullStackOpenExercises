import { useState } from 'react'
import React from 'react'
import Statistics from '../../unicafe/components/Statistics'

const Button = (props) => {

  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  function handleSetGood(){
    setGood(good + 1)
  }
  function handleSetNeutral(){
    setNeutral(neutral + 1)
  }
  function handleSetBad(){
    setBad(bad + 1)
  }

    return (
      <>
        <div>
          <h1>give feedback</h1>
          <Button onClick={handleSetGood} text="good"/>
          <Button onClick={handleSetNeutral} text="neutral"/>
          <Button onClick={handleSetBad} text="bad"/>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </>
  )
}




export default App
  