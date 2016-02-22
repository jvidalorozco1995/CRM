var sala = new BLLSala_Ventas();

var admSalas = (function () {
    var WsLisala = funcionUrlGlobal("/Servicios/WSala_Ventas.asmx/ListSala");//Listado de salas de ventas
    var _addHandlers = function () {

        $('#BtnGuardar').click(function () {
            var salave = $('#Txtsala').val();
     
            if (salave.length < 1)
            {
                toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>El campo nombre de sale se encuentra vacio');
            }
            else
            {
                sala.AddSala(_Dtosala(salave.toUpperCase()));
                setTimeout(function () { sala.ListaSala(2, WsLisala); }, 2000)
            }
        });
    };


    var _Inicio = function () {
        sala.ListaSala(2, WsLisala);
    }

    var _Dtosala = function (salav) {
        var sala = {};
        sala.NOMBRE_SALA = salav;
        return sala;

    };

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    admSalas.init();

})