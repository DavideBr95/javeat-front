import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import background from "../background/home.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'; 
import { useAtom } from "jotai";
import { loggedUser } from '../App';




function HomePage() {
  const [userIn, setUser] = useAtom(loggedUser);

  return (
  <>
  <div className='container'>
    <div class="card text-bg-dark mt-3"style={{width: "80%", margin: "0 auto"}}>
      <img src={background} alt="immagine di benvenuto" /> 
      <div class="card-img-overlay">
        <div  class="text-end">
                  {
                  userIn    
                  ?
                  <>
                   <h5>Welcome to Baldur's Gate on-line food delivery </h5>
                    
                  </> 
                  :  
                  <>
                   <h5 >Please Login or Register <FontAwesomeIcon icon={faArrowTurnUp} /></h5>

                  </> 
                  }
                  </div>
    
      </div>
    </div>

</div>
  </>
  );
}

export default HomePage;
