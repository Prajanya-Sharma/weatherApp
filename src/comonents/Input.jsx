import React from "react";
import { useWeather } from "../context/weather";

const Input =()=>{
    const Weather = useWeather();
    return(
    <input 
    className="input"
    placeholder={'Search Here'}
    value={Weather.searchCity}
    onChange={(e)=>Weather.setSearchCity(e.target.value)} />)
}

export default Input;