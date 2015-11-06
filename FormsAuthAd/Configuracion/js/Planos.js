var utl= new BLLUtilidades();

var admPlanos = (function () {
    var proyec = utl.getUrl('id');

    var _addHandlers = function () {

    };

    var _Inicio = function () {
        $('#TxtProyecto').val(proyec);
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    admPlanos.init();
    
})