/// <reference path="../../Aval/WebAval.aspx" />


//DSDasas
var Revi = new BLLRevisionCalidad();


var admRevision = (function () {


    var _addHandlers = function () {
     
        
        $(document).on('click', '.VERAVAL', function () {
            var referencia = $(this).attr("id");
            var idAval = $(this).attr("tag");

            window.location.href = "./../Aval/WebAval.aspx?referencia=" + referencia +"&accion=2&idaval="+idAval;
            
        });

        $(document).on('click', '.AVAL', function () {
            var referencia = $(this).attr("id");

            window.location.href = "./../Aval/WebAval.aspx?referencia=" + referencia + "&accion=1";

        });


        $(document).on('click', '.VER', function () {
            var referencia = $(this).attr("id");
            var idAval = $(this).attr("tag");

            window.location.href = "./../Aval/WebAval.aspx?referencia=" + referencia + "&accion=3&idaval=" + idAval;

        });

        $(document).on('click', '.VERFECHAS', function () {
            var datos = $(this).attr("id");
            var tag = $(this).attr("tag");

            var datos = $(this).attr("id");
            var result = datos.split("/")
            idAval = result[0];
            proyecto = result[1];
            manzana = result[2];
            inmueble = result[3];
            solicitud = result[4];
            confirmacion = result[5];

            $("#TxtProyecto").val(proyecto);
            $("#TxtManzana").val(manzana);
            $("#TxtInmueble").val(inmueble);
            $("#TxtFSolicitud").val(solicitud);
            $("#TxtFConfirmacion").val(confirmacion);

            $("#Nregistro").append(tag);
            $("#datos").show();


            Revi.ListadoFechasInspeccion(idAval);

          
        });

        

        
    }

    

    var _Inicio = function () {
       
        Revi.Listado();
        $("#datos").hide();



    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admRevision.init();
});




