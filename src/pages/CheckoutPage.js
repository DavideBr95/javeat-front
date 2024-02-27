import React from 'react';

function CheckoutPage() {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Indirizzo di consegna</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St"/>
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">Metodo di pagamento</label>
          <select className="form-select" id="paymentMethod">
            <option>Carta di credito</option>
            <option>PayPal</option>
            <option>Contanti alla consegna</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Conferma ordine</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
