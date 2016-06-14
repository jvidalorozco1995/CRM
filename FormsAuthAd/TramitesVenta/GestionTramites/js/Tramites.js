var utl = new BLLUtilidades();
var Tra = new BLLTramites();


var admTramites = (function () {

    var proyec = utl.getUrl('proyec');


    var WsListramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/GetInmuebles");//Consulto Proyectos CRM




    var cliente = null;
    var bandera = 0;
    var codigoEmp;
    var tramite;
    var ActividadN;
    var doc;
    var _addHandlers = function () {

   


    }

   
    var _Inicio = function () {
        //Lista de actividades y de tramites
      
      
        Tra.ListTramites(proyec, WsListramite);

    }
    //Retorna la funcion inicial
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
    //Inicial del tramite
    admTramites.init();
});