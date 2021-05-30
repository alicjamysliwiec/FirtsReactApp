import './App.css';
import Loader from "react-loader-spinner";
import Footer from "./Footer";
import axios from "axios"
import React,{useState} from 'react'

function App() {
  const [weatherData ,setWeatherData]=useState({ready:false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      temperature:Math.round(response.data.main.temp),
      pressure:response.data.main.pressure,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name,
      description:response.data.weather[0].description,
      date:"",
      ready:true
    });
  }

  if(weatherData.ready){
    return (
        <body>
          <div className="container">
            <div className="row mt-3">
              <form>
                <input className="enter" type="search" placeholder="Enter a city" />
                <input className="b" type="submit" value="Search" />
                <input className="b" type="button" value="Current" />
              </form>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <div className="row city">{weatherData.city}</div>
                  <div className="row">
                    <div className="col day">Saturday</div>
                    <div className="col time">13.30</div>
                  </div>
                    <div className="row wet">{weatherData.description}</div>
              </div>
              <div className="col-5 align-self-center tmp">
                <span className="icon">
                  <img
                    src="https://openweathermap.org/img/wn/04d@2x.png"
                    id="icon"
                    alt="brokenclouds"
                  />
                </span>
                <span className="temperature">{weatherData.temperature} </span>
                  <a href="/" id="c" className="link">
                    °C
                  </a>
                <span className="line"> |</span>
                  <a href="/" id="f" className="link">
                    °F
                  </a>
              </div>
              <div className="col">
                <div className="row pres mt-3">Pressure: {weatherData.pressure} hpa</div>
                <div className="row hum">Humidity: {weatherData.humidity} %</div>
                <div className="row wind">Wind: {weatherData.wind} km/h</div>
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
            </div>
          <Footer />
        </body>
      );
  }
  else{
    const apiKey = `9b8a1ecfca5941d5437fb74764c62af8`;
    let city=`London`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <body>
      <div className="loader">
        <Loader
          type="Circles"
          color="#FFF"
          height={100}
          width={100}
          timeout={10000}
        />
      </div>
      </body>
    );
  }
}

export default App;
