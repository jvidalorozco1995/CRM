
var cl = new BLLClientes();
var Tr = new BLLTareas();
var pry = new BLLProyectos();
var tra = new BLLTrabajadores();

var admclientes = (function () {

    var WsListProyec = "/ServiciosFox/WProyectos.asmx/LisProyectos";//Consulto Proyectos CRM
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
        $(document).on('click', '#Btnvencido', function (event) {
            Tr.EstadoTareasClientes("V")
        });
        $(document).on('click', '#Btnterminada', function (event) {
            Tr.EstadoTareasClientes("T")
        });
        $(document).on('click', '#Btnespera', function (event) {
            Tr.EstadoTareasClientes("E")
        });
        $(document).on('click', '#Btnpospuesta', function (event) {
            Tr.EstadoTareasClientes("P")
        });
        $(".excel").on('click', function (event) {
            cl.exportJsonToCSV();
        });
        $(document).on('click', '.Infocl', function () {
            $('#infoCLiente').modal('show');
            cl.getClientes($(this).attr("id"));
        });
        $(document).on('change', '#ComProyect', function () {
            var proyect = $('#ComProyect').val();
            pry.listadotareasP(proyect);
            bandera = 0;
            $('#Txtinico').val("");
            $('#Txtfin').val("");

        });
        $(document).on('click', '.historial', function () {
            cliente = $(this).attr("id");
            Tr.LisTareas(cliente, 1);
        });
        $(document).on('change', '#CombAsesores', function () {
            var asesor = $('#CombAsesores').val();
            tra.CLientesAsesorC(asesor);
            bandera = 0;
            $('#Txtinico').val("");
            $('#Txtfin').val("");

        });
        $(document).on('click', '#BtnFiltar', function () {
            var asesor=$('#ComProyect').val().length;
            var proyectR = $('#CombAsesores').val().length;
            var fechaini = $('#Txtinico').val().length;
            var fechafin = $('#Txtfin').val().length;
            switch (bandera)
            {
                case 0:
                    if (asesor < 1 || proyectR < 1) {
                        toastr.error('CRM Mayales' +
                        '</br> verifique que haya seleccionado proyecto y asesor para realizar la consulta');
                    }
                    else
                    {
                        tra.CLientesAsesorAP($('#CombAsesores').val(), $('#ComProyect').val());
                    }
                    break
                case 1:
                    if (fechaini < 1 || fechafin < 1)
                    {
                        toastr.error('CRM Mayales' +
                        '</br> verifique que haya seleccionado una fecha de incio y una fin para realiar la consulta');
                    }
                    else
                    {
                        cl.ClienteFechas($('#Txtinico').val(), $('#Txtfin').val());
                    }
                    break

            }
            
        });
        $(document).on('click', '.infotarea', function (event) {
            t = $(this).attr("id");
            $('#infoTareas').modal('show');
            $('#BtnEditar').hide();
            $('#BtnTerminada').hide();
            $('#BtnPost').hide();
            Tr.InfoTareas(t);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            Tr.lisbitacoras(t);
        });
        $(document).on('click', '#Txtinico', function () { bandera = 1 });
        $(document).on('click', '#Txtfin', function () { bandera = 1 });
    }
    var _Inicio = function () {
        cl.LisClientesTareas();
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
    $(".scroll-area").scrollspy({ target: "#myNavbar" });
    admclientes.init();
});