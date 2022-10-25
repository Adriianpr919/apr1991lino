import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound-bg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Página No Encontrada Lo Siento.</h2>
          <p>Es posible que la página que este buscando haya sido eliminada debido a un cambios de nombre o no este disponible temporalmente.</p>
          <Link to="/">
            <i className="fa-solid fa-globe"></i> Volver Inicio.
          </Link>
          <div className="notfound-social">
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube" style={{ fontSize: "25px" }}></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram" style={{ fontSize: "25px" }}></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook" style={{ fontSize: "25px" }}></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-whatsapp" style={{ fontSize: "25px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;