
var cm = new BLLInfocomercial();
var pry = new BLLProyectos();
var tra = new BLLTrabajadores();
var adminfo = (function () {
    var WsListProyec = "/ServiciosFox/WProyectos.asmx/LisProyectos";//Consulto Proyectos CRM

    var proyec = "";
    var asesor = "";

    var _addHandlers = function () {
        
        $('#BtnCargar').click(function () {
            var fechaini = $('#Txtinico').val();
            var fechafin = $('#Txtfin').val();
            var diaini = 0;
            var mesini = 0;
            var yerini =0;
            fecha = fechaini.split("/")
            diaini = fecha[0];
            mesini = fecha[1];
            yerini = fecha[2];
            cm.FechasTareas(fechaini, fechafin);
            setTimeout(function () { cm.FechasClietesAsesor(fechaini, fechafin); }, 1000);
            setTimeout(function () { cm.ClienteFechas(fechaini, fechafin); }, 1000);
            setTimeout(function () { cm.RangofechasProyectos(fechaini, fechafin); }, 1000);
            
            
        });

    }
    
    var _Inicio = function () {
        cm.CLientesproyectos();//clientes por proyectos
        cm.CLientesAsesor();//clientes por asesor
        cm.Infotarea();//Informacion tarareas
        cm.InfTrabajadores();
        ///pry.ListProyec(2, WsListProyec);
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