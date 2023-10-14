const Filter = ({ query, handleFunction }) => {
    return (
        <div>
            <h1>Countries Filter</h1>
            <p>Filter by common name: </p>
            <input value={query} onChange={handleFunction} />
        </div>
    )
}
export default Filter