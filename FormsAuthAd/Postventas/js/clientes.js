

var cl = new BLLClientes();
var bu = new BLLUtilidades();
var WsDetalle = funcionUrlGlobal("/Servicios/WCaptcha.asmx/ListDetalle");
var WsPostventas = funcionUrlGlobal("/Servicios/WCaptcha.asmx/LisPostventa");
var WsPostventa = funcionUrlGlobal("/Servicios/WCaptcha.asmx/LisPostventas");
var WsPostventaInsert = funcionUrlGlobal("/Servicios/WCaptcha.asmx/InsertPostventa");
var WsNegocios = funcionUrlGlobal("/Servicios/WCaptcha.asmx/ListNegocios");
var cedula = bu.getUrl("cedula");
var codigo = bu.getUrl("codigo");
var admclientes = (function () {

    

   

    var _addHandlers = function () {

        $(document).on('click', '.BtCrear', function (event) {
            $('#Actividadesxtramites').hide();
            $('#PanelClientes').hide();
            $('#Actividadesxtramite').show();
            $('#PanelCliente').show();
           
            jsondata = "{'cedula':'" + cedula + "', 'codigo':'" + codigo + "'}"
            $.ajax({
                type: "POST", url: WsPostventas, data: jsondata,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d == null) {
                        // alert("holamundo");
                    }
                    else {
                        // alert("holamundo2");
                        var eval = result.d;

                        $("#Text1").val(eval[0].NOMBRE_PROYEC)
                        $("#Text2").val(eval[0].NOMBRE_BLO);
                        $("#Text3").val(eval[0].INMUEBLE);
                        $("#Text4").val(eval[0].PROPIETARIO);
                        $("#Text5").val(eval[0].TELEFONO_P);
                        $("#Text6").val(eval[0].CORREO);
                        $("#Text7").val("");
                       
                    }
                },
                error: function (obj, error, objError) { alert(obj.responseText); }
            });

           
        });

        $(document).on('click', '#BtnGuardar', function (event) {
            Validar();
                       
        });

        $(document).on('click', '.BtVer', function (event) {
            $('#Actividadesxtramites').show();
            $('#PanelClientes').show();
            $('#Actividadesxtramite').hide();
            $('#PanelCliente').hide();
            var id = $(this).attr("id");
            jsondata = "{'id':" + id + "}"
            $.ajax({
                type: "POST", url: WsDetalle, data: jsondata,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d == null) {
                        // alert("holamundo");
                    }
                    else {
                        // alert("holamundo2");
                        var eval = result.d;

                        $("#Text1s").val(eval[0].Proyecto)
                        $("#Text2s").val(eval[0].Mzna);
                        $("#Text3s").val(eval[0].CodInmueble);
                        $("#Text4s").val(eval[0].Propietario);
                        $("#Text5s").val(eval[0].Telefono);
                        $("#Text6s").val(eval[0].Correo);
                        $("#Text7s").val(eval[0].Descripcion);

                    }
                },
                error: function (obj, error, objError) { alert(obj.responseText); }
            });


        });
        $(document).on('click', '.Pcreartarea', function (event) {
            $('#Actividadesxtramites').hide();
            $('#PanelClientes').hide();
            $('#Actividadesxtramite').hide();
            $('#PanelCliente').hide();

        });
        $(document).on('click', '#Btncliente', function (event) {
            cedula = $("#cedula").val();
            cl.Listnegocios(cedula, WsNegocios)

        });
        
    }

    var _Inicio = function () {
        
        $('#Actividadesxtramite').hide();
        $('#PanelCliente').hide();
        $('#Actividadesxtramites').hide();
        $('#PanelClientes').hide();
        cl.Listpostventa(cedula, codigo, WsPostventa);
        cl.Listnegocios(cedula, WsNegocios);
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());
var Dtocliente = function () {

    var Postventa = {};

    /*Datos del cliente*/
    Postventa.CedulaP = cedula;
    Postventa.CodCRM = codigo;
    Postventa.Proyecto = $("#Text1").val();
    Postventa.Mzna = $("#Text2").val();
    Postventa.CodInmueble = $("#Text3").val();
    Postventa.Propietario = $("#Text4").val();
    Postventa.Telefono = $("#Text5").val();
    Postventa.Correo = $("#Text6").val();
    Postventa.Descripcion = $("#Text7").val();
    Postventa.Estado = '0';

    return Postventa;
}
var Validar = function () {

    if ($('#Text1').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo proyecto');
        $('#Text1').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text2').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo Mzna/Torre');
        $('#Text2').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text3').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo Cod.Inmueble');
        $('#Text3').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text4').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo Propietario');
        $('#Text4').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text5').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo Telefono');
        $('#Text5').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text6').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo correo');
        $('#Text6').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    }

    else if ($('#Text7').val().length < 1) {
        toastr.error('CRM Mayales - Notificacion' +
               '</br></br>1 - No a digitado nada en el campo Descripcion');
        $('#Text7').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
        return false;

    } else {

        cl.InsertPostventa(Dtocliente(), WsPostventaInsert);
        $('#Actividadesxtramite').hide();
        $('#PanelCliente').hide();
        $('#Actividadesxtramites').hide();
        $('#PanelClientes').hide();
    }
}

$(document).ready(function () {
    $('#Txtinico').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#Txtfin').datepicker({
        format: 'yyyy/mm/dd',
    });
    $(".scroll-area").scrollspy({ target: "#myNavbar" });
    admclientes.init();
});