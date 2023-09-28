import PersonsData from './PersonsData'

const Persons = ({ personsFiltered }) => {
    return (
        <div>
            <ul>
                {personsFiltered.map(person =>
                    <PersonsData key={person.id} person={person} />
                )}
            </ul>
        </div>
    )
}

export default Persons