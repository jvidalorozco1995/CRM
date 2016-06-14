var Wproyect = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyecTrabajador");
_negocio = new BLLnegocio();
proyect = new BLLProyectos();

var _admCartera = (function () {

    var _addHandlers = function () { }


    var _Inicio = function () { proyect.ProyectosTramites(Wproyect); }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {

    _admCartera.init();
});