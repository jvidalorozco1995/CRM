var Tra = new BLLTramites();
var Acti = new BLLActividades();

var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var WsLisActividades = funcionUrlGlobal("/Servicios/WActividades.asmx/ListActividades");//Consulto Proyectos CRM
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
       
        $('#BtnAgregar').click(function () {

            $('#ModalActividades').modal('show');

        });
       
       
    }
    var _Inicio = function () {
        Tra.ListTramites(WsListramite);
        Acti.ListActividades(WsLisActividades);
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
   
    admTramites.init();
});