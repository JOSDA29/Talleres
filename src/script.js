// Script para hacer las peticiones al servidor y actualizar los elementos del DOM
document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencias a los elementos del DOM
  const nombreElement = document.getElementById("nombre");
  const apellidosElement = document.getElementById("apellidos");
  const ciudadElement = document.getElementById("ciudad");

  // Realizar peticiones a los endpoints del servidor
  const fetchNombre = fetch("http://localhost:3000/nombre").then((response) =>
    response.text()
  );
  const fetchApellidos = fetch("http://localhost:3000/apellidos").then(
    (response) => response.text()
  );
  const fetchCiudad = fetch("http://localhost:3000/ciudad").then((response) =>
    response.text()
  );

  // Utilizar Promise.all para esperar a que todas las peticiones se completen
  Promise.all([fetchNombre, fetchApellidos, fetchCiudad])
    .then(([nombre, apellidos, ciudad]) => {
      // Actualizar los elementos del DOM con los datos recibidos
      nombreElement.textContent = `Nombre: ${nombre}`;
      apellidosElement.textContent = `Apellidos: ${apellidos}`;
      ciudadElement.textContent = `Ciudad: ${ciudad}`;
    })
    .catch((error) => {
      // Manejar errores de las peticiones
      console.error("Error fetching data:", error);
    });
});
