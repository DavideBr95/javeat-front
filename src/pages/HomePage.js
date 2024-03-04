import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'; 
import { useAtom } from "jotai";
import { loggedUser } from '../App';
import background from "../background/home.jpg";
import map from "../background/map with dots.jpg";

   





function HomePage() {
  const [userIn, setUser] = useAtom(loggedUser);

  return (
  <>
  <div className='container d-flex justify-content-evenly'>
    <div className="card text-bg-dark " >
      <img src={background} alt="immagine di benvenuto" /> 
      <div className="card-img-overlay">
        <div  className="text-end">
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
      <img src={map} alt="immagine di benvenuto" /> 

    </div>

</div>
  </>
  );
}

export default HomePage;
