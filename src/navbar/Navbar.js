import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                
                <div className='container-center'>
                    <Link className="navbar-brand" to="/all-restaurants">All Restaurants</Link> 
                </div>

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

