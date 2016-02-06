
var neg = new BLLnegocio();
var tar = new BLLTareas();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
var util = new BLLUtilidades;


var admUser = (function () {

    var WsListNegocio = "/Servicios/WNegocioFox.asmx/lisHoja";//Consulto los negocios CRM
    var WsListNegocioID = "/Servicios/WNegocioFox.asmx/lisNegoID";//Consulto los negocios por id CRM
    var WsActualizarAdjFox = "/Servicios/WNegocioFox.asmx/ActualizarAdj";//Actualizar el adjunto CRM
    var Wsurltodosnegocios = "/ServiciosFox/WInmuebles.asmx/TODO"; //Actualizar todos los negocios de CRM desde MULTIFOX
    var negocio;
    //Manejadores de los botones y eventos
    var _addHandlers = function () {

 
        //Boton para imprimir los compromisos de pagoss
        $("#BtnImprimirCuenta").click(function () {

            window.open("ReporteCompromisos.html?negocio=" + negocio, 'Graph', 'height=500;width=400;resizable=false;');
        });
        //-----------------FIN--------------------//



        //Boton para imprimir un estado de cuenta
        $("#BtnImprimir").click(function () {

            window.open("Estacuenta.html?negocio=" + negocio, 'Graph', 'height=500;width=400;resizable=false;');
        });
        //-----------------FIN--------------------//


        //Boton de actualizar todos los Negocios de CRM con MULTIFOX
        $("#BtnActualizar").click(function () {


         

            $('#PanelNego').hide();
            $('#PanelTareas').hide();
            $('#Tareas').hide();
            $('#Cargando').show();
            neg.ActualizarTodosLosNegocios(Wsurltodosnegocios);
           
            setTimeout(function () { neg.ListNegocioFOX(WsListNegocio, "Negocio"); }, 2000);
            setTimeout(function () {
               if (negocio != undefined) {
               
                  //  $('#PanelNego').show();
                   // $('#PanelTareas').show();
                    //$('#Tareas').show();

                    tar.TareasNegocio(negocio);
                    Ac.AcuerdosFox(negocio);
                    neg.ListNegocioFOXID(WsListNegocioID, negocio);
                    Pag.PagosFox(negocio);
                }
            }, 2000);
        });
        //--------------------FIN------------------------///


        //Boton para editar la tarea 
        $('#BtnEditar').click(function () {
            $('#BtnEditar').hide();
            $('#BtnPost').show();
            $('#BtnTerminada').hide();
            $('#Txtdetalle').attr('readonly', false);
            $('#fechainfo').attr('readonly', false);
        })
        //------------------FIN-------------------------//


        //Boton para guardar la tarea
        $('#BtnPost').click(function () {
            if ($('#Txtdetalle').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo descricpion de Tarea se encuentra vacio');
            }
            else {
                if ($('#fechainfo').val().length < 1) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo Fecha de Tarea se encuentra vacio');
                }
                else {
                    if ($('#TxtMotivo').val().length < 1) {
                        toastr.error('CRM Mayales - Notificación' +
                        '</br> El campo descripción se encuentra vacio');
                    }
                    else {
                        var fechaEs = $('#fechainfo').val()
                        if (fechaEs < fecha) {
                            dia = null;
                            mes = null;
                            toastr.error('CRM Mayales - Notificacion' +
                           '</br> La fecha seleccionada no puede ser menor a la del dia actual');
                        }
                        else {

                            dia = null;
                            mes = null;

                            tar.PosponerTarea(_PosTareas(), _BitacorasDTO());
                            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
                            setTimeout(function () { tar.lisbitacoras(cedula); }, 1000);
                           
                        }

                    }
                }
            }
        });
        //--------------------------FIN-----------------------------------//


        //Boton para terminar la tarea
        $(document).on('click', '#BtnTerminada', function (event) {
          
            tar.TerminarTareaNego(_PosTareas(), _BitacorasDTO());
            setTimeout(function () { tar.InfoTareasNego(cedula, 0); }, 1000);
            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
          
        });
        //---------------------------FIN----------------------------------//

        //Boton para traerse el historial de la tarea
        $(document).on('click', '.historial1', function () {
            cedula = $(this).attr("id");
            tar.InfoTareasNego(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            tar.lisbitacoras(cedula);
         
        });
        //---------------------------FIN----------------------------------//


        //Cargar las tareas, acuerdos y pagos de los negocios
        $(document).on('click', '.CargarNego', function () {
            negocio = $(this).attr("id");

       
            $(".div").css({ "display": "inline" });

            $('#PanelNego').show();
            $('#PanelTareas').show();
            $('#Tareas').show();
            
            tar.TareasNegocio(negocio);
            Ac.AcuerdosFox(negocio);
            neg.ListNegocioFOXID(WsListNegocioID, negocio);
            Pag.PagosFox(negocio);
        });
        //---------------------------FIN----------------------------------//


        //Subir el archivo a la carpeta de imagenes que se llama UPLOAD
        $(document).on('click', '.RemoverP', function () {
            cedula = $(this).attr("id");
            var c = $("#" + cedula + "").get(0);
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
                        neg.ListActualizarAdj(WsActualizarAdjFox, cedula, files[0].name);
                        $("#" + cedula + "").prop('disabled', true);
                        $(".RemoverP").prop('disabled', true);
                    },
                    error: function (err) {
                      
                        toastr.error(' CRM - Mayales' +
                       '<br/>' + err.statusText);
                    }
                });
            } else {

                toastr.error(' CRM - Mayales' +
                      '<br/>Seleccione un archivo por favor.');
           }

        });
        //---------------------------FIN----------------------------------//

    };
    //****************ENTIDADES**********************//
    var _PosTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = cedula;
        postarea.CONCEPTO = $('#Txtdetalle').val();
      //  postarea.CLIENTE = cedula;
        postarea.ESTADO = "T";
        return postarea;
    }

    var _DtoTareas = function () {
        var tarea = {};
        tarea.cliente = cedula;
        tarea.trabajador = '';
        tarea.concepto = $('#TxtDescripcion').val();
        tarea.fechainicio = $('#TxtFecha').val();
        tarea.estado = 'E';
        return tarea;
    }

    var _BitacorasDTO = function () {

        var bitacora = {};
        bitacora.tarea = cedula;
        bitacora.motivo = $('#TxtMotivo').val();
        bitacora.FECHAMOD = $('#fechainfo').val();
        return bitacora;
    }

    var _Inicio = function () {
        $('#Cargando').hide();
        neg.ListNegocioFOX(WsListNegocio, "Negocio");
    }

    //****************FIN ENTIDADES**********************//

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }

}());
$(document).ready(function () {
    admUser.init();
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": false,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "4000",
    };
})