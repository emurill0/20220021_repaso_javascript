//Método reduce
    
// Array de números
const numbers1 = [1, 2, 3, 4, 5];

// Suma de todos los números utilizando reduce
const sum = numbers1.reduce((acumulator, valorActual) => {
    return acumulator + valorActual;
}, 0);

// Mostrar el resultado en la página
document.getElementById("result1").textContent = `La suma es: ${sum}`;

//Método filter
// Array de números
const numbers2 = [1, 2, 3, 4, 5];

// Filtrar los números pares utilizando filter
const evenNumbers = numbers2.filter((number) => {
    return number % 2 === 0;
});

// Mostrar el resultado en la página
document.getElementById("result2").textContent = `Números pares: ${evenNumbers}`;


const cantantesFavoritos = [
    {
        nombre: "Tyler, The Creator",
        edad: 33,
        fechaNacimiento: "Marzo 06 de 1991",
        ocupacion: "Cantante"
    },
    {
        nombre: "Rauw Alejandro",
        edad: 31,
        fechaNacimiento: "Enero 10 de 1993",
        ocupacion: "Cantante"
    },
    {
        nombre: "Quevedo",
        edad: 22,
        fechaNacimiento: "Diciembre 07 de 2001",
        ocupacion: "Cantante"
    },
    {
        nombre: "Gustavo Cerati",
        edad: 55,
        fechaNacimiento: "Agosto 11 de 1959",
        ocupacion: "Cantante"
    },
    {
        nombre: "Alvaro Díaz",
        edad: 25,
        fechaNacimiento: "Julio 25 de 1995",
        ocupacion: "Cantante"
    },
    {
        nombre: "Danny Ocean",
        edad: 31,
        fechaNacimiento: "Mayo 05 de 1992",
        ocupacion: "Cantante"
    },
    {
        nombre: "Mac Miller",
        edad: 26,
        fechaNacimiento: "Enero 19 de 1997",
        ocupacion: "Cantante"
    },
    {
        nombre: "Myke Towers",
        edad: 30,
        fechaNacimiento: "Enero 15 de 1994",
        ocupacion: "Cantante"
    },
    {
        nombre: "Feid",
        edad: 31,
        fechaNacimiento: "Agosto 19 de 1992",
        ocupacion: "Cantante"
    },
    {
        nombre: "Mora",
        edad: 28,
        fechaNacimiento: "Abril 18 de 1996",
        ocupacion: "Cantante"
    }
];


const divCantantes = document.getElementById("cantantes");


// Recorrer el arreglo utilizando forEach y mostrar la información en HTML
cantantesFavoritos.forEach((persona) => {
    const { nombre, edad, fechaNacimiento, ocupacion } = persona;

    const cantantesHTML = `
    <div>
      <h5>${nombre}</h5>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
      <p><strong>Ocupación:</strong> ${ocupacion}</p>
    </div>
    <hr>
  `;

    divCantantes.innerHTML += cantantesHTML;
});

// Función para obtener los datos de la API
async function obtenerDatos() {
    try {
      const respuesta = await fetch('https://randomuser.me/api/');
      const datos = await respuesta.json();
      return datos.results[0]; // Retorna un usuario aleatorio
    } catch (error) {
      console.log('Error al obtener los datos:', error);
    }
  }
  
  // Función para mostrar los datos en la página web
  function mostrarDatos(usuario) {
    const divDatos = document.getElementById('datos');
    divDatos.innerHTML = `
      <img src="${usuario.picture.large}" alt="Foto de perfil">
      <p>Nombre: ${usuario.name.first} ${usuario.name.last}</p>
      <p>Email: ${usuario.email}</p>
      <p>País: ${usuario.location.country}</p>
    `;
  }

  obtenerDatos()
  .then(usuario => mostrarDatos(usuario))
  .catch(error => console.log('Error:', error));