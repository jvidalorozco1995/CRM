
var neg = new BLLnegocio();
var tar = new BLLTareas();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
var util = new BLLUtilidades;


var admUser = (function () {

    var WsListNegocio = "/Servicios/WNegocioFox.asmx/lisHoja";//Consulto Proyectos CRM
    var WsListNegocioID = "/Servicios/WNegocioFox.asmx/lisNegoID";//Consulto Proyectos CRM
    var WsActualizarAdjFox = "/Servicios/WNegocioFox.asmx/ActualizarAdj";//Consulto Proyectos CRM
    var Wsurltodosnegocios = "/ServiciosFox/WInmuebles.asmx/TODO";
    var _addHandlers = function () {
 

        $("#BtnImprimirCuenta").click(function () {

            window.open("ReporteCompromisos.html?negocio=" + negocio, 'Graph', 'height=700;width=400;resizable=false;');
        });
        $("#BtnImprimir").click(function () {

            window.open("Estacuenta.html?negocio=" + negocio, 'Graph', 'height=700;width=400;resizable=false;');
        });

       
        $("#BtnActualizar").click(function () {
            $('#Cargando').show();
            neg.ActualizarTodosLosNegocios(Wsurltodosnegocios);
            setTimeout(function () { neg.ListNegocioFOX(WsListNegocio, "Negocio"); }, 3000);
        
           
        });

        $('#BtnEditar').click(function () {
            $('#BtnEditar').hide();
            $('#BtnPost').show();
            $('#BtnTerminada').hide();
            $('#Txtdetalle').attr('readonly', false);
            $('#fechainfo').attr('readonly', false);
        })



        $('#BtnPost').click(function () {
            if ($('#Txtdetalle').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo descricpion de Tarea se encuentra vacio');
            }
            else {
                if ($('#fechainfo').val().length < 1) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo Fecha de Tarera se encuentra vacio');
                }
                else {
                    if ($('#TxtMotivo').val().length < 1) {
                        toastr.error('CRM Mayales - Notificacion' +
                        '</br> El campo descripcion se encuentra vacio');
                    }
                    else {
                        var fechaEs = $('#fechainfo').val()
                        if (fechaEs < fecha) {
                            dia = null;
                            mes = null;
                            toastr.error('CRM Mayales - Notificacion' +
                           '</br> La fecha selcccionada no puede ser menor a la del dia actual');
                        }
                        else {

                            dia = null;
                            mes = null;

                            tar.PosponerTarea(_PosTareas(), _BitacorasDTO());
                            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
                            setTimeout(function () { tar.lisbitacoras(cedula); }, 1000);
                            /*setTimeout(function () { Tr.lisbitacoras(t); }, 1000)
                             setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                             setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                             setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);*/
                        }

                    }
                }
            }
        });
  
        $(document).on('click', '#BtnTerminada', function (event) {
          
            tar.TerminarTareaNego(_PosTareas(), _BitacorasDTO());
            setTimeout(function () { tar.InfoTareasNego(cedula, 0); }, 1000);
            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
          
        });

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

        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarNego', function () {
            negocio = $(this).attr("id");
            $('#PanelNego').show();
            $('#PanelTareas').show();
            $('#Tareas').show();
            
            tar.TareasNegocio(negocio);
            Ac.AcuerdosFox(negocio);
            neg.ListNegocioFOXID(WsListNegocioID, negocio);
            Pag.PagosFox(negocio);
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.RemoverP', function () {
            cedula = $(this).attr("id");
            // alert("#" + cedula + "");
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
                    // dataType: "json",
                    success: function (result) {
                        neg.ListActualizarAdj(WsActualizarAdjFox, cedula, files[0].name);
                        alert(result);
                        $("#" + cedula + "").prop('disabled', true);
                        $(".RemoverP").prop('disabled', true);
                    },
                    error: function (err) {
                        alert(err.statusText);
                    }
                });
            } else {
                alert("Seleccione un archivo");
            }

        });
    };

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