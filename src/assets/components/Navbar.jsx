import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/orangeLogo.png'
import '../styles/Nav.css'

const Navbar = () => {
    return (
        <header>
          <nav>
            <div className='header--logo'>
              <img className='header--logo__img' style={{width: '100px', height:'75px'}} src={logo} alt="Jhorman Nieto P" />
            </div>
              <ul className='header--link'>
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'aboutme'}>Sobre mí</Link></li>
                <li><Link to={'projects'}>Proyectos</Link></li>
                <li><Link to={'contact'}>Contactame</Link></li>
              </ul>
          </nav>
        </header>
    );
};

export default Navbar;