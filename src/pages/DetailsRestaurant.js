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

<div className="card mt-3">
  {/* <img src={restaurant.imgUrl} className="card-title" alt="immagine ristorante"/> */}
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
        <div class="card">
         <h5>MENU</h5>
          <ul class="list-group list-group-flush">
            <li ><p class="d-inline-flex gap-1">
  <a href="#" class="btn" role="button" data-bs-toggle="button"/>+</p></li>
            <li >A second item</li>
            <li >A third item</li>
          </ul>
        </div>
      </div>
      </div>
</div>

    </>
  );
}
