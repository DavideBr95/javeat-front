import style from '../style/payment_style.scss'
import cashorcard from "../background/kisspng-currency-credit-card-exchange-rate-money-foreign-e-travel-money-card-using-cash-passport-as-a-trave-5b65ddc4683b49.1660119115334025644269.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'; 
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'; 


export default function AddDeliveryPage(){
    return(<>
        <div className="slide-container">
  
 

<div className="wrapper">
  <div className="clash-card barbarian">
    <div className="clash-card__image clash-card__image--barbarian">
      <img src={cashorcard} alt="cash or card" />
    </div>
    <div className="clash-card__unit-name">Il tuo ordine:</div>


    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
    <div className="one-half">
        <div className="stat">Orario di consegna<sup>S</sup></div>
        <div className="stat-value m-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        </div>

      <div className="one-half no-border">
        <div className="stat">Note</div>
        <div className="input-group">
        <textarea className="form-control m-3"></textarea>
        </div>
      </div>
        <div className="">CHOOSE YOUR PAYMENT METHOD:</div>
        <div className="container-icons d-flex justify-content-around">
        <div className="clash-card__unit-description">
        <FontAwesomeIcon icon={faCreditCard} size="lg" />
        </div>
        <div className="clash-card__unit-description">
        <FontAwesomeIcon icon={faMoneyBill1} size="lg"/>
        </div>
        </div>
        <button className="btn btn-light mb-3">CONFIRM</button>
    </div>
  </div>
</div>

 
  
</div> 
        </>);
}