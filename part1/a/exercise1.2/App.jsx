
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14


const Header = () => {
return (
<h1>{course}</h1>
)}

const partExercises1 = () => {
  return (
    <p>
    {part1} {exercises1}
</p>  )}
const partExercises2 = () => {
  return (
    <p>
    {part2} {exercises2}
</p>  )}

const partExercises3 = () => {
  return (
    <p>
    {part3} {exercises3}
</p>  )}


const Content = () => {
  return (    
    <div>
      <PartExercises1 />
      <PartExercises2 />
      <PartExercises3 />
    </div>
  )}

  const Total = () => {
    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> 
    )}



const App = () => {
  // const-definitions
  return (
    <div>
      <Header />
      <Content  />
      <Total  />
    </div>
  )}

  export default App



//Header takes care of rendering the name of the course,
// Content renders the parts and their number of exercises,
// Total renders the total number of exercises.