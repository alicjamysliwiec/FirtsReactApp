import './App.css';
import Loader from "react-loader-spinner";
import Footer from "./Footer";
import axios from "axios";
import React,{useState} from 'react';
import WeatherInfo from "./WeatherInfo"

function App() {
  const apiKey = `9b8a1ecfca5941d5437fb74764c62af8`;
  const [weatherData, setWeatherData] = useState({ready:false});
  const [weatherDataV2, setWeatherDataV2] = useState({ready:false});
  const [city, setCity] = useState("Wrocław");
  function handleResponse(response){
    console.log(response);
    setWeatherData({
      temperature:Math.round(response.data.main.temp),
      pressure:response.data.main.pressure,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name,
      description:response.data.weather[0].description,
      date:new Date(response.data.dt * 1000),
      ready:true,
      icon:response.data.weather[0].icon,
    });
  }

  function displayForecast(response){
    console.log(response);
    setWeatherDataV2({
      ready:true,
      days: [
        {
          hours: response.data.list[0].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[0].main.temp),
          icons: response.data.list[0].weather[0].icon,
          dsc: response.data.list[0].weather[0].description
        },
                {
          hours: response.data.list[1].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[1].main.temp),
          icons: response.data.list[1].weather[0].icon,
           dsc: response.data.list[1].weather[0].description
        },
                {
          hours: response.data.list[2].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[2].main.temp),
          icons: response.data.list[2].weather[0].icon,
          dsc: response.data.list[2].weather[0].description
        },
                {
          hours: response.data.list[3].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[3].main.temp),
          icons: response.data.list[3].weather[0].icon,
          dsc: response.data.list[3].weather[0].description
        },
        {
          hours: response.data.list[4].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[4].main.temp),
          icons: response.data.list[4].weather[0].icon,
          dsc: response.data.list[4].weather[0].description
        },
        {
          hours: response.data.list[5].dt_txt.substr(11,5),
          temperatures: Math.round(response.data.list[5].main.temp),
          icons: response.data.list[5].weather[0].icon,
          dsc: response.data.list[5].weather[0].description
        }
      ]
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    search();

  }

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    let apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl2).then(displayForecast);
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }

  function setCurrentWeather(event){
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;
      axios.get(apiURL).then(handleResponse);

      let apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&&units=metric`;
      axios.get(apiUrl2).then(displayForecast);
    });
  }

  if(weatherData.ready){
    return (
        <body>
          <div className="container">
            <div className="row mt-3">
              <form onSubmit={handleSubmit}>
                <input className="enter" type="search" placeholder="Enter a city" onChange={handleCityChange}/>
                <input className="b" type="submit" value="Search" />
                <input className="b" type="button" value="Current" onClick={setCurrentWeather}/>
              </form>
            </div>
            <WeatherInfo info={weatherData} infoV2={weatherDataV2}/>
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
