
import { Link } from "react-router-dom";
import imageRestaurant from "../background/baldurs-gate-3-elfsong-room-barkeep.avif";



export default function DetailsRestaurantPage(props) {
    function Card({ name, phone, opening , closing, x, y}) 
    {
        return (
<>
            <div class="card" data-bs-theme="dark" >
                <img class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Restaurant {name}</h5>
                    <p class="card-text">Our Phone: {phone}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{opening}/{closing}:</li>
                    <li class="list-group-item">({x},{y})</li>
                   
                </ul>
              
            </div>
</>
        );
    }

    
    return(
        <>

<div class="card mt-3 border border-white" data-bs-theme="dark" style={{width: "80%", margin: "0  auto"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <div style={{ backgroundImage: `url(${imageRestaurant})`, height: "15rem", backgroundSize: "cover", 
                    }} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        {/* <p>Restaurant id: {props.id}</p>  */}
        
        <h5 class="card-title">  {props.name}</h5>
        
        {/* <p>Distance {props.positionX},{props.positionY}</p> */}
        <p class="card-text"><small class="text-body-secondary"><small><button class="btn btn-warning" type="button"><Link class="nav-link" to={"/RestaurantDetail/"+props.id}>Details</Link></button></small></small></p>
      </div>
    </div>
  </div>
</div>

            
        </>
    );
}


