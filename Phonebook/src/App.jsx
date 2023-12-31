import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      if (window.confirm(`${newName} is already added to the Phonebook, wanna replace existing number with the new one?`)) {
        const existingPerson = persons.find(person => person.name === newName)
        const changedPerson = { ...existingPerson, number: newPhoneNum }

        personService
          .update(changedPerson.id, changedPerson)
          .then(response => {
            setPersons(
              persons.map(
                person => person.id == existingPerson.id
                  ? person = response : person = person))
          })
          .catch((error) => {
            if (error.response.data.error) {
              setNotificationMessage(
                `${error.response.data.error}`
              )
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000)
            } else {
              setNotificationMessage(
                `Information of '${changedPerson.name}' was already deleted from server.`
              )
              setPersons(persons.filter(person => person.id !== changedPerson.id))
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000)
            }

          })
        setNewName('')
        setNewPhoneNum('')
      }
    }
    else {
      const currentDate = new Date();
      const personObject = {
        id: currentDate,
        name: newName,
        number: newPhoneNum,
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .then(() => {
          setSuccessMessage(
            `${personObject.name} successfully added to the Phonebook.`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          setNotificationMessage(
            `${error.response.data.error}`
          )
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
      setNewName('')
      setNewPhoneNum('')
    }
  }

  const handleDelete = (id) => {
    if (window.confirm(`You are going to delete note with id=${id}, are you sure?`)) {
      personService
        .deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
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
        <Notification
          message={successMessage}
          styleOption={{ error: false, success: true }} />
        <Notification
          message={notificationMessage}
          styleOption={{ error: true, success: false }} />
      </div>
      <h2>Numbers</h2>
      <Persons personsFiltered={personsFiltered} handleDelete={handleDelete} />
    </div>
  )
}

export default App