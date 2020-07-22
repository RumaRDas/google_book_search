import React from "react";
import {Container1} from '../Grid'
import './style.css'

// This file exports the Input, TextArea, and FormBtn components

const Search =(props) =>{
  return (
      <div className="searchBack">
      <Container1 background="red">
    <div className="input-group searchStyle">
    <input type="text" className="form-control" placeholder="Search your Books..." value=" "onChange="" />
    <div className="input-group-append">
      <button className="btn" onClick="">Search </button>
    </div>
    </div>
    </Container1>
    </div>
  )
}
export default Search;
