import axios from 'axios';
import { currentUser } from '../App';
import { atom, useAtom } from 'jotai';
import AllRestaurantPage from './AllRestaurantPage';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'; 



export default function DetailsRestaurant() {
  const [restaurant, setRestaurants] = useState([]);
  const [user, setUser] = useAtom(currentUser);
  let {id} = useParams();

  useEffect(() => {
    axios.get(`/restaurants/${id}`)
      .then((response) => {
        setRestaurants(response.data);
        
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, [id]);
  return (<>

<div className="card mt-3 border-dark " data-bs-theme="dark" style={{ width: "70%", margin: "0 auto" }} >
  <img src={restaurant.imgUrl} className="card-title" alt="immagine ristorante"/>
  <div className='container d-flex justify-content-around'>
    <div className="card-body ">
      <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />  Max delivery distance: {restaurant.maxDeliveryDistance}
          </p>
          <p className="card-text">
          <FontAwesomeIcon icon={faPhone} />  Contact us: {restaurant.phone}
          </p>
          <p className="card-text">
          <FontAwesomeIcon icon={faClock} />  Opening hour: {restaurant.openingHour}
          </p>

    </div>
      <div className='card-body'>
         <h5>MENU</h5>
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item <button type="button" class="btn-warning" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button></li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
      </div>
</div>

    </>
  );
}
