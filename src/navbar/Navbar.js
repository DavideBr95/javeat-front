import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return ( 
        <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container d-flex justify-content-around">
                <Link className="navbar-brand " to="/"><img className="" alt="Logo" src="/assets/favicon.png" style={{width:"50px", cursor:"pointer"}} /></Link>
                <Link className="navbar-brand" to="/restaurants">Restaurants</Link>
                <div className='container-user'>
                    <Link className="navbar-brand" to="/login">Login</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                    <Link className="navbar-brand" to="/checkout">Checkout</Link>
                    <Link className="navbar-brand" to="/order-confirmation">Order Confirmation</Link>
                </div>
            </div>
        </nav>
    );
}

