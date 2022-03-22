import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Estructura de navbar
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="nav nav-tabs mx-auto" >
            <li className="nav-item">
                <Link className='navbar-brand nav-link text-light' to='/'> Inicio </Link>
            </li>
            <li className="nav-item">
                <Link className='navbar-brand nav-link text-light' to='/personajes'> Personajes </Link>
            </li>
            <li className="nav-item">
                <Link className='navbar-brand nav-link text-light' to='/favoritos'> Favoritos </Link>
            </li>
          </ul>             
        </nav>
    </div>
  )
}

export default Navbar
