import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllRestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Effettua la chiamata API al caricamento del componente
    const fetchRestaurants = async () => {
      try {
        
        const response = await axios.get('http://localhost:3000/restaurants');
        setRestaurants(response.data); // Imposta i ristoranti con i dati ricevuti
      } catch (error) {
        console.error("Errore durante il recupero dei ristoranti:", error);
      }
    };

    fetchRestaurants();
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta

  return (
    <div className='container mt-3'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Dettagli</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => (
            <tr key={restaurant.id}>
              <th scope="row">{index + 1}</th>
              <td>{restaurant.name}</td>
              {/* Assumi che l'ID del ristorante venga utilizzato per costruire un URL ai dettagli del ristorante */}
              <td><a href={`/restaurant/${restaurant.id}`}>Visualizza Dettagli</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllRestaurantsPage;
