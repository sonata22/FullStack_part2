import { useState } from 'react'

import PersonsData from './components/PersonsData'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      phoneNumber: '39-44-53233523',
    },
    {
      id: 2,
      name: 'Banana Man',
      phoneNumber: '8-800-555-35-35',
    },
    {
      id: 3,
      name: 'Holy Cow',
      phoneNumber: '1-111-111-11-11',
    },
  ])

  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const doesExist = () => {
    for (const person of persons) {
      if (JSON.stringify(person.name) === JSON.stringify(newName)) {

        return true
      }
    }
    return false;
  }

  const addName = (event) => {
    event.preventDefault()
    if (doesExist()) {
      alert(`${newName} is already added to the phonebook`)
    }
    else {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        phoneNumber: newPhoneNum,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhoneNum('')
    }
  }

  const handlePersonChange = event => setNewName(event.target.value)
  const handlePhoneNumChange = event => setNewPhoneNum(event.target.value)
  const handleSearchQueryChange = event => setSearchQuery(event.target.value)

  const personsFiltered = persons.filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <div>
          Filter names by
          <input
            value={searchQuery}
            onChange={handleSearchQueryChange} />
        </div>
      </div>
      <div>
        <h2>Add New</h2>
        <form onSubmit={addName} >
          <div>
            name:
            <input
              value={newName}
              onChange={handlePersonChange}
            />
          </div>
          <div>
            number:
            <input
              value={newPhoneNum}
              onChange={handlePhoneNumChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <ul>{personsFiltered.map(person =>
        <PersonsData key={person.id} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App