var utl = new BLLUtilidades();
var Tra = new BLLTramites();
var Tradocu = new BLLDocumentosTramites();

var admTramites = (function () {
    var proyecnombre = utl.getUrlnom('proyec');
    var proyec = utl.getUrlpro('proyec');
   

    var WsListramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/GetInmuebles");//Consulto Proyectos CRM
    var WsGenTramite = funcionUrlGlobal("/Servicios/WVistaInmuebleTramites.asmx/Actualizar");//Consulto Proyectos CRM

    var WsActividadesTramiteInmueble = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/ListActiInmuebles");//Consulto Proyectos CRM


    var WsActividadesActividadesnmuebleID = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/ListActiInmueblesId");//Consulto Proyectos CRM
    var WsActividadesCompletarTramite = funcionUrlGlobal("/Servicios/WActividadesInmueble.asmx/UpdateActiInmuebles");//Consulto Proyectos CRM

    var WsDocumentosTramites = funcionUrlGlobal("/Servicios/WDocumentoActiInmu.asmx/ListDocumentoTramite");//Consulto Proyectos CRM
    
    var WsEliminarDocu = funcionUrlGlobal("/Servicios/WDocumentoActiInmu.asmx/DeleteDocumento_ActInmueble");//Consulto Proyectos CRM
        
    var WsInsertDocumento = funcionUrlGlobal("/Servicios/WDocumentoActiInmu.asmx/InsertDocumento_ActInmueble");//Consulto Proyectos CRM


    var cliente = null;
    var bandera = 0;
    var codigoEmp;
    var tramite;
    var ActividadN;
    var doc;

    var Id;
    var tramit;

    var _addHandlers = function () {


        //Boton que muestra la lista de actividades
        $('#BtnGenTramite').click(function () {

            Tra.GenerarTramites(proyec, WsGenTramite);
            setTimeout(function () { Tra.ListTramites(proyec, WsListramite); }, 1000);
        });
  
        $(document).on('click', '.Infocl', function () {
            tramit = $(this).attr("id");
            var tag = $(this).attr("tag");

            $('#Nombretramite').text(tag);
            
            $('#Actividadesxtramite').show();
            setTimeout(function () { Tra.ListActividadesInmuebles(tramit, WsActividadesTramiteInmueble); }, 1000);

        });


        $(document).on('click', '.Completar', function () {
            Id = $(this).attr("id");
            $('#infoActividadInmueble').modal('show');
            Tra.ActividadInmueblesID(Id, WsActividadesActividadesnmuebleID);
            setTimeout(function () { Tradocu.ListDocumentos(Id, WsDocumentosTramites); }, 1000);
            

        });

        $(document).on('click', '.SubirDocu', function () {
           var iddocu = $(this).attr("id");
            
        
           var c = $("#" + iddocu + "").get(0);


            
            var files = c.files;
           
            if (files[0] != undefined) {

                var test = new FormData();
                for (var i = 0; i < files.length; i++) {
                    test.append(files[i].name, files[i]);
                }
                $.ajax({
                    url: "../../handler/SubirArchivoHandler.ashx",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    data: test,
                    success: function (result) {
                        Tradocu.InsertarDocumento(iddocu, files[0].name, WsInsertDocumento);
                  
                        setTimeout(function () { Tradocu.ListDocumentos(Id, WsDocumentosTramites); }, 1000);
                    },
                    error: function (err) {
                        alert(err.statusText);
                    }
                });
            } else {
                toastr.error('CRM - Mayales - ' +
                        '</br>Seleccione un archivo por favor');
            }


        });
        
        $(document).on('click', '.QuitarDocu', function () {
           
            var iddocu = $(this).attr("id");
            Tradocu.EliminarDocumento(iddocu, WsEliminarDocu);
            setTimeout(function () { Tradocu.ListDocumentos(Id, WsDocumentosTramites); }, 1000);


        });


        //Boton que muestra la lista de actividades
        $('#BtnTerminada').click(function () {

            Tra.CompletarTramites(2, Id, $('#TxtIdTramiteinmueble').val(), WsActividadesCompletarTramite);
            setTimeout(function () { Tra.ListActividadesInmuebles(tramit, WsActividadesTramiteInmueble); }, 1000);
        });
        
        
        
    }

   
    var _Inicio = function () {
        //Lista de actividades y de tramites
      
      
        Tra.ListTramites(proyec, WsListramite);
        $("#NombreProyecto").text(proyecnombre);
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