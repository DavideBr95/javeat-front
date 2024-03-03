import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import { atom } from 'jotai';
import DetailsRestaurant from './pages/DetailsRestaurant';
import RestaurantCard from './pages/FilterRestaurantsPage'; 
import background from "./background/home-slide-bg-2.jpg";
// import "./style2.css";

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
    <div  style={{ 
      backgroundImage: `url(${background})`,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      backgroundSize: "cover"}}>
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all-restaurants" element={<RestaurantCard />} />
        <Route path="/restaurants/:id" element={<DetailsRestaurant />} />
        {/* <Route path="/restaurant/:id" element={<FilterRestaurantsPage />} /> */}
        {/* <Route path="/restaurant/:id" element={<AddDelivery />} /> */}




      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


