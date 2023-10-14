import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountriesFiltered from './components/CountriesFiltered'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const countriesFiltered = countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    // skip if searchQuery is not defined
    if (searchQuery) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          setCountries(response.data)
        })
    }
  }, [searchQuery])

  return (
    <div>
      <Filter query={searchQuery} handleFunction={handleSearchQueryChange} />
      <CountriesFiltered countriesFiltered={countriesFiltered} />
    </div>
  )
}

export default App
