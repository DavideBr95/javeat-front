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
import "../style/menu_style.css"


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
  <div className='d-flex '>
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

      <div class="CartContainer">
        <div class="Header">
          <h3 class="Heading">Shopping Cart</h3>
          <h5 class="Action">Remove all</h5>
        </div>

        <div class="Cart-Items">
            <div class="image-box">
            
            </div>
            <div class="about">
              <h5 class="title">...</h5>
             
              
            </div>
            <div class="counter">
              <div class="btn">+</div>
              <div class="count">...</div>
              <div class="btn">-</div>
            </div>
            <div class="prices">
              <div class="amount">...</div>
              {/* <div class="save"><u>Save for later</u></div> */}
              <div class="remove"><u>Remove</u></div>
            </div>
        </div>

        <div class="Cart-Items pad">
            <div class="image-box">
          
            </div>
            <div class="about">
              <h5 class="title">...</h5>
              
              
            </div>
            <div class="counter">
              <div class="btn">+</div>
              <div class="count">...</div>
              <div class="btn">-</div>
            </div>
            <div class="prices">
              <div class="amount">...</div>
              {/* <div class="save"><u>Save for later</u></div> */}
              <div class="remove"><u>Remove</u></div>
            </div>
        </div>
      <hr/> 
      <div class="checkout">
      <div class="total">
        <div>
          <div class="Subtotal">Sub-Total</div>
          <div class="items">...</div>
        </div>
        <div class="total-amount">...</div>
      </div>
      <button class="button">Checkout</button></div>
    </div>
    </div>

</div>

    </>
  );
}
