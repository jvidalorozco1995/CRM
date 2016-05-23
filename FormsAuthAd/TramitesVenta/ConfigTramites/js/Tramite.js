var Tra = new BLLTramites();
var Acti = new BLLActividades();

var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var WsLisActividadesxTramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/ListActividadesTramites");//Consulto Proyectos CRM
    var WsLisActividades = funcionUrlGlobal("/Servicios/WActividades.asmx/ListActividades");//Consulto Proyectos CRM
    var WsInsertActividad = funcionUrlGlobal("/Servicios/WActividades.asmx/InsertActividades");//Consulto Proyectos CRM
    var WsInsertActividadXtramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/InsertActividadesTramites");//Consulto Proyectos CRM
    var WsDeleteActividadXtramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/DeleteActividadesTramites");//Consulto Proyectos CRM
    
    var cliente = null;
    var bandera = 0;
    var codigoEmp;
    var tramite;
    var ActividadN;
    var _addHandlers = function () {
       
        //Boton que muestra la lista de actividades
        $('#BtnAgregar').click(function () {

            $('#ModalListActividades').modal('show');

        });

        $(document).on('click', '.Infocl', function (event) {
            tramite = $(this).attr("id");
            setTimeout(function () {
                Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
                $('#Actividadesxtramite').show();
            }, 1000)
    
        });


        $(document).on('click', '.AgregarActi', function (event) {
             ActividadN = $(this).attr("id");
             $('#ModalPosicionActividades').modal('show');
        });


        $(document).on('click', '#BtnGuardarActividadXtramite', function (event) {
            
            
            if ($('#TxtPosicion').val() === "") {
                toastr.error('CRM Mayales - Notificacion' +
                '</br> El campo posicion se encuentra vacio');
            } else {
                Acti.InsertActividadxTramite(_ActividadXtramite(), WsInsertActividadXtramite);
                setTimeout(function () {
                    Acti.ListActividades(WsLisActividades);
                    $('#ModalPosicionActividades').modal('hide');
                }, 1000)
                $('#TxtPosicion').val('');
            }
        });
        


        $(document).on('click', '.RemoverActi', function (event) {
            var id = $(this).attr("id");
            Acti.DeleteActividadxTramite(id,WsDeleteActividadXtramite);
            setTimeout(function () {
                Acti.ListActividades(WsLisActividades);
             
            }, 1000)

        });


        //Boton para mostrar el modal crear actividad
        $('#BtnModalCrearActividad').click(function () {
            
            document.getElementById('titulo').innerHTML = "";
            $('#titulo').append("Crear actividad");
            $('#BtnCActividad').show();
            $('#BtnEditarActividad').hide();
            $('#ModalCrearActividades').modal('show');

        });

        $(document).on('click', '.EditarActi', function (event) {
            var id = $(this).attr("id");
            document.getElementById('titulo').innerHTML = "";
            $('#titulo').append("Editar actividad");
            $('#ModalCrearActividades').modal('show');
            $('#BtnCActividad').hide();
            $('#BtnEditarActividad').show();
            
        });

        
        //Boton para crear actividad
        $('#BtnCActividad').click(function () {

            //Validacion de las cajas de texto
            if ($('#TxtDescripcion').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> no ha digitado nada en el campo descripcion');
            }
              else if ($('#TxtNombre').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
               '<br/> no ha digitado nada en el campo nombre');
            }
            else
            {

                //Crear actividad
                Acti.CrearActividad( _Actividad(), WsInsertActividad);

                //Cargar la lista de actividades
                setTimeout(function () {
                    Acti.ListActividades(WsLisActividades);
                    $('#ModalCrearActividades').modal('hide');
                }, 1000)


               $('#TxtNombre').val('');
               $('#TxtDescripcion').val('');
               $('input:radio[name=sex]:checked').val('');
               $('#Text9').val('');
            }
           

        });
        
       
    }

    //Crea actividad DTO
    var _ActividadXtramite = function () {
        var ActividadxTramite = {};
        ActividadxTramite.Id_tramite = tramite;
        ActividadxTramite.Id_Actividad = ActividadN;
        ActividadxTramite.Posicion = $('#TxtPosicion').val();
        
        return ActividadxTramite;
    }

    //Crea actividad DTO
    var _Actividad = function () {
        var actividad = {};
        actividad.Nombre = $('#TxtNombre').val();
        actividad.Descripcion = $('#TxtDescripcion').val();
        actividad.Simultaneo = $('input:radio[name=sex]:checked').val();
        actividad.Actividad_Dependiente = $('#Text9').val();
        return actividad;
    }
    var _Inicio = function () {
        //Lista de actividades y de tramites
        $('#Actividadesxtramite').hide();
        Acti.ListActividades(WsLisActividades);
        Tra.ListTramites(WsListramite);
      
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