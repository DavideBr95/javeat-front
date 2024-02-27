import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
