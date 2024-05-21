import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
			<div className="container">
				<div className="section-title">
					<h2>Acerca de</h2>
					<p>
						Mi nombre es Jorge, y me caracterizo por ser una persona
						apasionada por el aprendizaje continuo. Siempre estoy en
						busca de oportunidades que me permitan crecer tanto a
						nivel personal como profesional
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4" data-aos="fade-right">
						<img
							src="/Assets/img/profile-pic.png"
							className="img-fluid"
							alt=""
						/>
					</div>
					<div
						className="col-lg-8 pt-4 pt-lg-0 content"
						data-aos="fade-left"
					>
						<h3>Software Engineer &amp; Web Developer.</h3>
						<p className="fst-italic">
							Con experiencia en múltiples lenguajes de
							programación, bases de datos y frameworks, me
							especializo en crear soluciones tecnológicas
							eficientes y robustas que cumplen con los más altos
							estándares de calidad
						</p>
						<div className="row">
							<div className="col-lg-6">
								<ul>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Cumpleaños:</strong>
										<span>12 Febrero</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Universidad:</strong>
										<span>UAEH</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Ciudad:</strong>
										<span>Pachuca, Hidalgo</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Sitio web:</strong>
										<span
											><a
												href="https://yorchmystery.com"
												target="_blank"
												>yorchmystery.com</a
											></span
										>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<ul>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Edad:</strong>
										<span>32</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Email:</strong>
										<span>jorge@yorchmystery.com</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Nivel:</strong>
										<span>Senior</span>
									</li>
									<li>
										<i className="bi bi-chevron-right"></i>
										<strong>Freelance:</strong>
										<span>Disponible</span>
									</li>
								</ul>
							</div>
						</div>
						<p>
							Desde 2017, me he formado como un profesional
							especializado en el desarrollo web, con experiencia
							en la creación de sistemas completos desde cero
							hasta su lanzamiento en producción. Me considero un
							Fullstack Developer, gracias a mi experiencia como
							freelance, donde he desarrollado productos
							completos, desde el diseño del frontend hasta la
							implementación del backend y las bases de datos, así
							como el despliegue en servidores. Aunque mi
							especialización principal es el desarrollo frontend,
							donde diseño interfaces de usuario atractivas y
							funcionales, mi experiencia integral me permite
							ofrecer soluciones digitales completas y de alta
							calidad.
						</p>
					</div>
				</div>
			</div>
		</section>
    );
};

export {About};