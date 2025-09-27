// Cargar listado de servicios en servicios.html
if (document.getElementById("grid-servicios")) {
  fetch("data/servicios.json")
    .then(res => res.json())
    .then(servicios => {
      const grid = document.getElementById("grid-servicios");
      servicios.forEach(servicio => {
        grid.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src="img/${servicio.imagen}" class="card-img-top" alt="${servicio.nombre}">
              <div class="card-body">
                <h5 class="card-title">${servicio.nombre}</h5>
                <p class="card-text">$${servicio.precio}</p>
                <a href="detalle.html?id=${servicio.id}" class="btn btn-primary">Ver Detalle</a>
              </div>
            </div>
          </div>`;
      });
    });
}

// Mostrar detalle de servicio en detalle.html
if (window.location.pathname.includes("detalle.html")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("data/servicios.json")
    .then(res => res.json())
    .then(servicios => {
      const servicio = servicios.find(s => s.id == id);
      if (servicio) {
        document.getElementById("detalle-servicio").innerHTML = `
          <div class="card">
            <img src="img/${servicio.imagen}" class="card-img-top" alt="${servicio.nombre}">
            <div class="card-body">
              <h3>${servicio.nombre}</h3>
              <p>${servicio.descripcion}</p>
              <p><strong>Precio:</strong> $${servicio.precio}</p>
              <p><strong>Cantidad disponible:</strong> ${servicio.cantidad}</p>
              <p><strong>Promoción:</strong> ${servicio.promocion ? "Sí" : "No"}</p>
              <a href="servicios.html" class="btn btn-secondary">Volver</a>
            </div>
          </div>`;
      }
    });
}

// Simulación de login
function loginAdmin(e) {
  e.preventDefault();
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "crud.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}