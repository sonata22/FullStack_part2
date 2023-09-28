import { useState } from 'react'

import PersonsData from './components/PersonsData'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      phoneNumber: '39-44-53233523',
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>{persons.map(person =>
        <PersonsData key={person.id} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App