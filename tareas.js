const fs = require('fs');
const importTareas = require("./tareas.json")

let funcionesTareas = {
    listaTareas: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.listaTareas, 'utf-8'));
    },
    escribirJSON: function (tareas) {
        let datos = JSON.stringify(tareas);
        fs.writeFileSync(this.listaTareas, datos)
    },
    guardarTarea: function (tareasNuevas) {
        const listaDeTareas = this.leer();
        listaDeTareas.push(tareasNuevas);
        this.escribirJSON(listaDeTareas);
    },
    filtrarPorEstado: function (estadoEntrada) {
        let estadoSeleccionado = importTareas.filter(function (tarea) {
            return tarea.estado == estadoEntrada;
        })
        return estadoSeleccionado
    }
}
module.exports = funcionesTareas;