import React from 'react';
import '../styles/Projects.css'
import images from '../images/images';

const Projects = () => {
    return (
        <div className='Projects'>
            <h2 className='Projects__title'>Proyectos</h2>
            <div className='Projects__card-container'>
                <a href="https://ecommerce-jhorman-vite.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.ecommerce} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.redux} alt="" />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.boostrap} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://pokedex-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.pokemon} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.redux} alt="" />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://rickandmortyreact-jhorman.netlify.app/" target='_blank'> 
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.rickAndMorty} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>                
                </a>
                <a href="https://clima-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.clima} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://countries-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.contries} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://pokemonapis-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.pokemonCard} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://phrase-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.phrase} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.react} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://ecommerce-jhormannieto.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.ecommerceVanila} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://generatorcss-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.generatorCssVanila} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://to-do-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.toDoVanila} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://piano-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.pianoVanila} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://third-reto-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.retoFrontend} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://portfolio-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.retoFrontend2} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://jhorman-reto-frontend2.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.retoFrontend3} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                        </div>
                    </div>
                </a>
                <a href="https://portfolio-maqueta-jhorman.netlify.app/" target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.retoFrontend4} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>
                </a>
                <a href='https://jhorman-apisrickandmorty.netlify.app/' target='_blank'>
                    <div className="Projects__card">
                        <img className='Projects__img' src={images.rickAndMortyVanila} alt="" />
                        <h3>Herramientas usadas</h3>
                        <div className="Projects__icons--content">
                            <img className='Projects__icons' src={images.html} />
                            <img className='Projects__icons' src={images.css} alt="" />
                            <img className='Projects__icons' src={images.javascript} alt="" />
                        </div>
                    </div>

                </a>
            </div>
        </div>
    );
};

export default Projects;