import { useState } from "react"

const ShowContent = ({ country, isVisible }) => {
    const countryStyle = {
        border: "solid 1px",
        margin: "10px",
        padding: "10px",
    }

    if (!isVisible) {
        return ""
    }
    return (
        <div key={country.name.official} style={countryStyle} >
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
        </div>)
}

const Country = ({ country }) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibilityOf = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div >
            <button onClick={toggleVisibilityOf} >{isVisible ? "Hide" : "Show"}</button>
            <ShowContent country={country} isVisible={isVisible} />
        </div>
    )
}
export default Country