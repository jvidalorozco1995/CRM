var Tra = new BLLTramites();


var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
       

       
       
    }
    var _Inicio = function () {
        Tra.ListTramites(WsListramite);
     
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