import Country from "./Country"
import SingleCountry from "./SingleCountry"

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
                            <SingleCountry country={country} />
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
                    <div key={country.name.official} >
                        {country.name.common}
                        <Country key={country.name.common} country={country} />
                    </div>
                )
            }
        </>
    )
}

export default CountriesFiltered