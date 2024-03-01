import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loggedUser } from "../App";
import { useAtom } from 'jotai';




export default function RegisterPage() {
    const [user, setUser] = useAtom(loggedUser);
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [positionx, setPositionX] = useState(0);
    const [positiony, setPositionY] = useState(0);

    const navigate = useNavigate();

 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    // Handling the phone change
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the mail change
    const handleMail = (e) => {
        setMail(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePositionY = (e) => {
        setPositionY(e.target.value);
        setSubmitted(false);
    };

    const handlePositionX = (e) => {
        setPositionX(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the form submission
  
    const handleSubmit = (e) => {
    e.preventDefault();
    if (mail === "" || password === "") 
     {
        setError(true);
    } else {
        try {
            axios.post('/users/register', {
                mail,
                password,
                phone,
                positionx,
                positiony
            }).then((response)=>{
                if (response.data && response.status === 201) {
                    setUser(response.data); // Se necessario aggiornare lo stato dell'utente
                   
                    setSubmitted(true);
                    setError(false); 
                    navigate("/");
                }
            }
            ) ;
          
           
           
        } catch (error) {
           
           
            setError(true);
        }
    }
};
    
 
    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {mail} successfully registered!!</h1>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    
  return (   
    <>
  <div className="container mt-3" data-bs-theme="dark">
    <div className="card border-dark " style={{background: "transparent", backdropFilter: "blur(10px"}} >
      <div className="card-body text-center">
        <div>
          <h2>Register</h2>
        </div>
      
       
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        <form onSubmit={handleSubmit}>

      
          <div className="input-group mb-3">
          
          <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                  <input
                      onChange={handleMail}
                      className="form-control"
                      value={mail}
                      type="mail"
                  />
          </div>
          <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                  <input
                      onChange={handlePassword}
                      className="form-control"
                      value={password}
                      type="password"
                  />
          </div>
          <div className="input-group mb-3">
      
          <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
              <input
                  onChange={handlePhone}
                  className="form-control"
                  value={phone}
                  type="text"
              />
            
          </div>

          <div className="input-group mb-3">
         
          <span className="input-group-text" id="inputGroup-sizing-default">Position X</span>
              <input
                  onChange={handlePositionX}
                  className="form-control"
                  value={positionx}
                  type="number"
              />
            
          </div>
          <div className="input-group mb-3">
          
          <span className="input-group-text" id="inputGroup-sizing-default">Position Y</span>
              <input
                  onChange={handlePositionY}
                  className="form-control"
                  value={positiony}
                  type="number"
              />
            
          </div>
          <button  className="btn btn-warning" type="submit">
              Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  </>  
 
    );
}