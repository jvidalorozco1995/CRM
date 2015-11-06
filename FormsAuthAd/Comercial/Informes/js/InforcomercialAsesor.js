var tr = new BLLTrabajadores();
var as = new BLLInfocomercialase();
var adminfoAsesor = (function () {

 
    var asesor = "";

    var _addHandlers = function () {
        $(document).on('change', '#CombAsesores', function () {
            asesor = $('#CombAsesores').val();
            tr.ListAsesor(asesor, 1)
            as.ListadoAsesor(asesor)
            as.ListadoAsesorp(asesor)

        });

        $('#BtnCargar').click(function () {
            var fechaini = $('#Txtinico').val();
            var fechafin = $('#Txtfin').val();
            asesor = $('#CombAsesores').val();
            var diaini = 0;
            var mesini = 0;
            var yerini = 0;
            fecha = fechaini.split("/")
            diaini = fecha[0];
            mesini = fecha[1];
            yerini = fecha[2];
            if (fechaini.length < 1) {
                toastr.error(' CRM - Mayales notificacion' +
                   '</br></br>No se a seleccionado una feha de inicio');
            }
            else {
                if (fechafin.length < 1) {
                    toastr.error(' CRM - Mayales notificacion' +
                   '</br></br>No se a seleccionado una feha  fin');
                }
                else {
                    if (asesor.length < 1) {
                        toastr.error(' CRM - Mayales notificacion' +
                        '</br></br>no a selccionado un proyecto para poder realizar la consulta');
                    }
                    else
                    {
                        as.AsesorFechas(asesor, fechaini, fechafin);
                        as.AsesorFechasProyectos(asesor, fechaini, fechafin);
                    }
                }
            }

        });

    }

    var _Inicio = function () {
        $('#singleBarOptions').hide();
        $('#sharpLineOptions').hide();
        tr.getrabajadores();
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
    adminfoAsesor.init();
});