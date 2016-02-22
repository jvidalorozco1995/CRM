var bq = new BLLBloques();
var inm = new BLLInmuebles();

var admInmuebles = (function () {
    var bloque = null;

    var WsListProyecfox = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos Cargados  CRM

    var WsLisBloquesCRM = funcionUrlGlobal("/ServiciosFox/WBloques.asmx/GetBloques");//Devuelve Listado de Bloques CRM

    var WsInmuebles = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/ListImnueblesBlo");//Listado de Inmuebles CRM

    var WsInmueblesFox = funcionUrlGlobal("/ServiciosFox/WFox.asmx/InmueblesFox");//LIstado de Inmuebles Multifox por Proyectos

    var WsAddInmuebles = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/InsertInmuCrm");//Inserto inmuebles a Multifox

    var _addHandlers = function () {

        $(document).on('change', '#CombProyectos', function () {
            var proyectos = $('#CombProyectos').val();
            bq.ListBloquesCRM(proyectos, WsLisBloquesCRM, 2);
           
        });

        $(document).on('change', '#CombBloques', function () {
            bloque = $('#CombBloques').val();
            inm.InmuenlesFox(bloque, WsInmueblesFox);
            setTimeout(function () { inm.InmueblesCRM(bloque, WsInmuebles); }, 1000);

        });

        $(document).on('click', '#BtnActualizar', function () {
            inm.UdateInmuebles(bloque);
            setTimeout(function () { inm.InmueblesCRM(bloque, WsInmuebles); }, 1500);
        });

        $(document).on('click', '#BtnInmueble', function () {
            $('#Cargando').show();
            inm.InsertInmuebles(bloque, WsAddInmuebles);
            setTimeout(function () { inm.InmueblesCRM(bloque, WsInmuebles); }, 1000);


        })

    };

    var _Inicio = function () {
        //$('#inmuebles').hide();
        $('#Cargando').hide();
        $('#BtnInmueble').hide();
        $('#BtnActualizar').hide();
        bq.ListProyectosCRM(WsListProyecfox);
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());
$(document).ready(function () {
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "onclick": true,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
    };
    admInmuebles.init();
});