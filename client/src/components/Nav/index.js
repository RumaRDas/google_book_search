import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navBack">
            <Link className="navbar-brand" to="/">
                <h3>my<strong>Books</strong></h3>
            </Link>
            <div id="navbarNav" className=" row ml-auto ">
    
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">Search </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/saved">MyBooks</Link>
                    </li>
                </ul>
  
            </div>
        </nav>
    );
}

export default Nav;