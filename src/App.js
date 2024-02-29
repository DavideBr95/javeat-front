import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/AllRestaurantPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import { atom, useAtom } from 'jotai';
import DetailsRestaurant from './pages/DetailsRestaurant';
import AllRestaurantsPage from './pages/FilterRestaurantsPage'; 
import background from "./background/desktop-wallpaper-restaurant-menu-menu.jpg";
import FilterRestaurantsPage from './pages/FilterRestaurantsPage';

const loggedUserBase = atom(localStorage.getItem("logged") ?JSON.parse(localStorage.getItem("logged")):null);
export const currentUser = atom();



export const loggedUser = atom(
  (get) => get(loggedUserBase),
  (get,set,newLogged) =>
  {
      set(loggedUserBase,newLogged);
      localStorage.setItem("logged",JSON.stringify(newLogged));
  }
);


function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundColor: "black"
    }}>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-restaurants" element={<AllRestaurantsPage />} />
        <Route path="/restaurant/:id" element={<DetailsRestaurant />} />
        {/* <Route path="/restaurant/:id" element={<FilterRestaurantsPage />} /> */}



      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


