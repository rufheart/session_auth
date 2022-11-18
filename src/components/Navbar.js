import React, { Fragment } from 'react';
import {Link, NavLink} from 'react-router-dom';

function Navbar(){
    let guestLinks = (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/login">Login</NavLink>
            </li> 
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/register">Register</NavLink>
            </li> 
        </Fragment>
    )
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" exact="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/home">Home</NavLink>
                            </li>  
                            { guestLinks }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar