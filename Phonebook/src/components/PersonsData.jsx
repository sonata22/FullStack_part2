const DisplayPersonsDataEntry = ({ name, entry }) => {
    return (
        <p>
            {name}: {entry}
        </p>
    )
}

const PersonsData = ({ person, handleDelete }) => {
    return (
        <li>
            <DisplayPersonsDataEntry name={'Id'} entry={person.id} />
            <DisplayPersonsDataEntry name={'Name'} entry={person.name} />
            <DisplayPersonsDataEntry name={'Number'} entry={person.number} />
            <button onClick={() => { handleDelete(person.id) }}>Delete</button>
        </li>
    )
}

export default PersonsData