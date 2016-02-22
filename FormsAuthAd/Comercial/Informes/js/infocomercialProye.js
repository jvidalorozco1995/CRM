var inf = new BLLinfocomercialProyec();
var pr = new BLLProyectos();
var adminfo = (function () {

    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

    var proyec = "";
    var asesor = "";

    var _addHandlers = function () {
        $(document).on('change', '#ComProyect', function () {
            var p = $('#ComProyect').val();
            inf.Infotarea(p);
            inf.LisproyectosInteres(p);
            inf.CLientesAsesor(p);
        });

        $('#BtnCargar').click(function () {
            var fechaini = $('#Txtinico').val();
            var fechafin = $('#Txtfin').val();
            var proyect = $('#ComProyect').val();
            var diaini = 0;
            var mesini = 0;
            var yerini = 0;
            fecha = fechaini.split("/")
            diaini = fecha[0];
            mesini = fecha[1];
            yerini = fecha[2];
            if (fechaini.length < 1)
            {
                toastr.error(' CRM - Mayales notificacion' +
                   '</br></br>No se a seleccionado una feha de inicio');
            }
            else
            {
                if (fechafin.length < 1)
                {
                    toastr.error(' CRM - Mayales notificacion' +
                   '</br></br>No se a seleccionado una feha  fin');
                }
                else
                {
                    if (proyect.length < 1) {
                        toastr.error(' CRM - Mayales notificacion' +
                        '</br></br>no a selccionado un proyecto para poder realizar la consulta');
                    }
                    else
                    {
                        inf.RangoTareasProyec(fechaini, fechafin, proyect);
                        setTimeout(function () { inf.RangoclientesProyec(fechaini, fechafin, proyect); }, 1000);
                        setTimeout(function () { inf.RangoAsesorProyec(fechaini, fechafin, proyect); }, 1000);
                    }
                }
            }
           
        });

    }

    var _Inicio = function () {
        $('#singleBarOptions').hide();
        $('#sharpLineOptions').hide();
        pr.ListProyec(2, WsListProyec);
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