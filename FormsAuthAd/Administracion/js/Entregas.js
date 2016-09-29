
var user = new BLLUsuariosEntregas();
var Wacuerdo = funcionUrlGlobal("/Servicios/WResponsableCalidad.asmx/proyectosComparados");//Listar Tareas
var IdSolicitud;


var admUser = (function () {




    var _addHandlers = function () {

        $(document).on('click', '.actualizar', function () {

            var codigo = $(this).attr("id");
            IdSolicitud = $(this).attr("tag");
            $("#ModalAsignar").modal('show');
            $("#Proyecto").text(codigo);
            
        });
        $(document).on('click', '.infDetalle', function () {

            var Usuario = $(this).attr("id");

            var Dto = {
                "Id":IdSolicitud,
                "Usuario": Usuario
            }

            $("#ModalAsignar").modal('hide');
            user.Update(Dto);
            setTimeout(function () { user.Listado();}, 1000);
        });
        
       
    };

    function Insertar() {


        $.ajax({
            type: "POST", url: Wacuerdo,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
              
                if (result.d == null) {

                }
                else {

                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });

    }

    var _Inicio = function () {
        Insertar();
       
        user.Listado();
        user.getUser();
    
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