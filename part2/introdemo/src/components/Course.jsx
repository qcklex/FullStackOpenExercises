import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
  

const Header = ({course}) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Content = ({course}) => {

const arr = course.parts.map(part => (part.exercises))

const someMagicHere = 0;

const totalExercisesNumber = arr.reduce((p, t) => p + t)

console.log(totalExercisesNumber)
const content = course.parts.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)

return (
        <>
        <div>{content}</div>
        { <div> 
            <strong>
                total of {totalExercisesNumber} exercises 
            </strong> 
        </div>}
        </>
    )
}

const Course = ({course}) => {

   
    
    return (
        <>
            <Header course={course}/>
            <Content course={course}/>
        </>
    )
}


export default Course 