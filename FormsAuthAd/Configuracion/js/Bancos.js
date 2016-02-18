var bq = new BLLBancos();
var WsListBancos = "/Servicios/WBancos.asmx/LisBancos";//Consulto bancos Cargados  CRM
var WsInsertBancos = "/Servicios/WBancos.asmx/InsertBancos";//Consulto bancos Cargados  CRM

var admBancos = (function () {
    $('#MensajeCRM').hide();

   

    var _addHandlers = function () {
    
        $("#BtnCrear").click(function () {
            $('#Pbancos').show();
            
        });
        $("#BtnCreaBanco").click(function () {
            
            var Dto = { 'ID_BANCO': 0, 'NOMBRE_BANCO': $('#TxtNBanco').val() };
            bq.CrearBanco(WsInsertBancos, Dto);
            $('#TxtNBanco').val('');
            $('#Pbancos').hide();
            setTimeout(function () { bq.ListBancos(WsListBancos); }, 1000);
        });
        
    };

   


    var _Inicio = function () {
        $('#Pbancos').hide();
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