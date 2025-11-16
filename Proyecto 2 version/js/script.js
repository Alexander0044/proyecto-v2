/* =========================================
   SCRIPT PRINCIPAL – CINE LAS PALMAS
   Comentarios en español
   ========================================= */

/* ----- Menú móvil ----- */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("activo");
});

/* ----- Scroll suave ----- */
const enlacesMenu = document.querySelectorAll("nav ul li a");

enlacesMenu.forEach(enlace => {
  enlace.addEventListener("click", e => {
    if (enlace.hash !== "") {
      e.preventDefault();
      const destino = document.querySelector(enlace.hash);
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ----- Validación del formulario ----- */
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }

  alert("Formulario enviado correctamente!");
  return true;
}

/* ----- CRUD SIMPLIFICADO ----- */
let listaPeliculas = [];

function agregarPelicula() {
  const titulo = document.getElementById("titulo-pelicula").value.trim();
  const genero = document.getElementById("genero-pelicula").value.trim();

  if (!titulo || !genero) {
    alert("Rellena todos los campos.");
    return;
  }

  const nuevaPelicula = {
    id: Date.now(),
    titulo: titulo,
    genero: genero
  };

  listaPeliculas.push(nuevaPelicula);
  mostrarPeliculas();
}

function mostrarPeliculas() {
  const contenedor = document.getElementById("lista-peliculas");
  contenedor.innerHTML = "";

  listaPeliculas.forEach(pelicula => {
    let div = document.createElement("div");
    div.classList.add("pelicula-item");
    div.innerHTML = `
      <p><strong>${pelicula.titulo}</strong> (${pelicula.genero})</p>
    `;
    contenedor.appendChild(div);
  });
}
