import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'; 
import { useAtom } from "jotai";
import { loggedUser } from '../App';
import background from "../background/home.jpg";
import MapPage from './MapPage';
import style from "../style/style.css"


function HomePage() {
  const [userIn, setUser] = useAtom(loggedUser);

  return (
  <>
  <div className='welcome'>
    <div className='d-flex justify-content-evenly'>
      
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
    <img className="homepage-img" src={background} /> 
    </div>
    </div>
    <div className="container-mappa-cartesiana">
      <div><MapPage/>
    </div>
  </div>
 
  </>
  );
}

export default HomePage;
