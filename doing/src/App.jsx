import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
    console.log(filter)
    console.log(PersonsToShow)
  }

   const addContact = (event) => {
     event.preventDefault()
     if (persons.some(person => person.name === newName) | persons.some(person => person.number === newNumber)){
      alert(newName + " is already added to phonebook")
      
     }

     else if (persons.some(person => person.number === newNumber)){
      alert(newNumber + " is already added to phonebook")
     }

     else{
      const personObject = {
        id: String(persons.length + 1),
        name: newName,
        number: newNumber
        }  
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
     }
    }
    
    const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with: <input value={filter} onChange={handleFilter}/></div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
        <li key={person.id}>{person.name} {person.number}</li>
      )}
      </ul>
    </div>
  )
}

export default App