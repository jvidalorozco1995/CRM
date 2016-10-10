/// <reference path="../../Aval/WebAval.aspx" />


//DSDasas
var Revi = new BLLRevisionCalidad();


var admRevision = (function () {


    var _addHandlers = function () {
     
        
        $(document).on('click', '.VERAVAL', function () {
            var referencia = $(this).attr("id");

            window.location.replace("./../Aval/WebAval.aspx?referencia=" + referencia);
            
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




