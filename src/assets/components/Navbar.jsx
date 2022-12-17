import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/orangeLogo.png'
import '../styles/Nav.css'

const Navbar = () => {

  const [closeNav, setCloseNav] = useState(true);

  const handleShow = () => {
    setCloseNav(!closeNav)
  }

  console.log
    return (
        <header>
          <nav>
            <div className='header--logo'>
              <img className='header--logo__img' style={{width: '100px', height:'75px'}} src={logo} alt="Jhorman Nieto P" />
            </div>
                <i onClick={handleShow} className="fa-solid fa-bars"></i>
              <ul className={`${closeNav ? '' : 'showNavResponsive'}`}>
                <li onClick={handleShow} className={`${closeNav ? 'hiddenNav' : ''}`}><Link to={'/'}>Inicio</Link></li>
                <li onClick={handleShow} className={`${closeNav ? 'hiddenNav' : ''}`}><Link to={'aboutme'}>Sobre mí</Link></li>
                <li onClick={handleShow} className={`${closeNav ? 'hiddenNav' : ''}`}><Link to={'projects'}>Proyectos</Link></li>
                <li onClick={handleShow} className={`${closeNav ? 'hiddenNav' : ''}`}><Link to={'contact'}>Contactame</Link></li>
              </ul>
          </nav>
        </header>
    );
};

export default Navbar;