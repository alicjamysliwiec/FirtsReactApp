import './App.css';
import Loader from "react-loader-spinner";
import Footer from "./Footer";
import axios from "axios";
import React,{useState} from 'react';
import WeatherInfo from "./WeatherInfo"

function App() {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState("London");
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      temperature:Math.round(response.data.main.temp),
      pressure:response.data.main.pressure,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name,
      description:response.data.weather[0].description,
      date:new Date(response.data.dt * 1000),
      ready:true,
      icon:response.data.weather[0].icon
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function search(){
    const apiKey = `9b8a1ecfca5941d5437fb74764c62af8`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(handleResponse);   
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  if(weatherData.ready){
    return (
        <body>
          <div className="container">
            <div className="row mt-3">
              <form onSubmit={handleSubmit}>
                <input className="enter" type="search" placeholder="Enter a city" onChange={handleCityChange}/>
                <input className="b" type="submit" value="Search" />
                <input className="b" type="button" value="Current" />
              </form>
            </div>
            <WeatherInfo info={weatherData}/>
            </div>
          <Footer />
        </body>
      );
  }
  else{

    search();

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
