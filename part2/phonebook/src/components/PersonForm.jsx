import axios from 'axios'
import personService from '../services/persons'
import {useEffect} from 'react'
const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons, setSuccessMessage}) => {

      const handleNameChange = (e) => {
        setNewName(e.target.value)
      }
      const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
      }

      const addContact = (event) => {
        event.preventDefault()
        const existingPerson = persons.find(person => person.name === newName)
        if (existingPerson) {
          if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            const updatedPerson = {...existingPerson, number:newNumber}
            personService
              .update(existingPerson.id, updatedPerson)
              .then(returnedPerson => { 
                console.log('Server response:', returnedPerson)
                setPersons(persons.map(person => 
                  person.id !== existingPerson.id ? person : returnedPerson
                ))
                setNewName('')
                setNewNumber('')
              })
        }
       }

       else if (persons.some(person => person.number === newNumber)){
         alert(newNumber + " is already added to phonebook")
      }

      else {
         const personObject = {
           name: newName,
           number: newNumber
           }  
           personService
            .create(personObject)
            .then(response => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
                console.log('Server response:', response)
                setSuccessMessage(`Added ${newName}`)
                setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)
        })
      }

      
      }
    
    return(
    <form onSubmit={addContact}>
        <div>my
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      )
}

export default PersonForm