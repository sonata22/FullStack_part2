const Filter = ({ query, handleFunction }) => {
    return (
        <div>
            Filter names by
            <input
                value={query}
                onChange={handleFunction} />
        </div>
    )
}

export default Filter