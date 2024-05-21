import React from 'react';

const Portafolio = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
        <div className="container">
            <div className="section-title">
                <h2>Portfolio</h2>
                <p>
                En mi portafolio encontrarás una selección de proyectos en los que he trabajado, mostrando mi experiencia y habilidades como desarrollador web. 
                Desde aplicaciones web hasta sitios interactivos, cada proyecto refleja mi pasión por crear soluciones digitales innovadoras y de alta calidad. 
                Te invito a explorar mi trabajo y descubrir cómo puedo agregar valor a tu equipo o proyecto.
                </p>
            </div>
    
            <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">Todos</li>
                    <li data-filter=".filter-games">Juegos</li>
                    <li data-filter=".filter-apis">Consumo de APIs</li>
                    {/* <li data-filter=".filter-freelancer">Freelancer</li> */}
                </ul>
                </div>
            </div>
    
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-4 col-md-6 portfolio-item filter-apis">
                    <div className="portfolio-wrap">
                        <img src="/Assets/img/portfolio/rickandmorty/rickandmorty.yorchmystery.png" className="img-fluid" alt=""/>
                        <div className="portfolio-links">
                            <a href="/Assets/img/portfolio/rickandmorty/rickandmorty.yorchmystery.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="                
                                API de Rick and Morty
                            "><i className="bi bi-eye"></i></a>
                            <a href="/View_rickandmorty" title="Ver Sitio"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-games">
                    <div className="portfolio-wrap">
                        <img src="/Assets/img/portfolio/ahorcado/ahorcado2.png" className="img-fluid" alt=""/>
                        <div className="portfolio-links">
                        <a href="/Assets/img/portfolio/ahorcado/ahorcado.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="                
                            Juego del ahorcado
                        "><i className="bi bi-eye"></i></a>
                        <a href="/View_ahorcado" title="Ver Sitio"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                </div>



            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                    <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
                </div> */}
    
                
                {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src="/Assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="">
                    <div className="portfolio-links">
                    <a href="/Assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>
                </div> */}
    
            </div>
        </div>
    </section>
    );
};

export {Portafolio};