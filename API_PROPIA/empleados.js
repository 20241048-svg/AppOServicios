// Definimos la URL de la API oficial de Dragon Ball
const urlApi = "https://juandios.grupoctic.com/Peliculas/api/listar.php";

// Función asíncrona para pedir los datos
const cargarPersonajes = () => {
    // Usamos fetch para hacer la petición HTTP
    fetch(urlApi)
        .then(respuesta => respuesta.json()) // Convertimos la respuesta cruda a formato JSON
        .then(data => {
            const empleado = data;
           
            console.log("Datos recibidos:", empleado); // Debugging en consola
           
            // Llamamos a la función que se encarga de dibujar en pantalla
            mostrarPersonajes(empleado);
        })
        .catch(error => {
            // Buena práctica: Manejar errores por si falla la red o la API
            console.error("Error al cargar a los empleados:", error);
            alert("Hubo un error al cargar los datos. Revisa la consola.");
        })
}

// Función encargada de manipular el DOM
const mostrarPersonajes = (empleados) => {
    // 1. Seleccionamos el contenedor del HTML
    const contenedorPersonajes = document.getElementById("contenedor-personajes");
   
    // 2. Limpiamos el contenedor por si ya tenía contenido previo
    contenedorPersonajes.innerHTML = "";

    // 3. Recorremos cada personaje del array
    empleados.forEach(emple => {
        // Creamos un elemento DIV nuevo en memoria
        const tarjeta = document.createElement("div");
       
        // Le añadimos la clase CSS que definimos en el paso 3
        tarjeta.classList.add("practice-card");
       
        // Usamos Template Strings (``) para inyectar el HTML interno con los datos
        tarjeta.innerHTML = `
            <img src="${"https://juandios.grupoctic.com/Peliculas/img/"+emple.foto}" alt="${emple.Nombre}" width="100%" style="object-fit: contain; height: 300px;">
            <h3 class="practice-title">${emple.Nombre + " " + emple.Apellido_Paterno + " " +emple.Apellido_Materno} </h3>
            <p><strong>Telefono:</strong> ${emple.Telefono}</p>
            <p><strong>Correo:</strong> ${emple.Correo}</p>
        `;
       
        // Finalmente, agregamos la tarjeta completa al contenedor principal
        contenedorPersonajes.appendChild(tarjeta);
    })
}