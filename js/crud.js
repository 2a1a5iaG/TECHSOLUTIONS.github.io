let servicios = [];

fetch("data/servicios.json")
  .then(res => res.json())
  .then(data => {
    servicios = data;
    renderTabla();
  });

function renderTabla() {
  const tbody = document.querySelector("#tabla-servicios tbody");
  tbody.innerHTML = "";
  servicios.forEach((s, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${s.nombre}</td>
        <td>$${s.precio}</td>
        <td>${s.promocion ? "Activo" : "Inactivo"}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarServicio(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarServicio(${index})">Eliminar</button>
        </td>
      </tr>`;
  });
}

function crearServicio() {
  const nombre = prompt("Nombre del servicio:");
  const precio = prompt("Precio:");
  if (nombre && precio) {
    servicios.push({ nombre, precio, promocion: false });
    renderTabla();
  }
}

function editarServicio(index) {
  const nuevoNombre = prompt("Nuevo nombre:", servicios[index].nombre);
  const nuevoPrecio = prompt("Nuevo precio:", servicios[index].precio);
  if (nuevoNombre && nuevoPrecio) {
    servicios[index].nombre = nuevoNombre;
    servicios[index].precio = nuevoPrecio;
    renderTabla();
  }
}

function eliminarServicio(index) {
  if (confirm("¿Seguro que quieres eliminar este servicio?")) {
    servicios.splice(index, 1);
    renderTabla();
  }
}