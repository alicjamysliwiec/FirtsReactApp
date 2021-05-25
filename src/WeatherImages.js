import React from "react";
import Hours from "./Hours";
import Images from "./Images"
import Temperature from "./Temperature"

export default function WeatherImages(){
    return (
        <div>
            <div className="weather">
          <div className="days">
            <Hours />
          </div>
          <div className="images">
            <Images />
          </div>
          <div className="temperature">
            <Temperature />
          </div>
        </div>
        </div>
    )
}