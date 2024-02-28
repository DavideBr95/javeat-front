import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';




export default function Navbar() {
    return ( 
        <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container d-flex justify-content-around">
                <Link className="navbar-brand" to="/all-restaurants"> Restaurants </Link>
                <Link className="navbar-brand " to="/"><img className="" alt="Logo" src="/assets/favicon.png" style={{width:"50px", cursor:"pointer"}} /></Link>
            <div className='container-user'>
                <Link className="navbar-brand" to="/users/login">Login</Link>
                <Link className="navbar-brand" to="/register">Register</Link>
                
            </div>
            </div>
        </nav>
    );
}

