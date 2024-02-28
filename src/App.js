import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/DetailsRestaurantPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 

import AllRestaurantsPage from './pages/AllRestaurantsPage'; 
import background from "./background/output-onlinepngtools.png";


function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`, width: "100%", height: "100vh", backgroundSize: "cover", 
    }}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-restaurants" element={<AllRestaurantsPage />} />
    

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
