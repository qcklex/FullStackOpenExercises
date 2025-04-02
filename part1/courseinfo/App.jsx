import React from 'react'

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14


const App = () => {



const PartExercises1 = () => {
  return (
    <p>
    {part1} {exercises1}
  </p>  )}

const PartExercises2 = () => {
  return (
    <p>
    {part2} {exercises2}
</p>  )}

const PartExercises3 = () => {
  return (
    <p>
    {part3} {exercises3}
</p>  )}




    const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

const Header = ({ course }) => {
  return (
  <h1>{course.name}</h1>
  )}

  const Content = ({ parts }) => {
    return (    
      <div>
        <PartExercises1 />
        <PartExercises2 />
        <PartExercises3 />
      </div>
    )}

    const Total = ({ parts }) => {
      return (
          <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
      )}

  // const-definitions
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts} />
      <Total  parts={course.parts}/>
    </div>
  )
}

  export default App



//Header takes care of rendering the name of the course,
// Content renders the parts and their number of exercises,
// Total renders the total number of exercises.