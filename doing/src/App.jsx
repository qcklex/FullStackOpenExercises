import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { id: 1,
      name: 'Arto Hellas',
      number: '0000000',
     },
  ]) 

  const [newName, setNewName] = useState('')


   const addName = (event) => {
     event.preventDefault()
    const personObject = {
      id: String(persons.length + 1),
      name: newName,
      number: '0000000'
      }

      setPersons(persons.concat(personObject))
      setNewName('')
    }
    

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <li key={person.id}>{person.name}</li>
      )}
      </ul>
    </div>
  )
}

export default App