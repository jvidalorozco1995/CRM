
var i = new BLLIndex();
var Tr = new BLLTareas();
var admIndex= (function () {

    var motivo = null;
    var t = 0;
    var cedula = 0;

    var date = new Date();
    var dia = date.getDate();
    var año = date.getFullYear();
    var mes = date.getMonth() + 1;
    if (dia < 10) { dia = '0' + dia }
    if (mes < 10) { mes = '0' + mes }
    fecha = año + "/" + mes + "/" + dia;
    
    var _addHandlers = function () {

        $(document).on('click', '.historial2', function () {
            var datos= $(this).attr("id");
            var resul = datos.split("/");
            t = resul[0];
            cedula = resul[1];
            $('#infoTareas').modal('show');
            $('#BtnEditarI').show();
            $('#BtnTerminadaI').show();
            $('#BtnPostI').hide();
            Tr.InfoTareas(t);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            Tr.lisbitacoras(t);
        });

    }

    $('#BtnEditarI').click(function () {
        $('#BtnEditarI').hide();
        $('#BtnPostI').show();
        $('#BtnTerminadaI').hide();

        $('#ButnCerrarG').hide();

        $('#Txtdetalle').attr('readonly', false);
        $('#fechainfo').attr('readonly', false);

    })


    $(document).on('click', '#ButnCerrarG', function () {

        if ($('#TxtMotivo').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
               '</br></br>No se a digitado una descripción');
        } else {

            $('#Cancelargestion').modal("show"); $('#ButnCerrarG').hide();
        }
    })



    $(document).on('change', '#gestcancelar', function () {
        var tipo = $('#gestcancelar').val();

        switch (tipo) {
            case "N":
                //gestion terminada porq el cliente decice comprar
                i._Cancelargestion(_BitacorasDTO(), cedula, "N");
                i.Etareas(_DtoTareas(), _BitacorasDTO());
                setTimeout(function () { i.getTareas(); }, 1000);
            
                break;
            case "C":
                i._Cancelargestion(_BitacorasDTO(), cedula, "C");
                i.Etareas(_DtoTareas(), _BitacorasDTO());
                setTimeout(function () { i.getTareas(); }, 1000);
              
                break;
        }
    });

    $('#BtnTerminadaI').click(function () {
        t = $('#TxtIdTarea').val();
        if ($('#TxtMotivo').val() === "") {
            toastr.error('CRM Mayales - Notificacion' +
            '</br> El campo descripcion se encuentra vacio');
        }
        else
        {
           Tr.Etareas(_DtoTareas(), _BitacorasDTO());
           setTimeout(function () { i.getTareas(); }, 1000)
           setTimeout(function () { i.CumplimientoTareas(); }, 1000);
           document.getElementById('Completadas').innerHTML = "";
           document.getElementById('cumplidos').innerHTML = "";
           document.getElementById('Asignadas').innerHTML = "";
           document.getElementById('porcentaje').innerHTML = "";
        }
    })

    $('#BtnPostI').click(function () {
        if ($('#Txtdetalle').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
               '</br> El campo descricpion de Tarea se encuentra vacio');
        }
        else {
            if ($('#fechainfo').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '</br> El campo Fecha de Tarera se encuentra vacio');
            }
            else {
                if ($('#TxtMotivo').val().length < 1) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> El campo descripcion se encuentra vacio');
                }
                else {
                    var fechaEs = $('#fechainfo').val()
                    if (fechaEs < fecha) {
                        dia = null;
                        mes = null;
                        toastr.error('CRM Mayales - Notificacion' +
                       '</br> La fecha selcccionada no puede ser menor a la del dia actual');
                    }
                    else {
                        dia = null;
                        mes = null;
                        Tr.PosponerTarea(_PosTareas(), _BitacorasDTO());
                        setTimeout(function () { i.getTareas(); }, 1000)
                        setTimeout(function () { i.CumplimientoTareas(); }, 1000);
                        setTimeout(function () { Tr.lisbitacoras(t); }, 1000);
                        document.getElementById('Completadas').innerHTML = "";
                        document.getElementById('cumplidos').innerHTML = "";
                        document.getElementById('Asignadas').innerHTML = "";
                        document.getElementById('porcentaje').innerHTML = ""; 
                        document.getElementById('listareas').innerHTML = "";
                    }

                }
            }
        }


    });

    var _DtoTareas = function () {
        var tarea = {};
        tarea.cliente = cedula;
        tarea.trabajador = '';
        tarea.concepto = $('#TxtDescripcion').val();
        tarea.fechainicio = $('#TxtFecha').val();
        tarea.estado = 'E';
        return tarea;
    }

    var _PosTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = t;
        postarea.CONCEPTO = $('#Txtdetalle').val();
        postarea.CLIENTE = cedula;
        postarea.ESTADO = "P";
        return postarea;
    }

    var _BitacorasDTO = function () {

        var bitacora = {};
        bitacora.tarea = t;
        bitacora.motivo = $('#TxtMotivo').val();
        bitacora.FECHAMOD = $('#fechainfo').val();
        return bitacora;
    }

    var _Inicio = function () {
        i.getTareas();
        i.CumplimientoTareas();
        $('#Fechafin').hide();
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {
    $('#fechainfo').datepicker({
        format: 'yyyy/mm/dd',
    });

    admIndex.init();
});