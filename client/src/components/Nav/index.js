import React from "react";
import './style.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navBack">
            <a className="navbar-brand" href="/">
                <h3>my<strong>Books</strong></h3>
            </a>
            <div id="navbarNav" className=" row ml-auto ">
    
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Search </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MyBooks</a>
                    </li>
                </ul>
  
            </div>
        </nav>
    );
}

export default Nav;