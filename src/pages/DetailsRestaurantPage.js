import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailsRestaurantPage() {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const { id } = useParams(); // Assumendo che stai utilizzando l'ID nella URL

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/restaurants/${id}`);
                setRestaurantDetails(response.data);
            } catch (error) {
                console.error('Errore durante il recupero dei dettagli del ristorante:', error);
            }
        };

        fetchRestaurantDetails();
    }, [id]);

    if (!restaurantDetails) {
        return <div>Caricamento in corso...</div>;
    }

    return (
        <div>
            <h1>{restaurantDetails.name}</h1>
            <p>Telefono: {restaurantDetails.phone}</p>
            <p>Posizione: ({restaurantDetails.positionx}, {restaurantDetails.positiony})</p>
            <p>ID Menu: {restaurantDetails.menu_id}</p>
            <p>Distanza massima consegna: {restaurantDetails.max_delivery_distance}</p>
            <p>Prezzo consegna per unità: €{restaurantDetails.delivery_price_per_unit}</p>
            <p>Orario di apertura: {restaurantDetails.opening_hour}</p>
            <p>Orario di chiusura: {restaurantDetails.closing_hour}</p>
            {/* Aggiungi qui ulteriori dettagli se necessario */}
        </div>
    );
}

export default DetailsRestaurantPage;
