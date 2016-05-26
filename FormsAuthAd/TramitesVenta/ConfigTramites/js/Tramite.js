var Tra = new BLLTramites();
var Acti = new BLLActividades();
var docu = new BLLDocumentosTramite();
var admTramites = (function () {

    var WsListramite = funcionUrlGlobal("/Servicios/WTramites.asmx/ListTramites");//Consulto Proyectos CRM
    var WsLisActividadesxTramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/ListActividadesTramites");//Consulto Proyectos CRM
    var WsLisActividades = funcionUrlGlobal("/Servicios/WActividades.asmx/ListActividades");//Consulto Proyectos CRM
    var WsInsertActividad = funcionUrlGlobal("/Servicios/WActividades.asmx/InsertActividades");//Consulto Proyectos CRM
    var WsUpdateActividad = funcionUrlGlobal("/Servicios/WActividades.asmx/UpdateActividad");//Consulto Proyectos CRM
    
    var WsInsertActividadXtramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/InsertActividadesTramites");//Consulto Proyectos CRM
    var WsUpdateActividadXtramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/UpdatePosicionTramite");//Consulto Proyectos CRM
    var WsDeleteActividadXtramite = funcionUrlGlobal("/Servicios/WActividadesTramites.asmx/DeleteActividadesTramites");//Consulto Proyectos CRM
    var WsLisDocumentos = funcionUrlGlobal("/Servicios/WDocumentos.asmx/ListDocumentosActividad");//Consulto Proyectos CRM
    var WsLisActividadesID = funcionUrlGlobal("/Servicios/WActividades.asmx/ListActividadesID");//Consulto Proyectos CRM

    var WsInsertDocumentos = funcionUrlGlobal("/Servicios/WDocumentos.asmx/InsertDocumentos");//Consulto Proyectos CRM
    
   


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
        //Boton que muestra la lista de actividades
        $('#BtnAddDocumento').click(function () {

            $('#ModalDocumentosActividades').modal('show');

        });

        $(document).on('click', '.Infocl', function (event) {
            tramite = $(this).attr("id");
            setTimeout(function () {
                Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
                $('#Actividadesxtramite').show();
            }, 1000)
    
        });

        $(document).on('click', '.Posicion', function (event) {
            ActividadN = $(this).attr("id");
            $('#ModalPosicionActividades').modal('show');
            setTimeout(function () {
                Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
                $('#Actividadesxtramite').show();
            }, 1000)
        });


        $(document).on('click', '.AgregarActi', function (event) {
             ActividadN = $(this).attr("id");
            

             Acti.InsertActividadxTramite(_ActividadXtramite(), WsInsertActividadXtramite);

             setTimeout(function () {
                 Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
                 $('#Actividadesxtramite').show();
             }, 1000)
        });


        $(document).on('click', '#BtnActualizarActividadXtramite', function (event) {
            
        
            if ($('#TxtPosicion').val() === "") {
                toastr.error('CRM Mayales - Notificacion' +
                '</br> El campo posicion se encuentra vacio');
            } else {
                var ActividadxTramite = {};

                ActividadxTramite.Id = ActividadN;
                ActividadxTramite.Id_tramite = tramite;
                ActividadxTramite.Id_Actividad = ActividadN;
                ActividadxTramite.Posicion = $('#TxtPosicion').val();


                Acti.UpdateActividadxTramite(ActividadxTramite, WsUpdateActividadXtramite);
                setTimeout(function () {
                    Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
                    $('#ModalPosicionActividades').modal('hide');
                }, 1000)
                $('#TxtPosicion').val('');
            }
        });
        


        $(document).on('click', '.RemoverActi', function (event) {
            ActividadN = $(this).attr("id");
            Acti.DeleteActividadxTramite(id, WsDeleteActividadXtramite);

          
            setTimeout(function () {
               Acti.ListActividadesxTramite(tramite, WsLisActividadesxTramite);
             
            }, 1000)

        });

        $(document).on('click', '.EditarActi', function (event) {
             ActividadN = $(this).attr("id");

            document.getElementById('titulo').innerHTML = "";
            $('#titulo').append("Editar actividad");
            $('#ModalCrearActividades').modal('show');
            $('#BtnCActividad').hide();
            $('#BtnEditarActividad').show();
            $('#PanelDocumentos').show();
          

            setTimeout(function () {
                Acti.ListActividadesID(ActividadN, WsLisActividadesID);
                docu.ListDocumentos(ActividadN, WsLisDocumentos);

            }, 1000);

        });
        
        
        
        //Boton para mostrar el modal crear actividad
        $('#BtnCrearDocumento').click(function () {

            var Documento = {};
            Documento.Id_Actividad = ActividadN;
            Documento.Nombre = $("#TxtDocumento").val();

            docu.InsertDocumento(Documento, WsInsertDocumentos);
          
            //Cargar la lista de actividades
            setTimeout(function () {
                docu.ListDocumentos(ActividadN, WsLisDocumentos);

            }, 1000);
            $("#ModalDocumentosActividades").hide();
        });


        //Boton para mostrar el modal crear actividad
        $('#BtnEditarActividad').click(function () {

            
            Acti.UpdateActividad(_ActividadUpdate(), WsUpdateActividad);
         
            //Cargar la lista de actividades
            setTimeout(function () {
                Acti.ListActividades(WsLisActividades);
                _Limpiar();
            }, 1000)
        });


        //Boton para mostrar el modal crear actividad
        $('#BtnModalCrearActividad').click(function () {
            
            document.getElementById('titulo').innerHTML = "";
            $('#titulo').append("Crear actividad");
            $('#BtnCActividad').show();
            $('#BtnEditarActividad').hide();
            $('#ModalCrearActividades').modal('show');
            $('#PanelDocumentos').hide();
            
            _Limpiar();
        });

   /*     $(document).on('click', '.EditarActi', function (event) {
            var id = $(this).attr("id");
            document.getElementById('titulo').innerHTML = "";
            $('#titulo').append("Editar actividad");
            $('#ModalCrearActividades').modal('show');
            $('#BtnCActividad').hide();
            $('#BtnEditarActividad').show();
            
        });*/

        
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
                    _Limpiar();
                }, 1000)


               
            }
           

        });
        //Boton para crear actividad
        $('#BtnCancelar').click(function () {


        });
        
       
    }
 
    var _Limpiar = function () {

        $('#TxtNombre').val('');
        $('#TxtDescripcion').val('');
        document.getElementById("Choose_Yes").checked = false;
        document.getElementById("Choose_No").checked = false;
        $('#Text9').val('');
    }


    //Crea actividad DTO
    var _ActividadXtramite = function () {
        var ActividadxTramite = {};
        ActividadxTramite.Id_tramite = tramite;
        ActividadxTramite.Id_Actividad = ActividadN;
       
        
        return ActividadxTramite;
    }

    //Crea actividad DTO
    var _ActividadUpdate = function () {
        var actividad = {};
        actividad.id = ActividadN;
        actividad.Nombre = $('#TxtNombre').val();
        actividad.Descripcion = $('#TxtDescripcion').val();
        actividad.Simultaneo = $('input:radio[name=sex]:checked').val();
        actividad.Actividad_Dependiente = $('#Text9').val();
        return actividad;
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