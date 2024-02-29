import React from "react";

export default function DetailsRestaurant(restaurant) {
  return (
    <div className="card mt-3 border-dark" data-bs-theme="dark" style={{width: "80%", margin: "0  auto"}}>
      <div className="card-header">{restaurant.name}</div>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}
