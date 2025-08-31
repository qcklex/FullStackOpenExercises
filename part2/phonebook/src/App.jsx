import axios from 'axios'
import { useState, useEffect } from 'react'
import Persons from './components/Persons' 
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })

      
  }, [])


 const successStyle = {
   color: 'green',
   fontSize: 16,
   backgroundColor: 'lightgrey',
   padding: 10,
   border: '2px solid green',
   margin: 10,
   borderColor: 'green'
 }

 const errorStyle = {
     color: 'red',
     fontStyle: 'italic',
     fontSize: 16,
     backgroundColor: 'lightgrey',
     borderRadius: 5,
     padding: 10,
     margin: 10,
     borderColor: 'red'
 }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} successStyle={successStyle}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new contact</h2>
        <PersonForm 
        newName={newName} 
        setNewName={setNewName}
        newNumber={newNumber} 
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setSuccessMessage={setSuccessMessage}
        />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App