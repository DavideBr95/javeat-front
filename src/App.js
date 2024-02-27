import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import CheckoutPage from './pages/CheckoutPage'; 
import OrderConfirmationPage from './pages/OrderConfirmationPage'; 
import AllRestaurantsPage from './pages/AllRestaurantsPage'; 


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} /> 
        <Route path="/all-restaurants" element={<AllRestaurantsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
