import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { currentUser } from '../App';
import AllRestaurantPage from './AllRestaurantPage';
import "../style/style.css"

export default function FilterRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [user, setUser] = useAtom(currentUser);
  const [filtered, setFiltered] = useState([]);
  const [filterType, setFilterType] = useState("Type");
  const [filterDist, setFilterDist] = useState("Distance");
  const searchType = useRef(null);
  const searchDist = useRef(null);
  const [reRender, setReRender] = useState(false);


  

  useEffect(() => {
    axios.get("/restaurants")
      .then((response) => {
        setRestaurants(response.data);
        setFilteredRestaurant(response.data); // Inizialmente mostriamo tutti i ristoranti
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, [reRender]);


  function handleFilter() {
    let filteredData = [...restaurants];

    
    if (filterType !== "Type") {
      filteredData = filteredData.filter((restaurant) => restaurant.type === filterType);
  }

  const maxDistance = parseInt(searchDist.current.value); // Ottieni la distanza massima dalla input
  if (!isNaN(maxDistance)) {
    filteredData = filteredData.filter((restaurant) => calcDist(restaurant, maxDistance));
  }

  setFiltered(filteredData);
  setFilteredRestaurant(filteredData);
  }

  function resetFilter() {
    setFilterType("Type");
    setFilteredRestaurant(restaurants);
}

  function calcDist(restaurant, maxDistance) {
    if (maxDistance === restaurant.maxdIS) 
      return true;

    const userX = user.positionX;
    const userY = user.positionY;
    const deltaX = Math.abs(userX - restaurant.positionX);
    const deltaY = Math.abs(userY - restaurant.positionY);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance < maxDistance;
  }

  // function startSearch() {
  //   const keyFood = searchType.current.value;
  //   const maxDistance = searchDist.current.value;

  //   setFiltered(restaurants.filter(r => 
  //     r.foodTypes.includes(keyFood) && calcDist(r, maxDistance)
  //   ));
  // }

return (
  <>
    <div className="container" > 
      <div className="card p-3 " data-bs-theme="dark">
        <form>
          <div class="form-row">
            <div class="form-group col-2 mt-3">
            <select
                            className="form-select mt-4"
                            aria-label="Default select example"
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="Type">Type</option>
                            <option value="italiano">italiano</option>
                            <option value="giapponese">giapponese</option>
                            <option value="messicano">messicano</option>
                            <option value="indiano">indiano</option>
                            <option value="mediterraneo">mediterraneo</option>
                           
                        </select>
            </div>
          <div class="form-group col-6 mt-3">
            <label for="formGroupExampleInput2">Distanza massima: </label>
            <input type="number" ref={searchDist} />
          </div>
            <button className="btn btn-warning  mt-3" onClick={handleFilter}>Search</button>
            <button className="btn btn-outline-danger mt-3" onClick={resetFilter}>Reset</button>

          </div>
        </form>
      </div>
    </div>
    <div className="container-filter d-flex justify-content-around">

      {filtered.map(restaurant => 
      <AllRestaurantPage key={restaurant.id} restaurant={restaurant} user={user} />
      )}
    </div>
    
  </>
  );
}

