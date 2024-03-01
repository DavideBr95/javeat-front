import { useAtom } from "jotai";
import { loggedUser } from '../App';
import { Link } from "react-router-dom";
import imageRestaurant from "../background/baldurs-gate-3-elfsong-room-barkeep.avif";
import React from 'react';
import "../style/style.css"


export default function AllRestaurantPage({ restaurant, user}) {
  const [userIn, setUser] = useAtom(loggedUser);
 
  // if (!user || typeof user.positionX === 'undefined' || typeof user.positionY === 'undefined') {
  //   return <div>User information not available</div>;
  // }
  const isOpen = (openingHour, closingHour) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    return currentHour >= openingHour && currentHour < closingHour;
  };

  // const getDistance = () => {
  //   const deltaX = restaurant.positionX - user.positionX;
  //   const deltaY = restaurant.positionY - user.positionY;
  //   return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  // };

return (
  <>
    <div className="row">
      <div className="p-2">
          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front ">
                <div style={{ backgroundImage: `url(${imageRestaurant})`, height: "20rem", width: "20rem", backgroundSize: "cover", marginBottom: "10px" }}  alt="..." />
              </div>
              <div class="flip-card-back">
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p>Food type: {restaurant.foodTypes}</p>
                  <div className="mb-3">
                  <p className="card-text text-body-secondary">
                  {isOpen(restaurant.openingHour, restaurant.closingHour) ? (
                  <span>Open</span>
                  ) : (
                  <span>Closed</span>
                  )}
                  {/* Distance: {getDistance()} */}
                  </p>
                  </div>

                  <div>
                  {
                  userIn    
                  ?
                  <>
                    <button className="btn btn-warning mt-3" type="button">
                    <Link className="nav-link" to={"/restaurants/" + restaurant.id}>Details</Link>
                    </button>

                    
                  </> 
                  :  
                  <>
                  <button className="btn btn-warning mt-3" type="button" style={{visibility: "hidden"}}>
                  <Link className="nav-link" to={"/restaurants/" + restaurant.id}>Details</Link>
                  </button>

                  </> 
                  }
                  </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>

  </>
  );

}