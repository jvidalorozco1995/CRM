
var user = new BLLUsuariosEntregas();



var admUser = (function () {




    var _addHandlers = function () {


    };

   

    var _Inicio = function () {
   
        user.Listado();
      
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