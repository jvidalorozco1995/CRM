

//DSDasas
var Revi = new BLLRevisionCalidad();


var admRevision = (function () {


    var _addHandlers = function () {
     


      



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




