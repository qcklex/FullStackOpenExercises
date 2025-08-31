import axios from "axios";
const Persons = ({filter, persons, setPersons}) => {


  const personsToShow = 
  filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons

  const deleteContact = (id, name) => {
    if(window.confirm(`Delete ${name}?`)) {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
}
console.log(persons)

return (
  
    <ul>
      {personsToShow.map(person => 
        <li key={person.id}>
          {person.name} {person.number}
          <button key={person.id} type="submit" onClick={() => deleteContact(person.id, person.name)}>delete</button>
        </li>
      )}
    </ul>
)
}
export default Persons
