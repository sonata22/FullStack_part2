import { useState } from 'react'

import PersonsName from './components/PersonsName'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
    }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        name:
        <input
          value={newName}
          onChange={handlePersonChange}
        />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(person =>
        <PersonsName key={person.id} person={person} />
      )}
      </ul>
    </div>
  )
}

export default App