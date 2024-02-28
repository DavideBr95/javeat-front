import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function RegisterPage() {
    const [user, setUser] = useState();
    // const [mail, setMail] = useState([]);
    // const [password, setPassword] = useState([]);
    // States for registration
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
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
 
    // Handling the form submission
  
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (mail === "" || password === "") {
        setError(true);
    } else {
        try {
            const response = await axios.post('/users/register', {
                mail,
                password,
                phone
            });
          
            if (response.data && response.status === 200) {
                setUser(response.data) // Se necessario aggiornare lo stato dell'utente
                localStorage.setItem("logged", JSON.stringify(response.data))
                navigate("/");
                // setSubmitted(true);
                // setError(false);
              }
           
        } catch (error) {
           
            console.error(error);
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
    <div class="card border-dark" >
      <div class="card-body text-center">
        <div>
          <h2>Register</h2>
        </div>
      
        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        <form>

          {/* <form onSubmit={userLogin}> */}
          <div className="input-group mb-3">
          
          <span class="input-group-text" id="inputGroup-sizing-default">Mail</span>
                  <input
                      onChange={handleMail}
                      className="form-control"
                      value={mail}
                      type="mail"
                  />
          </div>
          <div className="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
                  <input
                      onChange={handlePassword}
                      className="form-control"
                      value={password}
                      type="password"
                  />
          </div>
          <div className="input-group mb-3">
          {/* Labels and inputs for form data */}
          <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
              <input
                  onChange={handlePhone}
                  className="form-control"
                  value={phone}
                  type="number"
              />
            
          </div>
          <button onClick={handleSubmit} className="btn btn-warning" type="submit">
              Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  </>  
 
    );
}