


//Maestro
var Proy = new BLLProyectos();
var Ent = new BLLEntregas();
var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

var admMaestro= (function () {


    var _addHandlers = function () {
        //me
        $(document).on('click', '.VER', function () {
            var referencia = $(this).attr("id");
            var idAval = $(this).attr("tag");

            window.location.href = "./../Aval/WebAval.aspx?referencia=" + referencia + "&accion=3&idaval=" + idAval;

        });

        $(document).on('change', '#ComProyect', function () {

            var proyecto = $("#ComProyect").val();

            Ent.ListMaestro($("#ComProyect").val());

        });

        $(document).on('click', '.VERFECHAS', function () {
            var datos = $(this).attr("id");
            var tag = $(this).attr("tag");
            var result = datos.split("/")
            idAval = result[0];
            proyecto = result[1];
            manzana = result[2];
            inmueble = result[3];
            solicitud = result[4];
            confirmacion = result[5];
            enviadoa = result[6];
            enviadopor = result[7];

            $("#TxtProyecto").val(proyecto);
            $("#TxtManzana").val(manzana);
            $("#TxtInmueble").val(inmueble);
            $("#TxtFSolicitud").val(solicitud);
            $("#TxtFConfirmacion").val(confirmacion);
            $("#TxtEnviadoA").val(enviadoa);
            $("#TxtEnviadoPor").val(enviadopor);
    
            $("#Nregistro").empty();
            $("#Nregistro").append(tag);
            $("#datos").show();

            //Revi.ListadoFechasInspeccion(idAval);

        });
    }

    var _Inicio = function () {
      
        $("#datos").hide();
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




