import { useState, useEffect } from 'react'
import Persons from './components/Persons' 
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log(response)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
        <PersonForm newName={newName} newNumber={newNumber} persons={persons}/>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons}/>
    </div>
  )
}

export default App