import React from "react";

const Weather = (props) => (
    <div className="infoWeath">
        {props.city &&
        <div>
            <div>Location: {props.city}, {props.country}</div>
            <div>Temp: {props.temp}</div>
            <div>Pressure: {props.pressure}</div>
            <div>Sunset: {props.sunset}</div>
        </div>
        }
        <div className="error">{props.error}</div>
    </div>
)
export default Weather;