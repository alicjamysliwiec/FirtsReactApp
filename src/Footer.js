import React from "react";

export default function Footer(){
    return (
        <footer>
          <span>
            <a
              href="https://github.com/alicjamysliwiec/firts-react-app"
              className="source"
              target="_blank"
              rel="noreferrer" 
            >
              Open-source code
            </a>
          </span>
          <span className="text-white"> by </span>
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
    )
}