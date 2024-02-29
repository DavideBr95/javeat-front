
import { Link } from "react-router-dom";
import imageRestaurant from "../background/baldurs-gate-3-elfsong-room-barkeep.avif";



export default function AllRestaurantPage(restaurant) {

return(
<>
  <div className="card mt-3 border-dark" data-bs-theme="dark" style={{width: "80%", margin: "0  auto"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <div style={{ backgroundImage: `url(${imageRestaurant})`, height: "15rem", backgroundSize: "cover", 
                      }} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body ">
          {/* <p>Restaurant id: {props.id}</p>  */}
          
          <h5 className="card-title">  {restaurant.name}</h5>
          
          <p>Distance: {restaurant.positionX},{restaurant.positionY}</p>
          <p>Food type: {restaurant.foodTypes}</p>
          <p className="card-text text-body-secondary">
            <button className="btn btn-warning" type="button">
              <Link className="nav-link" to={"/restaurant/"+restaurant.id}>Details</Link></button></p>
        </div>
      </div>
    </div>
  </div>           
</>
);
}


