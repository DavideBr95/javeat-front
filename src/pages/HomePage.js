import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function HomePage() {
  return (
   <>
  <div className="container mt-3"  data-bs-theme="dark">
  <div className="card text-center border border-white">
  <div className="card-header">
  {/* <img src="..." className="img-fluid" alt="..."/> */}
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
  </div>
   </>
  );
}

export default HomePage;
