import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useAtom } from "jotai";
import { loggedUser } from '../App';







export default function Navbar() {
    const [user, setUser] = useAtom(loggedUser);

    function logout() {
        if(user){
            setUser(null);
            //pulisco il local storage per evitare di mantenere il login
            localStorage.clear();
        }
       
    }

    return ( 
        <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container d-flex justify-content-around">
                <Link className="navbar-brand" to="/all-restaurants"> Restaurants </Link>
                <Link className="navbar-brand " to="/"><img className="" alt="Logo" src="/assets/favicon.png" style={{width:"50px", cursor:"pointer"}} /></Link>
            <div className='container-user'>
                {
                    !user    
                    ? 
                    <>
                        <Link className="btn btn-outline-light" to="/users/login">Login</Link> 
                        <Link className="btn btn-outline-light" to="/register">Register</Link>
                    </>
                    :
                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                }
            </div>
            </div>
        </nav>
    );
}






