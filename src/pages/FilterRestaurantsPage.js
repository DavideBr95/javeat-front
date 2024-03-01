import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { currentUser } from '../App';
import AllRestaurantPage from './AllRestaurantPage';
import "../style/style.css"

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
<div className="container-filter d-flex" > 
  <div className="card p-3" data-bs-theme="dark">
    <form>
      <div class="form-row">
        <div class="form-group col-2 mt-3">
          <label for="formGroupExampleInput">Tipo</label>
          <input name="type" ref={searchType} type="text" />
        </div>
        <div class="form-group col-6  mt-3"  >
          <label for="formGroupExampleInput2">Distanza massima: </label>
          <input type="number" ref={searchDist} />
        </div>
        <button className="btn btn-warning  mt-3" onClick={startSearch}>Search</button>
      </div>
    </form>
  </div>

  {filtered.map(restaurant => 
    <AllRestaurantPage key={restaurant.id} restaurant={restaurant} user={user} />
  )}
     
</div>

  );
}

