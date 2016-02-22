var inm = new BLLInmuebles();
var pry = new BLLProyectos();
var tra = new BLLTrabajadores();
var cl = new BLLClientes();
var adminfo = (function () {
    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

    var proyec = "";
    var asesor = "";
    var bandera = 0;

    var _addHandlers = function () {

        $(document).on('click', '.Infocl', function () {
            $('#infoCLiente').modal('show');
            cl.getClientes($(this).attr("id"));
        });
        $(document).on('click', '.desistir', function () {
            $('#detalleseparacion').modal('show');
            var datos = $(this).attr("id");
            var result = datos.split("/");
            var cedula = result[0];
            inm._Separaciondetalles(cedula);
        });

        $(document).on('change', '#CombAsesores', function () {
            var asesor = $('#CombAsesores').val();
            inm._Asesorseparacion(asesor);
            bandera = 0;
            $('#Txtinico').val("");
            $('#Txtfin').val("");
        });

        $(document).on('change', '#ComProyect', function () {
            var proyect = $('#ComProyect').val();
            inm._Proyectoseparacion(proyect);
            bandera = 0;
            $('#Txtinico').val("");
            $('#Txtfin').val("");

        });

        $(document).on('click', '#BtnFiltar', function () {
            var asesor = $('#ComProyect').val().length;
            var proyectR = $('#CombAsesores').val().length;
            var fechaini = $('#Txtinico').val().length;
            var fechafin = $('#Txtfin').val().length;
            switch (bandera) {
                case 0:
                    if (asesor < 1 || proyectR < 1) {
                        toastr.error('CRM Mayales' +
                        '</br> verifique que haya seleccionado proyecto y asesor para realizar la consulta');
                    }
                    else {
                        inm._SeparacionAP($('#ComProyect').val(),$('#CombAsesores').val()) ;
                    }
                    break
                case 1:
                    if (fechaini < 1 || fechafin < 1) {
                        toastr.error('CRM Mayales' +
                        '</br> verifique que haya seleccionado una fecha de incio y una fin para realiar la consulta');
                    }
                    else {
                        inm._SeparacionFechas($('#Txtinico').val(), $('#Txtfin').val());
                    }
                    break

            }

        });

        $(".excel").on('click', function (event) {
            inm.exportJsonToCSV();
        });

        $(document).on('click', '#Txtinico', function () { bandera = 1 });

        $(document).on('click', '#Txtfin', function () { bandera = 1 });
    }

    var _Inicio = function () {
        inm._Sepracioninmuebles();
        pry.ListProyec(2, WsListProyec);
        tra.getrabajadores();
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {
    $('#Txtinico').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#Txtfin').datepicker({
        format: 'yyyy/mm/dd',
    });
    adminfo.init();
});