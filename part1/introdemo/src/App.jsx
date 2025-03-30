import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
    </div>
  )
}

export default App
  


// const PartExercises1 = () => {
//   return (
//     <p>
//     {part1} {exercises1}
//   </p>  )}

// const PartExercises2 = () => {
//   return (
//     <p>
//     {part2} {exercises2}
// </p>  )}

// const PartExercises3 = () => {
//   return (
//     <p>
//     {part3} {exercises3}
// </p>  )}




//     const course = {
//     name: 'Half Stack application development',
//     parts: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
// }

// const Header = ({ course }) => {
//   return (
//   <h1>{course.name}</h1>
//   )}

//   const Content = ({ parts }) => {
//     return (    
//       <div>
//         <PartExercises1 />
//         <PartExercises2 />
//         <PartExercises3 />
//       </div>
//     )}

//     const Total = ({ parts }) => {
//       return (
//           <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
//       )}

//   // const-definitions
//   return (
//     <div>
//       <Header course={course}/>
//       <Content parts={course.parts} />
//       <Total  parts={course.parts}/>
//     </div>
//   )


//Header takes care of rendering the name of the course,
// Content renders the parts and their number of exercises,
// Total renders the total number of exercises.
