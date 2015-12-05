
var Seg = new BLLSeguiNegocios();
var tar = new BLLTareas();

var admUser = (function () {

    var WsListNegocio = "/Servicios/WNegocioFox.asmx/ConsultaNegociosCompromisos";//Consulto Proyectos CRM
 

    var _addHandlers = function () {
      

        $("#BtnActualizar").click(function () {

        });

        $('#BtnEditar').click(function () {
            $('#BtnEditar').hide();
            $('#BtnPost').show();
            $('#BtnTerminada').hide();
            $('#Txtdetalle').attr('readonly', false);
            $('#fechainfo').attr('readonly', false);
        })



        $('#BtnPost').click(function () {
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

                            tar.PosponerTarea(_PosTareas(), _BitacorasDTO());
                            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);
                            setTimeout(function () { tar.lisbitacoras(cedula); }, 1000);
                            /*setTimeout(function () { Tr.lisbitacoras(t); }, 1000)
                            setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                            setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                            setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);*/
                        }

                    }
                }
            }
        });

        $(document).on('click', '#BtnTerminada', function (event) {

            tar.TerminarTareaNego(_PosTareas(), _BitacorasDTO());
            setTimeout(function () { tar.InfoTareasNego(cedula, 0); }, 1000);
            setTimeout(function () { tar.TareasNegocio(negocio); }, 1000);

        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.Detallett', function () {
            negocio = $(this).attr("id");
            ced = $(this).attr("tag");
           
            tar.TareasNegocioCompromiso(negocio);
            $('#TxtClientes').val(ced);
            //Ac.AcuerdosFox(negocio);
            //neg.ListNegocioFOXID(WsListNegocioID, negocio);
            //Pag.PagosFox(negocio);
        });

       
        $(document).on('click', '#BtnCreaTarea', function (event) {
            if ($('#TxtDescripcion').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> no ha digitado nada en el campo descripcion de tarea');
            }
            else {
                if ($('#TxtFechaTarea').val().length < 1) {
                    toastr.error('CRM Mayales- Notificacion' +
                        '<br/> No a seleccionado ninguna Fecha para realizar la tarea');
                }
                else {
                    var fechata = $('#TxtFechaTarea').val()
                    if (fechata < fecha) {
                        toastr.error('CRM  Mayales Notificacion' +
                            '</br> la fecha seleccionada para la tarea no puede ser menor que la actual');
                    }
                    else {

                        Tr.InsertCompromiso(_DtoTareas());
                        setTimeout(function () { tar.TareasNegocioCompromiso(negocio); }, 2000);
                      

                    }
                }
            }
        });


        
        $(document).on('click', '.Infocl', function () {
            cedula = $(this).attr("id");
            tar.InfoTareasNego(cedula);
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
           // tar.lisbitacoras(cedula);

        });


        
    };

    var _PosTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = cedula;
        postarea.CONCEPTO = $('#Txtdetalle').val();
        //  postarea.CLIENTE = cedula;
        postarea.ESTADO = "T";
        return postarea;
    }

    var _DtoTareas = function () {
        var tarea = {};
        tarea.cliente = $('#TxtClientes').val();
        tarea.trabajador = '';
        tarea.concepto = $('#TxtDescripcion').val();
        tarea.FECHAINICIO =  moment($('#TxtFechaTarea').val()).format("YYYY/MM/DD");
        tarea.FECHAFIN = moment($('#TxtFechaTarea').val()).format("YYYY/MM/DD");
        tarea.NEGOCIO = negocio;
        tarea.estado = 'CO';
        return tarea;
    }
    var _BitacorasDTO = function () {

        var bitacora = {};
        bitacora.tarea = cedula;
        bitacora.motivo = $('#TxtMotivo').val();
        bitacora.FECHAMOD = $('#fechainfo').val();
        return bitacora;
    }
    var _Inicio = function () {
        $('#PanelTareas').show();
        Seg.ListNegocios(WsListNegocio);
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