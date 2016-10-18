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
    }

    

    var _Inicio = function () {
       
        Revi.Listado();




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




