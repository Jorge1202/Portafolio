import React from 'react';

const Contact = () => {

    const divStyle = {
        display: 'block',
    };

    return (
        <section id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Contacto</h2>
                <p>
                    ¡Gracias por visitar mi sitio web! Si deseas ponerte en
                    contacto conmigo para discutir oportunidades laborales,
                    colaboraciones o simplemente para saludar, no dudes en
                    escribirme. Estoy siempre interesado en conocer nuevas
                    personas y explorar posibles proyectos. ¡Espero saber de
                    ti pronto!.
                </p>
            </div>

            <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Ubicación:</h4>
                            <p>Tulancingo, Hidalgo</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>jorge@yorchmystery.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-linkedin"></i>
                            <h4>Linkedin:</h4>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/jorge-balderass/"
                                    target="_blank"
                                    className="linkedin">/jorge-balderass
                                </a>
                            </p>
                        </div>

                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
                    </div>
                </div>

                <div
                    className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                >
                    <form
                        action="/forms/contact.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                    >
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Tu Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Tu Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Mensaje</label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows={10}
                                required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                                ¡Tu mensaje ha sido enviado.!
                            </div>
                        </div>
                        <div className="text-center">
                            <div
                                className="sent-message"
                                style={divStyle}
                            >
                                ¡Este servicio no está disponible
                                actualmente. Por favor, contáctame a través
                                de LinkedIn o por correo electrónico.!
                            </div>
                            {/* <button type="submit">Tu mensaje ha sido enviado</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export  {Contact};