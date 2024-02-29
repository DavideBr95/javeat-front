import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { currentUser } from '../App';
import AllRestaurantPage from './AllRestaurantPage';

export default function FilterRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useAtom(currentUser);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState({ foodType: "", maxDistance: 1000 });

  useEffect(() => {
    axios.get("/restaurants")
      .then((response) => {
        setRestaurants(response.data);
        setFiltered(response.data); // Inizialmente mostriamo tutti i ristoranti
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, []);

  const searchType = useRef(null);
  const searchDist = useRef(null);

  function calcDist(restaurant, maxDistance) {
    if (maxDistance === "") // Assicurati di confrontare con === per il confronto con stringhe vuote
      return true;

    const userX = user.positionX;
    const userY = user.positionY;
    const deltaX = Math.abs(userX - restaurant.positionX);
    const deltaY = Math.abs(userY - restaurant.positionY);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance < maxDistance;
  }

  function startSearch() {
    const keyFood = searchType.current.value;
    const maxDistance = searchDist.current.value;

    setFiltered(restaurants.filter(r => 
      r.foodTypes.includes(keyFood) && calcDist(r, maxDistance)
    ));
  }

  return (
    <div className="container">
      <div className="card mt-3 border-dark" data-bs-theme="dark" style={{ width: "80%", margin: "0 auto" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Tipo: <input name="type" ref={searchType} type="text" placeholder="Type" /></li>
          <li className="list-group-item">Distanza massima: <input type="number" ref={searchDist} /></li>
          <li className="list-group-item"><button className="btn btn-warning" onClick={startSearch}>Search</button></li>
        </ul>
      </div>

      {filtered.map(restaurant => 
        <AllRestaurantPage key={restaurant.id} restaurant={restaurant} user={user} />
      )}
     

    </div>
  );
}

