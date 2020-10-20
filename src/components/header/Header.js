import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

    render () {
        return (
        <header className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand text-white" href="/">Movislife</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item" >
                        <NavLink to="/films" className="nav-link text-white" activeClassName='active'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/favoris" className="nav-link text-white" activeClassName='active'>Favoris</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        );
    }

}