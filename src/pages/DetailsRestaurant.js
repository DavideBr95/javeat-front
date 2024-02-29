import axios from 'axios';
import { currentUser } from '../App';
import { atom, useAtom } from 'jotai';
import AllRestaurantPage from './AllRestaurantPage';
import React, { useRef, useEffect, useState } from 'react';

export default function DetailsRestaurant(rest) {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useAtom(currentUser);
  const [filtered, setFiltered] = useState([]);




  useEffect(() => {
    axios.get(`/restaurants/${rest.id}`)
      .then((response) => {
        setRestaurants(response.data);
        
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, []);
  return (<>
    <div className="card mt-3 border-dark" data-bs-theme="dark" style={{width: "80%", margin: "0  auto"}}>
      <div className="card-header">{rest.name}</div>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      {filtered.map(restaurant => 
        <AllRestaurantPage key={restaurant.id} restaurant={restaurant} user={user} />
      )}
    </div>
    </>
  );
}
