var Conf = new BLLConfiguracion_Negocio();
var utl = new BLLUtilidades();

var admConfig = (function () {

    var proyec = utl.getUrl('proyec');
    var WsLiConf = "/Servicios/WConfiguracionNegocios.asmx/getAll";//Listado de salas de ventas
    var _addHandlers = function () {

        $('#BtnGuardar').click(function () {
            var salave = $('#TxtDesConfiguracionNegocio').val();

            if (salave.length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>El campo se encuentra vacio');
            }
            else {
                Conf.AddConfiguracion_Negocio(_Dtosala(salave.toUpperCase()));
                setTimeout(function () { Conf.ListNotasAclaratorias(proyec, WsLiConf); }, 2000)
            }
        });
    };


   var _Inicio = function () {
       Conf.ListNotasAclaratorias(proyec, WsLiConf);
    }
    
    var _Dtosala = function (salav) {
        var Conf = {};
        Conf.ID = 0;
        Conf.Nombre = salav;
        Conf.Proyecto = proyec;
        
        return Conf;

    };

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    admConfig.init();

})