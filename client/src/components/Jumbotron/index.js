import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron" className="backColor"It>
    <h1 className="display-4"> Google Search Book App</h1>
    <hr className="my-4"/>
    <p>Search your  Books and Authors</p>

    </div>
  );
}

export default Jumbotron;