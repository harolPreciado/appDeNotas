const tareasJS = require('./tareas.js')
const opcion = process.argv[2];

switch (opcion) {
  case "Listar":
    console.log("Listado de Tareas")
    let leerArchivo = tareasJS.leer();
    leerArchivo.forEach(function (item) { console.log(item) });
    break;

  case "Crear":
    let nuevaTarea = {
      titulo: process.argv[3],
      estado: "pendiente",
    };
    tareasJS.guardarTarea(nuevaTarea);

  case 'Filtrar':
    console.log("Tareas Filtradas")
    let filtrado = tareasJS.filtrarPorEstado(process.argv[3]);
    console.log(filtrado)
    break;

  case undefined:
    console.log("Atención - Tienes que pasar una acción.")
    break;

  default:
    console.log("No entiendo qué quieres hacer .")
    break;
}