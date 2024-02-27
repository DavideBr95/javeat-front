import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/restaurants">Restaurants</Link>
             <div className='container-user'>
                <Link className="navbar-brand" to="/login">Login</Link>
                <Link className="navbar-brand" to="/register">Register</Link></div>

            </div>
        </nav>
    );
}
