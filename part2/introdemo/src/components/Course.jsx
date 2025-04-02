import React from 'react'
import ReactDOM from 'react-dom'

  
const Header = ({course}) => {
    return (
        <h2>{course.name}</h2>
    )
}

const Content = ({course}) => {

const content = course.parts.map(part => <div key={part.id}>{part.name} {part.exercises}</div>)

    return (
        <div>{content}</div>
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