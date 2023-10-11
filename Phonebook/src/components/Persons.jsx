import PersonsData from './PersonsData'

const Persons = ({ personsFiltered, handleDelete }) => {
    return (
        <div>
            <ul>
                {personsFiltered.map(person =>
                    <PersonsData key={person.id} person={person} handleDelete={handleDelete} />
                )}
            </ul>
        </div>
    )
}

export default Persons