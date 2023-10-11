import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const baseUrl = 'http://localhost:3001/persons'

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
        number: newPhoneNum,
      }
      axios
        .post(baseUrl, personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
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
        <Filter query={searchQuery} handleFunction={handleSearchQueryChange} />
      </div>
      <div>
        <h2>Add New</h2>
        <PersonsForm
          addName={addName}
          newName={newName}
          handlePersonChange={handlePersonChange}
          newPhoneNum={newPhoneNum}
          handlePhoneNumChange={handlePhoneNumChange}
        />
      </div>
      <h2>Numbers</h2>
      <Persons personsFiltered={personsFiltered} />
    </div>
  )
}

export default App