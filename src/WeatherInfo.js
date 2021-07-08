import React from "react";
import Time from "./Time"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (          
        <div className="weatherInfo">
        <div className="row mt-3">
              <div className="col-3">
                <div className="row city">{props.info.city}</div>
                    <Time
                    date={props.info.date}/>
                    <div className="row wet">{props.info.description}</div>
              </div>
              <div className="col-5 align-self-center tmp">
                <span className="icon">
                  <WeatherIcon code={props.info.icon}/>
                </span>
                <span>
                  <WeatherTemperature celcius={props.info.temperature}/>
                </span>
              </div>
              <div className="col">
                <div className="row pres mt-3">Pressure: {props.info.pressure} hpa</div>
                <div className="row hum">Humidity: {props.info.humidity} %</div>
                <div className="row wind">Wind: {props.info.wind} km/h</div>
              </div>
            </div>
            <div>
                <div className="weather">
                  <div className="days">
                    <div className="row">
                      <div className="col hour">12:00</div>
                      <div className="col hour">15:00</div>
                      <div className="col hour">18:00</div>
                      <div className="col hour">21:00</div>
                      <div className="col hour">00:00</div>
                      <div className="col hour">03:00</div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="row">
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="snow"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="snow"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="snow"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="snownsun"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="rain"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src="https://openweathermap.org/img/wn/04d@2x.png"
                          alt="rain"
                        />
                      </div>
                  </div>
                  </div>
                  <div className="temperature">
                    <div className="row">
                      <div className="col temp">-5°C</div>
                      <div className="col temp">-10°C</div>
                      <div className="col temp">0°C</div>
                      <div className="col temp">-2°C</div>
                      <div className="col temp">-3°C</div>
                      <div className="col temp">1°C</div>
                    </div>
                  </div>
                </div>
              </div>   
              </div>)
}