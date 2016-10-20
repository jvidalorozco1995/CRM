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
            var idAval = $(this).attr("id");
            var tag = $(this).attr("tag");
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




