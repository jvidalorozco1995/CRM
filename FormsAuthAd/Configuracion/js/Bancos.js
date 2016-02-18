var bq = new BLLBancos();
var WsListBancos = "/Servicios/WBancos.asmx/LisBancos";//Consulto bancos Cargados  CRM
var admBancos = (function () {
    $('#MensajeCRM').hide();

  

    var _addHandlers = function () {

        
    };


    var _Inicio = function () {
        bq.ListBancos(WsListBancos);
    };

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
    };
    admBancos.init();
});