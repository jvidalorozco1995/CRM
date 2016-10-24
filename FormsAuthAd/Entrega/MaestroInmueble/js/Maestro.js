


//DSDasas
var Proy = new BLLProyectos();
var Ent = new BLLEntregas();
var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

var admMaestro= (function () {


    var _addHandlers = function () {

        $("#ComProyect").on

        $(document).on('change', '#ComProyect', function () {

            var proyecto = $("#ComProyect").val();

            Ent.ListMaestro($("#ComProyect").val());

        });
    }



    var _Inicio = function () {
      
       
        Proy.ListProyec(2, WsListProyec);
        Ent.ListMaestro($("#ComProyect").val());
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admMaestro.init();
});




