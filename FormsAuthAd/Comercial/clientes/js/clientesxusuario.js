
var cl = new BLLClientes();
var Tr = new BLLTareas();
var pry = new BLLProyectos();
var tra = new BLLTrabajadores();

var admclientes = (function () {

    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
        
        $(".excel").on('click', function (event) {
            cl.exportJsonToCSV();
        });
        $(document).on('click', '.Infocl', function () {
            $('#infoCLiente').modal('show');
            cl.getClientes($(this).attr("id"));
        });
        $(document).on('change', '#ComProyect', function () {
            var proyect = $('#ComProyect').val();
            pry.listadotareasUSU(proyect);
            bandera = 0;
           

        });
        $(document).on('click', '.historial', function () {
            cliente = $(this).attr("id");
            Tr.LisTareas(cliente, 1);
        });
      
        $(document).on('click', '#BtnFiltar', function () {
            var asesor = $('#ComProyect').val().length;
        
           
            switch (bandera) {
                case 0:
                    if (asesor < 1 ) {
                        toastr.error('CRM Mayales' +
                        '</br> verifique que haya seleccionado proyecto y asesor para realizar la consulta');
                    }
                    else {
                        tra.CLientesAsesorUSU( $('#ComProyect').val());
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
        
            Tr.lisbitacoras(t);
        });
     
    }
    var _Inicio = function () {
        cl.LisClientesTareasXusuario();
        pry.ListProyec(2, WsListProyec);
      
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