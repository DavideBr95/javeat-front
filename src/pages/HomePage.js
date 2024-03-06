import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'; 
import { useAtom } from "jotai";
import { loggedUser } from '../App';
import background from "../background/home.jpg";
import MapPage from './MapPage';
import homepage_style from "../style/homepage_style.css"


function HomePage() {
  const [userIn, setUser] = useAtom(loggedUser);

  return (
  <>
   <div className="welcome">
  <div className="row">
    <div className="col-4">
      {userIn ? (
        <>
          <h5>Welcome to Baldur's Gate on-line food delivery </h5>
        </> 
      ) : (
        <>
          <h5>Please Login or Register <FontAwesomeIcon icon={faArrowTurnUp} /></h5>
        </> 
      )}
    </div>
    <div className="col-4">
      <img className="homepage-img" src={background} /> 
    </div>
    <div className="col-4">
      <MapPage/>
    </div>
  </div>
</div>

 
 
  </>
  );
}

export default HomePage;
