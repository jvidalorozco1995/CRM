
var neg = new BLLnegocio();
var tar = new BLLTareas();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
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
        $("#BtnActualizar").click(function () {
            
        });
    


        $(document).on('click', '.historial', function () {
            cedula = $(this).attr("id");
            alert(cedula);
            Tr.InfoTareasNego(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
          /*  Tr.InfoTareas(t);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            Tr.lisbitacoras(t);*/
         
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarNego', function () {
            cedula = $(this).attr("id");
            //  alert(cedula);
         
            $('#PanelNego').show();
            $('#PanelTareas').show();
            tar.TareasNegocio(cedula);
            Ac.AcuerdosFox(cedula);
            neg.ListNegocioFOXID(WsListNegocioID, cedula);
            Pag.PagosFox(cedula);
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
    $(function () {
        $('a[href$=".pdf"]').prop('target', '_blank');
    });
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