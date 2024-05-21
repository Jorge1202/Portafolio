import React from 'react';

const SectionHero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
            <h1>Jorge Balderas Barraza</h1>
            <p>Soy <span className="typed" data-typed-items="Developer, Product Manager, Freelancer, Entrepreneur"></span></p>
            </div>
        </section>
    );
};

export {SectionHero};