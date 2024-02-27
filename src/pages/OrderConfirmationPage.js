import React from 'react';

function OrderConfirmationPage() {
  return (
    <div>
      <h2>Conferma dell'Ordine</h2>
      <p>Grazie per il tuo ordine! Ecco un riepilogo del tuo ordine:</p>
      <ul>
        <li>Pizza Margherita - 1</li>
        <li>Spaghetti alla Carbonara - 2</li>
        <li>Totale: €30</li>
      </ul>
      <p>Il tuo ordine verrà consegnato a: 1234 Main St</p>
      <p>Tempo stimato per la consegna: 45 minuti</p>
    </div>
  );
}

export default OrderConfirmationPage;
