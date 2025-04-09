
const PersonForm = ({}) => {
   

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setNewName(e.target.value)
      }
      const handleNumberChange = (e) => {
        console.log(e.target.value)
        setNewNumber(e.target.value)
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
    
       
    return(
    <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
      )
}

export default PersonForm