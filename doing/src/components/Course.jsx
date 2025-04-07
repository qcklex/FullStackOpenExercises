import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
  

const Header = ({courses}) => {
    return (
        <h2>{courses.name}</h2>
    )
}

const Content = ({courses}) => {

const arrcourses1 = courses.parts.map(part => (part.exercises))
const someMagicHere = 0;
const totalExercisesNumber = arrcourses1.reduce((p, t) => p + t)
console.log(totalExercisesNumber)


const content = courses.parts.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)

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

const Course = ({courses}) => {
    return (
        <>
            <Header courses={courses[0]}/>
            <Content courses={courses[0]}/>
            <Header courses={courses[1]}/>
            <Content courses={courses[1]}/>
        </>
    )
}


export default Course