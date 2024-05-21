import React from 'react';

const Header = () => {
    return (       
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src="/Assets/img/profile-pic.png" alt="" className="img-fluid rounded-circle"/>
              <h1 className="text-light"><a href="index.html">Jorge Balderas</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://www.linkedin.com/in/jorge-balderass/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                <a href="https://github.com/Jorge1202" className="github" target="_blank"><i className="bx bxl-github"></i></a>
                {/* <!-- <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> --> */}
              </div>
            </div>
      
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="/#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Inicio</span></a></li>
                <li><a href="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Acerca de</span></a></li>
                <li><a href="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resumen</span></a></li>
                <li><a href="/#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                <li><a href="/#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contacto</span></a></li>
                {/* <!-- <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> --> */}
              </ul>
            </nav>
          </div>
        </header>
    );
};

export  {Header};