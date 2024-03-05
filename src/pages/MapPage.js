import { currentUser, loggedUser } from '../App';
import { atom, useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




export default function MapPage() {
    const [userIn, setUser] = useAtom(loggedUser);
    const [restaurant, setRestaurants] = useState({});

    let { id } = useParams();

    useEffect(() => {
   
          axios.get(`/restaurants/map/${userIn.id}`)
            .then(response => {
              setRestaurants(response.data);
              console.log("Response:", response.data); // Log the response data
            })
            .catch(error => {
              console.error("Error retrieving restaurant data:", error);
            });
      
    }, [id, loggedUser]);

useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');    
    const width = 100 * 20;
    const height = 100 * 20;

    function drawAxes() {
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    }

    function drawPoint(x, y, color) {
      ctx.beginPath();
      ctx.arc(x + width / 2, -y + height / 2, 3, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }

    function drawGrid(gridSize) {
        ctx.strokeStyle = "#ccc";
        for (let x = -width / 2; x <= width / 2; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x + width / 2, 0);
          ctx.lineTo(x + width / 2, height);
          ctx.stroke();
        }
        for (let y = -height / 2; y <= height / 2; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, -y + height / 2);
          ctx.lineTo(width, -y + height / 2);
          ctx.stroke();
        }
      }

    drawAxes();
    drawGrid(20);
    drawPoint(0, 0, 'red');
    drawPoint(50, -30, 'blue');
  }, []);

return(
    <>
     <h1>Mappa Cartesiana</h1>
     <canvas id="canvas" width={100 * 5} height={100 * 5}></canvas>
    </>
)
}
