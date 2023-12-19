import React from "react";
import { Link } from "react-router-dom";

export const Card = ({mascota}) => {

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img 
        width="100%" 
        src={mascota.image} 
        alt="imagen" 
        />

        <h3 className="m-2 text-center text-dark"> {mascota.name}</h3>
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
            <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={`/detail/${mascota.id}`} className="nav-link px-2 text-secondary">Detalle</Link>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
