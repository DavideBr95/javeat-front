
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import  Navbar  from './navbar/Navbar'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
