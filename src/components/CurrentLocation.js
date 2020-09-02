import React , { useState, useEffect } from 'react';
import { axios } from 'axios';

//`https://api.weatherbit.io/v2.0/current&key=${key}&lat=38.123&lon=-78.543`


export const CurrentLocation = () => {


    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const [info , setInfo ] = useState([]);

    useEffect(async () => {
        const data = await axios.get(`https://api.weatherbit.io/v2.0/current&key=5296eee14eb94455a5ed3220fcd31fe2&lat=38.123&lon=-78.543`);
        setInfo(info.data).json();
        console.log(info.data);
    }, []);



    return (
        <div>

        </div>
    )
};
