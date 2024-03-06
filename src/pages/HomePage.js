import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'; 
import { useAtom } from "jotai";
import { loggedUser } from '../App';
import MapPage from './MapPage';
import background from "../background/home.jpg";
import homepage_style from "../style/homepage_style.css"


function HomePage() {
  const [userIn, setUser] = useAtom(loggedUser);

  return (
  <>
  
  <div className="ms_homepage">
    <div className="">
      {userIn ? (
        <>
        <div className="ms_heading">
          <h1>Welcome</h1><br/>
          <h2>to Baldur's Gate</h2><br/>
          <h2>on-line food delivery</h2>
        </div>
        </> 
      ) : (
        <>
          <h5 >Please Login or Register <FontAwesomeIcon icon={faArrowTurnUp} /></h5>
        </> 
      )}
    </div>
 
    <div className="">
    {userIn && <MapPage/>}
    </div>
  </div>

 
 
  </>
  );
}

export default HomePage;
