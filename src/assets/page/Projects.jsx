import React from 'react';
import '../styles/Projects.css'
import htmlIcon from '../images/html5.png'
import cssIcon from '../images/css3.png'
import javascriptIcon from '../images/javascript.png'
import reduxIcon from '../images/redux.png'
import boostrapIcon from '../images/boostrap.png'
import reactIcon from '../images/react.png'
import ecommercePicture from '../images/projects/ecommercereact.png'
import pokemonPicture from '../images/projects/pokemonreact.png'
import pokemonCardPicture from '../images/projects/pokemoncard.png'
import rickAndMortyPicture from '../images/projects/rickandmorty.png'
import climaPicture from '../images/projects/climareact.png'
import contriesPicture from '../images/projects/contries.png'
import ecommerceVanillaPicture from '../images/projects/ecommercevanila.png'
import generatorCssVanilaPicture from '../images/projects/generatorcss.png'
import pianovanilaPicture from '../images/projects/pianovanila.png'
import rickAndMortyVanilaPicture from '../images/projects/rickandmortyvanila.png'
import phrasePicture from '../images/projects/phrasereact.png'
import todoVanilaPicture from '../images/projects/todovanila.png'
import retoFrontendPicture from '../images/projects/retofrontend.png'
import retoFrontendPicture2 from '../images/projects/retofrontend2.png'
import retoFrontendPicture3 from '../images/projects/retofrontend3.png'
import retoFrontendPicture4 from '../images/projects/retofrontend4.png'

const Projects = () => {
    return (
        <div className='Projects'>
            <h2 className='Projects__title'>Proyectos</h2>
            <div className='Projects__card-container'>
                <a href="https://ecommerce-jhorman-vite.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={ecommercePicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={reduxIcon} alt="" />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={boostrapIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://pokedex-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={pokemonPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={reduxIcon} alt="" />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://rickandmortyreact-jhorman.netlify.app/" target='_blank'> 
                    <div className="Projects__card">
                        <img className='Projects__img' src={rickAndMortyPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>                
                </a>
                <a href="https://clima-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={climaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://countries-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={contriesPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://pokemonapis-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={pokemonCardPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://phrase-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={phrasePicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={reactIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://ecommerce-jhormannieto.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={ecommerceVanillaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://generatorcss-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={generatorCssVanilaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://to-do-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={todoVanilaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://piano-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={pianovanilaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://third-reto-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={retoFrontendPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://portfolio-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={retoFrontendPicture2} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://jhorman-reto-frontend2.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={retoFrontendPicture3} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://portfolio-maqueta-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={retoFrontendPicture4} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>
                </a>
                <a href='https://jhorman-apisrickandmorty.netlify.app/' target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={rickAndMortyVanilaPicture} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={htmlIcon} />
                            <img className='Projects__icons' src={cssIcon} alt="" />
                            <img className='Projects__icons' src={javascriptIcon} alt="" />
                        </div>
                    </div>

                </a>
            </div>
        </div>
    );
};

export default Projects;