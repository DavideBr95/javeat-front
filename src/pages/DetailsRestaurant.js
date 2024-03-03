import axios from 'axios';
import { currentUser } from '../App';
import { atom, useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import "../style/menu_style.css"

export default function DetailsRestaurant() {
  const [restaurant, setRestaurants] = useState({});
  const [dishes, setDishes] = useState([]);
  const [user] = useAtom(currentUser);
  const [counts, setCounts] = useState({});
  const [prices, setPrices] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`/restaurants/${id}`)
      .then((response) => {
        setRestaurants(response.data);
        getDishes(response.data.menu.id);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }, [id]);

  function getDishes(id) {
    axios.get(`/dishes/${id}`)
      .then((response) => {
        setDishes(response.data);
        const initialCounts = {};
        const initialPrices = {};
        response.data.forEach(dish => {
          initialCounts[dish.id] = 0;
          initialPrices[dish.id] = dish.price; // assuming the price property exists in your dish object
        });
        setCounts(initialCounts);
        setPrices(initialPrices);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati dei ristoranti:", error);
      });
  }

  function increment(id) {
    setCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1
    }));
  }

  function decrement(id) {
    setCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] - 1
    }));
  }

  useEffect(() => {
    let subTotal = 0;
    Object.keys(counts).forEach(id => {
      subTotal += counts[id] * prices[id];
    });
    setSubtotal(subTotal);
  }, [counts, prices]);

  return (
    <>
      <div className="card mt-3" style={{ margin: "0 auto", width: "80%" }}>
        <div className='d-flex '>
          <div className="card-body text-light">
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
              <h3 class="Heading">Our menu</h3>
              <h5 class="Action">Remove all</h5>
            </div>
            {dishes.map(dish =>
              <div class="Cart-Items" key={dish.id}>
                <div class="about">
                  <h5 class="title">{dish.name}</h5>
                  <p class="price">Price: {dish.price}</p>
                </div>
                <div class="counter">
                  <div class="btn" onClick={() => increment(dish.id)}>+</div>
                  <div class="count">{counts[dish.id]}</div>
                  <div class="btn" onClick={() => decrement(dish.id)}>-</div>
                </div>
              </div>
            )}
            <hr />
            <div class="checkout">
              <div class="total">
                <div>
                  <div class="Subtotal">Sub-Total</div>
                
                </div>
                <div class="total-amount">{subtotal}</div>
              </div>
              <button class="button">Checkout</button></div>
          </div>
        </div>
      </div>
    </>
  );
}
