const DisplayPersonsDataEntry = ({ name, entry }) => {
    return (
        <p>
            {name}: {entry}
        </p>
    )
}

const PersonsData = ({ person }) => {
    return (
        <li>
            <DisplayPersonsDataEntry name={'Id'} entry={person.id} />
            <DisplayPersonsDataEntry name={'Name'} entry={person.name} />
            <DisplayPersonsDataEntry name={'Number'} entry={person.phoneNumber} />
        </li>
    )
}

export default PersonsData