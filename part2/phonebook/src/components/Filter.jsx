const Filter = ({filter, setFilter}) => {

    const handleFilter = (e) => {
        setFilter(e.target.value)
        console.log(filter)
      }

return (
    <div>filter shown with: <input value={filter} onChange={handleFilter}/></div>
)
}

export default Filter

