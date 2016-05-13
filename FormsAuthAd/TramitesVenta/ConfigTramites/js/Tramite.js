var Tra = new BLLTramites();


var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
       
        $('#BtnAgregar').click(function () {

            $('#ModalAsignar').modal('show');

        });
       
       
    }
    var _Inicio = function () {
        Tra.ListTramites(WsListramite);
        TblActividades
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