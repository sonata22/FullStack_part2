import { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_SOME_KEY}&q=${country.capital}`)
            .then(response => setWeather(response.data))
    })

    if (!weather) {
        return (
            <div>Loading weather</div>
        )
    }

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            Temperature: {weather.current.temp_c} Celcius
            <br />
            <img src={weather.current.condition.icon} alt="weatherIcon" />
            <br />
            Wind {weather.current.wind_kph} kilometres per hour (kph)
        </div>
    )
}

export default Weather