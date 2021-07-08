import React from "react";
import Time from "./Time"
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
  console.log(props.infoV2.days[0].hours)
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
                  <WeatherTemperature celsius={props.info.temperature}/>
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
                      <div className="col hour">{props.infoV2.days[0].hours}</div>
                      <div className="col hour">{props.infoV2.days[1].hours}</div>
                      <div className="col hour">{props.infoV2.days[2].hours}</div>
                      <div className="col hour">{props.infoV2.days[3].hours}</div>
                      <div className="col hour">{props.infoV2.days[4].hours}</div>
                      <div className="col hour">{props.infoV2.days[5].hours}</div>
                    </div>
                  </div>
                  <div className="images">
                    <div className="row">
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[0].icons}@2x.png`}
                          alt={props.infoV2.days[0].dsc}
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[1].icons}@2x.png`}
                          alt={props.infoV2.days[1].dsc}
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[2].icons}@2x.png`}
                          alt={props.infoV2.days[2].dsc}
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[3].icons}@2x.png`}
                          alt={props.infoV2.days[3].dsc}
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[4].icons}@2x.png`}
                          alt={props.infoV2.days[4].dsc}
                        />
                      </div>
                      <div className="col">
                        <img
                          className="image"
                          src={`https://openweathermap.org/img/wn/${props.infoV2.days[5].icons}@2x.png`}
                          alt={props.infoV2.days[5].dsc}
                        />
                      </div>
                  </div>
                  </div>
                  <div className="temperature">
                    <div className="row">
                      <div className="col temp">{props.infoV2.days[0].temperatures}°C</div>
                      <div className="col temp">{props.infoV2.days[1].temperatures}°C</div>
                      <div className="col temp">{props.infoV2.days[2].temperatures}°C</div>
                      <div className="col temp">{props.infoV2.days[3].temperatures}°C</div>
                      <div className="col temp">{props.infoV2.days[4].temperatures}°C</div>
                      <div className="col temp">{props.infoV2.days[5].temperatures}°C</div>
                    </div>
                  </div>
                </div>
              </div>   
              </div>)
}