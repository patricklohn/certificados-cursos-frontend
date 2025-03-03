import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to="/">Certificados</Link>
        </h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-certific">Adicionar Certificado</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
