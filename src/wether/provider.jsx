import React, { useState } from "react";
import { contextWheather } from "./context";
import { api } from "./services/api";
export default function WeatherProvider({children}){
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(null);
    const getDataWheather = async (city) => {
        const data = await api.getDataWeatherByCity(city);
        if(data.hasOwnProperty('weather') && data.hasOwnProperty('main')){
            setDataWheather(data);
            setError(null);
        }else{
            setError({cod: 404, mess:'not found data'})
        }
    }
    return(
        <contextWheather.Provider
        value={{ loading,weather,error,getDataWheather }}>
            {children}
        </contextWheather.Provider>
    )
}
    
