import style from '../style/payment_style.scss'
import cashorcard from "../background/kisspng-currency-credit-card-exchange-rate-money-foreign-e-travel-money-card-using-cash-passport-as-a-trave-5b65ddc4683b49.1660119115334025644269.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'; 
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';

 


export default function AddDeliveryPage(){
    const navigate = useNavigate();

    function handleConfirmation() {
        navigate('/confirmed');
      }
    return(<>
        <div className="slide-container">
  
 

    <div className="wrapper">
      <div className="clash-card barbarian">
        <div className="clash-card__image clash-card__image--barbarian">
          <img src={cashorcard} alt="cash or card" />
        </div>
          
        <div class="container-icons d-flex align-items-center justify-content-evenly">
        <div style={{verticalAlign: "middle"}}>CHOOSE YOUR PAYMENT METHOD:</div>
        <div class="clash-card__unit-description">
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
          <div class="icon-shadow"></div>
        </div>
        <div class="clash-card__unit-description">
          <FontAwesomeIcon icon={faMoneyBill1} size="2x"/>
          <div class="icon-shadow"></div>
        </div>
    </div>
      


    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
    <div className="one-half">
        <div className="stat">Delivery time</div>
        <div className="stat-value m-3">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select the preferred delivery time</option>
                <option value="1">10:15-10:30</option>
                <option value="2">10:45-11:00</option>
                <option value="3">11:15-11:30</option>
            </select>
        </div>
        </div>

      <div className="one-half no-border">
        <div className="stat">Note</div>
        <div className="input-group">
        <textarea className="form-control m-3" placeholder='Please tell us about any preferences and/or allergies'></textarea>
        </div>
      </div>
     
       
        <button className="btn btn-light mb-3" onClick={handleConfirmation}>CONFIRM</button>

    </div>
  </div>
</div>

 
  
</div> 
        </>);
}