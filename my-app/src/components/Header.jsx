import React from 'react'
// import skillone from './images/skillone.png'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';



function Header() {


  return (

    <div className="container-fluid p-0">
      <navbar className="navbar  navbar-expand-lg " >
        <div className="container-fluid">
          <HashLink className="navbar-brand" to="#homepage" >
            <p>Coins Beta</p>
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <HashLink className="nav-link  " aria-current="page" smooth to="/"  >
                  HOME
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/Exchange">
                Exchange
                </HashLink>
              </li>
              <li className="nav-item"  >
                <HashLink className="nav-link" smooth to="/Coins" >
                Coins
                </HashLink>

              </li>
               

            </ul>
            
          </div>
        </div>
      </navbar>
    </div>

  );
}


export default Header