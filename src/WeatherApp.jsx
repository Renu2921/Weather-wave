import SearchBox from './SearchBox'
import InfoBox from "./InfoBox";
import { useState } from 'react';
import { colors } from '@mui/material';

function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState(
        {
            city:"WonderLand",
            feelsLike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze"
        }
    )
    let updateInfo=(newInfo)=>{
           setWeatherInfo(newInfo);
    }
    let styles={
        colors:"blue",
        fontSize:"40px",
        
    }
    return (
        <div className="side" >
            <div>
            <h2 style={styles}>Weather App!</h2>
            <SearchBox  updateInfo={updateInfo}/>
            </div>
            <InfoBox info={weatherInfo} />
            
        </div>
    )
}
export default WeatherApp;
