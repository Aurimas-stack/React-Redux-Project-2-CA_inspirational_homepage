import React, { useEffect } from 'react';
import { loadWeather, selectWeather } from './WeatherSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Weather.css';

export function Weather() {
    const weather = useSelector(selectWeather)
    const dispatch = useDispatch();
    let description, icon, temp, country, name;

    useEffect(() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                dispatch(loadWeather({lat: position.coords.latitude, long: position.coords.longitude}));
        })
    }
    },[dispatch])
    if (weather[0] !== undefined) {
        icon = weather[0].weather[0].icon;
        description = weather[0].weather[0].description;
        temp = weather[0].main.temp;
        country = weather[0].sys.country;
        name = weather[0].name;
    }
    return (
        <div>
            {
            icon !== undefined ?
            <div className='weather-container'>
                <div className='temp-icon'>
                    <img src={`https://openweathermap.org/img/wn/${icon}`} alt='icon'/> 
                    <h4>{temp}°C</h4> 
                </div>
                <h4>{description}</h4>
                <h4>{country}, {name}</h4> 
            </div> 
            : null
            }    
        </div>
    )
}