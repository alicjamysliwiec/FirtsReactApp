import './App.css';

function App() {
return (
    <body>
      <div className="container">
        <div className="row">
          <form>
            <input className="enter" type="text" placeholder="Enter a city" />
            <input type="submit" value="Search" />
            <input className="current" type="button" value="Current" />
          </form>
        </div>
        <div className="row">
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
            <div className="row pres">Pressure: 1020 hpa</div>
            <div className="row hum">Humidity: 0 %</div>
            <div className="row wind">Wind: 7 km/h</div>
          </div>
        </div>
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
      <div>
        <footer>
          <span>
            <a
              href="https://github.com/alicjamysliwiec/WeatherApp"
              className="source"
              target="_blank"
              rel="noreferrer" 
            >
              Open-source code
            </a>
          </span>
          <span> by </span>
          <span>
            <a
              href="https://www.linkedin.com/in/alicja-my%C5%9Bliwiec-b8b160201/"
              className="author"
              target="_blank"
              rel="noreferrer" 
            >
              Alicja Myśliwiec
            </a>
          </span>
        </footer>
      </div>
    </body>
  );
}

export default App;
