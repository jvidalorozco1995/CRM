
var neg = new BLLnegocio();
var tar = new BLLTareas();
var Ac = new BLLAcuerdosFox();
var Pag = new BLLPagosFox();
var admUser = (function () {



    var WsListNegocio = "/Servicios/WNegocioFox.asmx/lisHoja";//Consulto Proyectos CRM
    var WsListNegocioID = "/Servicios/WNegocioFox.asmx/lisNegoID";//Consulto Proyectos CRM

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
            alert("presionaste wel boton actualizar");
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarNego', function () {
            cedula = $(this).attr("id");
            alert(cedula);
            //$('#ModalAsignar').modal('hide');
            tar.TareasNegocio(cedula);
            Ac.AcuerdosFox(cedula);
            neg.ListNegocioFOXID(WsListNegocioID, cedula);
           Pag.PagosFox(cedula);
        })
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