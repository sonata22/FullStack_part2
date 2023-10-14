import Weather from "./Weather"

const SingleCountry = ({ country }) => {


    return (
        <div key={country.name.official}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}
                <br />
                Area: {country.area}</p>
            <h3>Languages</h3>
            {Object.values(country.languages)
                .map(language =>
                    <li key={language} >
                        {language}
                    </li>)}
            <img src={country.flags.png} alt="Flag" width={100} />
            <Weather country={country} />
        </div>
    )
}
export default SingleCountry