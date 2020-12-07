import React, { useState } from 'react'
import Current from './Current'

const Container = () => {

    const apiKey = '6057a1679b97483d96b210009202411';
    const [location, setLocation] = useState('');
    const [current, setCurrent] = useState({});

    //Datos del clima
    const [city, setCity] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setwind] = useState('');
    const [pressure, setpressure] = useState('');
    const [icon, seticon] = useState('');
    const [text, setText] = useState('');
    const [temperature, settemperature] = useState('');
    const [feellike, setFeellike] = useState('');

    //obtener localizacion
    const getLocation = (event) => {
        setLocation(event.target.value);
    }

    //obtener datos del clima
    const getWeather = async (event) => {
        event.preventDefault();
        await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
            .then(res => res.json())
            .then(data => setCurrent(data));
        datos();
    }

    // Guardando datos en el state
    const datos = () => {
        setCity(current.location.country);
        setHumidity(current.current.humidity);
        setwind(current.current.wind_kph);
        setpressure(current.current.pressure_in);
        seticon(current.current.condition.icon);
        setText(current.current.condition.text);
        settemperature(current.current.temp_c);
        setFeellike(current.current.feelslike_c);
    }

    return (
        <div className="contenedor my-5">
            <form>
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </div>
                    </div>
                    <input type="text" className="form-control" value={location} onChange={getLocation} />
                    <button type="submit" onClick={getWeather} className="btn btn-primary">Search</button>
                </div>

            </form>
            <Current FeelLike={feellike} Temperature={temperature} City={city} Humidity={humidity} Wind={wind} Pressure={pressure} Icon={icon} Text={text} />
        </div>
    )
}

export default Container
