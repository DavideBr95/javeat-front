import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { currentUser } from '../App';
import AllRestaurantPage from './AllRestaurantPage';


export default function FilterRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useAtom(currentUser);

 
  const [filtered, setTheFilter] = useState([]);
  const [filter, setFilter] = useState({ foodType: "", maxDistance: 1000 });

  useEffect(() => {
    axios.get("/restaurants")
      .then((response) => {
        setRestaurants(response.data);
        setTheFilter(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, []);

  const searchType = useRef(null);
  const searchDist = useRef(null);

  function calcDist(restaurant, maxDistance)
  {
    if(maxDistance == "")
      return true;

    let userX = user.positionX;
    let userY = user.positionY;
    let ourX = Math.abs(userX - restaurant.positionX); 
    let ourY = Math.abs(userY - restaurant.positionY);

    ourX *= ourX;
    ourY *= ourY;

    let location = Math.sqrt(ourX + ourY);
    if(location < maxDistance)
      return true;
    else
      return false;
  }

  function startSearch()
  {
    let keyFood = searchType.current.value;
    let maxDistance = searchDist.current.value;

    setTheFilter(restaurants.filter(r => r.foodTypes.filter(f => f == keyFood) || calcDist(r, maxDistance)))
  }

  function searchDis()
  {
    let maxDistance = searchDist.current.value;

    setTheFilter(restaurants.filter(r => calcDist(r, maxDistance)))
  }

  return (
    <>

    
    <div className="container">

      <div class="card mt-3 border-dark" data-bs-theme="dark" style={{width: "80%", margin: "0  auto"}} >
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Tipo: <input name="type" ref={searchType} type="text"placeholder="Type"/></li>
          <li class="list-group-item">Distanza massima:<input type="number" ref={searchDist} />  </li>
        <li class="list-group-item"><button class="btn btn-warning" onClick={startSearch}> Search </button></li>
        </ul> 
        
      </div>
      
      
          {filtered.map(f => <AllRestaurantPage {...f} />)}
      
      
        
    
    </div>
      
    </>
  );
}

