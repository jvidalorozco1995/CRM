
var neg = new BLLnegocio();
var tar = new BLLTareas();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
var util = new BLLUtilidades;


var admUser = (function () {



    var WsListNegocio = "/Servicios/WNegocioFox.asmx/lisHoja";//Consulto Proyectos CRM
    var WsListNegocioID = "/Servicios/WNegocioFox.asmx/lisNegoID";//Consulto Proyectos CRM
    var WsActualizarAdjFox = "/Servicios/WNegocioFox.asmx/ActualizarAdj";//Consulto Proyectos CRM

    var _addHandlers = function () {
       /*//Asignar Proyectos a trabajador MODAL
        $(document).on('click', '.Asignar', function () {
          
            $('#ModalAsignar').modal('show');
            var dtot = $(this).attr("id");
            var result = dtot.split('-');
            $('#TxtCodigo').val(result[0]);
            $('#TxtProyecto').val(result[1]);
        });
        */
        $("#BtnImprimir").click(function () {
            //printdiv("oculto");
            // setTimeout(function () { neg.ListNegocioFOXID(WsListNegocioID, negocio); }, 1000);
          //  alert($('#oculto').text());
            // javascript: window.print();
            PrintElem("#oculto");
        });

        function PrintElem(eleme) {
            Popup($(eleme).html());
        }

        function Popup(data) {
            var mywindow = window.open('', 'my div', 'height=400,width=600');
            mywindow.document.write('<html><head><title>my div</title>');
            /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('</head><body style="margin:3px;padding:3px">');
            mywindow.document.write('<div style="margin:3px;padding:3px;">');
            mywindow.document.write(data);
            mywindow.document.write('</div>');
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();

            return true;
        }

        /*printdiv = function (printdivname) {
            var headstr = "<html><head><title>Booking Details</title></head><body>";
            var footstr = "</body>";
            var newstr = document.getElementById(printdivname).innerHTML;
            var oldstr = document.body.innerHTML;
            document.body.innerHTML = headstr + newstr + footstr;
            window.print();
            document.body.innerHTML = oldstr;
            return false;
        }*/
        $("#BtnActualizar").click(function () {
            
        });
  
        $(document).on('click', '#BtnTerminada', function (event) {
          
            tar.TerminarTareaNego(_PosTareas(), _BitacorasDTO());
            setTimeout(function () { tar.InfoTareasNego(cedula, 0); }, 1000);
            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
          

            
           
        });

        $(document).on('click', '.historial', function () {
            cedula = $(this).attr("id");
            tar.InfoTareasNego(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
           // tar.InfoTareasNego(cedula);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
           // tar.lisbitacoras(t);
         
        });
        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarNego', function () {
            negocio = $(this).attr("id");
            $('#PanelNego').show();
            $('#PanelTareas').show();
            tar.TareasNegocio(negocio);
            Ac.AcuerdosFox(negocio);
            neg.ListNegocioFOXID(WsListNegocioID, negocio);
            Pag.PagosFox(negocio);
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.RemoverP', function () {
            cedula = $(this).attr("id");
            alert("#" + cedula + "");
            var c = $("#" + cedula + "").get(0);
            
            var files = c.files;
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