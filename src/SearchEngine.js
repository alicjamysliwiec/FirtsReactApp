import React from "react";

export default function SearchEngine(){
    return(            
        <div className="row mt-3">
            <form>
                <input className="enter" type="search" placeholder="Enter a city" />
                <input className="b" type="submit" value="Search" />
                <input className="b" type="button" value="Current" />
            </form>
        </div>
    )
}