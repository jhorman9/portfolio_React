import React from 'react';
import '../styles/Home.css'
import icon from '../images/iworking.png'

const Home = ({curriculum}) => {
    return (
        <div className='Home'>
            <div className='Home--description'>
                <h2 className='Home--description__title'>Hola, </h2>
                <h3 className='Home--description__description'>Soy desarrollador web <span>Front-end</span></h3>
                <p className='Home--description__parrafo'>Para desarrollar un proyecto uso:</p>
                <p className='Home--description__secondparrafo'>HTML5, CSS3 y Javascript. También sé usar libreria como React Js, logrando asi dominar el uso de Componentes, React-Route, Hooks, State, Props, peticion HTTP con axios, custom hooks, key, react hooks form.</p>
                <div className='Home--description__button'>
                    <button>
                        <a href={curriculum} download='Developer_Jhorman-Nieto-CV'>Descargar CV</a>
                    </button>
                </div>
            </div>
            <div className='Home--image'>
                <img src={icon} alt="iworking" style={{width:'75%', height:'75%'}}/>
            </div>
        </div>
    );
};

export default Home;