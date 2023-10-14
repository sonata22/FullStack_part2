const CountriesFiltered = ({ countriesFiltered }) => {
    if (countriesFiltered.length == 0) {
        return (
            <>
                <p>No query results or the search field is empty.</p>
            </>
        )
    }
    if (countriesFiltered.length == 1) {

        return (
            <>
                {
                    countriesFiltered.map(country =>
                        <div key={country.name.official} >
                            <h2>{country.name.common}</h2>
                            <p>Capital: {country.capital}</p>
                            <p>Area: {country.area}</p>
                            <h3>Languages</h3>
                            {Object.values(country.languages)
                                .map(language =>
                                    <li key={language} >
                                        {language}
                                    </li>)}
                            <img src={country.flags.png} alt="Flag" width={100} />
                        </div>
                    )
                }
            </>
        )
    }
    if (countriesFiltered.length > 10) {
        return (
            <>
                <p>Too many search results. Please try to specify your query.</p>
            </>
        )
    }
    return (
        <>
            {
                countriesFiltered.map(country =>
                    <pre key={country.name.official} >
                        {country.name.common}
                    </pre>
                )
            }
        </>
    )
}

export default CountriesFiltered