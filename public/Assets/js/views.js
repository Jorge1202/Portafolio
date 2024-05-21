
function createFile(){
    const visitante = {
        nombre: 'Nuevo Visitante',
        correo: 'nuevo@visitante.com',
      };

      // Convertir objeto a formato JSON
      const data = JSON.stringify(visitante, null, 2);

      // Crear un Blob
      const blob = new Blob([data], { type: 'application/json' });

      // Guardar el Blob como archivo
      saveAs(blob, 'visitante.json');
}

// createFile();


function trackVisitor() {
  // Obtener información del visitante
  const visitante = {
    userAgent: navigator.userAgent,
    idioma: navigator.language,
    url: window.location.href,
    referrer: document.referrer,
  };

  // Guardar información del visitante en una cookie
  document.cookie = `visitante=${JSON.stringify(visitante)}; max-age=${60 * 60 * 24 * 30}; path=/`;
}

// trackVisitor();


// Obtener la cookie
function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    .split('=')[1];
  return JSON.parse(decodeURIComponent(cookieValue));
}

// // Consultar la información del visitante
// const visitante = getCookie('visitante');
// console.log(visitante);

