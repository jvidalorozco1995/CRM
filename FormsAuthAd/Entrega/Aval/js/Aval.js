
var utl = new BLLUtilidades();
var Aval = new BLLAval();
var admAval = (function () {

    var referencia = utl.getUrl('referencia');

    var _addHandlers = function () {


      
    }

    var _Inicio = function () {

       
        Aval.Aval(referencia);



    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admAval.init();
});


