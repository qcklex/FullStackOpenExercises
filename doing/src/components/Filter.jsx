

const Filter = ({}) => {

    const handleFilter = (e) => {
        setFilter(e.target.value)
        console.log(filter)
        console.log(PersonsToShow)
      }

return (
    <div>filter shown with: <input value={filter} onChange={handleFilter}/></div>
)
}

export default Filter


