import React from "react";

export default function WeatherTemperature(props){
    return(
    <span>
        <span className="temperature">{props.info.temperature} </span>
            <a href="/" id="c" className="link">
                      °C
            </a>
        <span className="line"> |</span>
            <a href="/" id="f" className="link">
                      °F
            </a>
        </span>
    );
}