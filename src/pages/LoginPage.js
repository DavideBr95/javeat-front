import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function userLogin(e) {
    e.preventDefault(); // Previene il refresh della pagina

    const userLogin = {
      "mail": mail,
      "password": password
    };

    axios.post("/login", userLogin)
      .then(response => {
        if (response.data && response.status === 200) {
          // setUser(response.data) // Se necessario aggiornare lo stato dell'utente
          localStorage.setItem("logged", JSON.stringify(response.data))
          navigate("/");
        }
      })
      .catch(error => {
        console.error('Errore durante il login:', error);
        alert('Credenziali errate. Riprova.');
      });
  }

  return (
    <div>
      <form onSubmit={userLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
