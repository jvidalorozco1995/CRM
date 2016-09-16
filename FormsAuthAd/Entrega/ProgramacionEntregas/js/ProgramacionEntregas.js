
var Entg = new BLLEntregas();


var admEntregas= (function () {

   
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {

       
    }
    var _Inicio = function () {

        Entg.ListProgramacionEntregas();
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
  
    admEntregas.init();
});




