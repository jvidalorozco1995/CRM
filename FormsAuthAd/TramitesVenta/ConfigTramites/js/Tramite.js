var Tra = new BLLTramites();
var Acti = new BLLActividades();

var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var WsLisActividades = funcionUrlGlobal("/Servicios/WActividades.asmx/ListActividades");//Consulto Proyectos CRM
    var WsInsertActividad = funcionUrlGlobal("/Servicios/WActividades.asmx/InsertActividades");//Consulto Proyectos CRM

    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
       
        $('#BtnAgregar').click(function () {

            $('#ModalListActividades').modal('show');

        });

        $('#BtnModalCrearActividad').click(function () {

            $('#ModalCrearActividades').modal('show');

        });
        
        $('#BtnCActividad').click(function () {

            if ($('#TxtDescripcion').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> no ha digitado nada en el campo descripcion');
            } else if ($('#TxtNombre').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
               '<br/> no ha digitado nada en el campo nombre');
            }else{

                Acti.CrearActividad( _Actividad(), WsInsertActividad);

                setTimeout(function () {
                    Acti.ListActividades(WsLisActividades);
                    $('#ModalCrearActividades').modal('hide');
                }, 1000)
            }
           

        });
        
       
    }

    var _Actividad = function () {
        var actividad = {};
        actividad.Nombre = $('#TxtNombre').val();
        actividad.Descripcion = $('#TxtDescripcion').val();
        actividad.Simultaneo = 1;
        actividad.Actividad_Dependiente = 5;
        return actividad;
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