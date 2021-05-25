import React from "react";
import SearchEngine from "./SearchEngine";
import BaseContent from "./BaseContent";
import WeatherImages from "./WeatherImages";

export default function Weather(){
    return(
        <div className="container">
            <SearchEngine />
            <BaseContent />   
            <WeatherImages />    
        </div>
    )
}