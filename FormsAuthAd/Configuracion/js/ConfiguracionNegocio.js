var Conf = new BLLConfiguracion_Negocio();

var admConfig = (function () {
   // var WsLiConf = "/Servicios/WConfiguracionNegocios.asmx/InsertConfiguracion";//Listado de salas de ventas
    var _addHandlers = function () {

        $('#BtnGuardar').click(function () {
            var salave = $('#TxtDesConfiguracionNegocio').val();

            if (salave.length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>El campo se encuentra vacio');
            }
            else {
                Conf.AddConfiguracion_Negocio(_Dtosala(salave.toUpperCase()));
               // setTimeout(function () { Conf.ListaSala(2, WsLisala); }, 2000)
            }
        });
    };


    /*var _Inicio = function () {
        sala.ListaSala(2, WsLisala);
    }
    */
    var _Dtosala = function (salav) {
        var Conf = {};
        Conf.ID = 0;
        Conf.Nombre = salav;
        return Conf;

    };

    return {
        init: function () {
           // _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    admConfig.init();

})