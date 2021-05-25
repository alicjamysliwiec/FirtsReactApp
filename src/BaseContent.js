import React from "react";

export default function BaseContent(){
    return(
                    <div className="row mt-3">

                <div className="col-3">
                    <div className="row city">Wrocław</div>
                    <div className="row">
                        <div className="col day">Saturday</div>
                        <div className="col time">13.30</div>
                    </div>
                <div className="row wet">Clouds</div>
            </div>

            <div className="col-5 align-self-center tmp">
                <span className="icon">
                    <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        id="icon"
                        alt="brokenclouds"
                    />
                </span>
                <span className="temperature">19 </span>
                <a href="/" id="c" className="link">
                °C
                </a>
                <span className="line"> |</span>
                <a href="/" id="f" className="link">
                °F
                </a>
          </div>
          <div className="col">
            <div className="row pres mt-3">Pressure: 1020 hpa</div>
            <div className="row hum">Humidity: 0 %</div>
            <div className="row wind">Wind: 7 km/h</div>
          </div>
        </div>
    )
}