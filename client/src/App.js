import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style/App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Jumbotron from './components/Jumbotron'

function App() {
  return (

<div>

<Nav/>
<Jumbotron />
<Dashboard/>

</div>

  );
}

export default App;
