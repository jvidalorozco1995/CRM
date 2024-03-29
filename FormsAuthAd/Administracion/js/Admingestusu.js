﻿var gp = new BLLProyectos();
var neg = new BLLnegocio();
var Utl = new BLLUtilidades();
var admUser = (function () {

   
    var WsLisTra =  funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");//Cosulto Trabajadores
    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
    var WsListNegocio = funcionUrlGlobal("/Servicios/WNegocio.asmx/lisAllHoja");//Consulto Proyectos CRM
    var WsUpdateNegocio= funcionUrlGlobal("/Servicios/WNegocio.asmx/UpdateUsuarioCartera");//Consulto Proyectos CRM

    var _addHandlers = function () {

        //Asignar Proyectos a trabajador MODAL
        $(document).on('click', '.Asignar', function () {
            neg.ListNegocio(WsListNegocio,"Admingestusu");
            $('#ModalAsignar').modal('show');
            var dtot = $(this).attr("id");
            var result = dtot.split('-');
            $('#TxtCodigo').val(result[0]);
            $('#TxtProyecto').val(result[1]);
        });


        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarNego', function () {
            cedula = $(this).attr("id");
            $('#ModalAsignar').modal('hide');
            neg.UpdateCarteraNegocio(cedula, $('#TxtCodigo').val(), WsUpdateNegocio);
        })
    };

    var _Inicio = function () {
        gp.ListTrabajadores(WsLisTra);
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