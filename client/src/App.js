import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style/App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Jumbotron from './components/Jumbotron';
import SaveBooks from './pages/SaveBooks';

function App() {
  return (
<Router>
<div>
<Nav/>
<Jumbotron />

<Route  exact path="/saved" component={SaveBooks}/>
<Route  exact path="/" exact component={Dashboard}/>


</div>
</Router>
  );
}

export default App;
