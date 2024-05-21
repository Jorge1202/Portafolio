import React from 'react';

interface Props {
	children: React.ReactNode;
}

const Head: React.FC<Props> = ({children}) => {
    return (
    <head>
		<meta charSet="UTF-8" />
		<meta name="description" content="Astro description" />
		<meta name="viewport" content="width=device-width" />

        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Jorge Balderas Barraza"/>
        <meta property="og:description" content="Bienvenido a mi portafolio personal, donde podrás explorar mi experiencia, habilidades y logros profesionales. Descubre mi CV y proyectos destacados, y conoce cómo puedo agregar valor a tu equipo o proyecto."/>
        <meta property="og:image" content="assets/img/favicon.png"/>
        <meta property="og:url" content="yorchmistery.com"/>
        <meta 
            content="Bienvenido a mi portafolio personal, donde podrás explorar mi experiencia, habilidades y logros profesionales. Descubre mi CV y proyectos destacados, y conoce cómo puedo agregar valor a tu equipo o proyecto." 
            name="description"/>
        <meta 
            content="yorchmistery, mistery, yorch mistery, yorch mystery, yorch, mystery, yorchmystery, Jorge Balderas, Jorge, Balderas, portafolio, currículum, CV, proyectos, habilidades, experiencia, desarrollo, diseño, front-end, back-end, creatividad, innovación, profesional" 
            name="keywords"/>
        <meta name="author" content="Jorge Balderas Barraza"/>


		{/* <!-- Favicons --> */}
		<link href="assets/img/favicon.ico" rel="icon"/>
		<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

		{/* <!-- Google Fonts --> */}
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

        {/* <!-- Vendor CSS Files --> */}
		<link href="Assets/vendor/aos/aos.css" rel="stylesheet"/>
		<link href="Assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
		<link href="Assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
		<link href="Assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
		<link href="Assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
		<link href="Assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
        {/* <!-- Template Main CSS File --> */}
		<link href="Assets/css/style.css" rel="stylesheet"/>

        {
            children
        }

	</head>
    );
  };


export { Head }