var utl = new BLLUtilidades();
var Ac = new BLLAcuerdosFox();

var _admnego = (function () {
    var WNegoID = funcionUrlGlobal("/Servicios/WNegocioFox.asmx/lisNegoID");
    var negocio = utl.getUrl('negocio');

    var _addHandlers = function () {

    }

    var getHoha = function (n) {
        jsondata = "{'c':" + JSON.stringify(n) + "}"
        $.ajax({
            type: "POST", url: WNegoID, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    alert("Error");
                }
                else {
                    var nego = result.d;

                    $("#TxtNombreProyecto").append(nego[0].SUCURSAL);
                    $('#TxtVlrInmueble').append(utl.FormatNumero(nego[0].VLRNEGOCIO));
                    $("#TxtFechaNegocio").append(nego[0].FECHANEGOCIO);
                    $("#TxtInmueble").append(nego[0].CODIGOINMUEBLE);
                    $("#TxtCedula").append(nego[0].CEDULA_P);
                    $("#TxtNombrecliente").append(nego[0].NOMBRECLIENTE);
                    $("#TxtCodNegocio").append(nego[0].CodNegocio);
                    $("#TxtCuotaInicial").append(utl.FormatNumero(nego[0].VLRINICIALCUOTA));
                    $("#TxtVlrcredito").append(utl.FormatNumero(nego[0].VLRCREDITO));
                    $("#TxtFescrituracion").append((moment(nego[0].FECHA_ES).format("YYYY/DD/MM")));

                    $("#TxtVendedor").append(nego[0].USER_CREO);
                    $("#TxtTelefono").append(nego[0].TELEFONO_P);



                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    var imprimir = function () {

    }

    var _Inicio = function () {

        $(".persona").append(negocio);
        getHoha(negocio);
        imprimir();
        Ac.AcuerdosFoxReporte(negocio);
    }

    return {
        init: function () {

            _Inicio();
            _addHandlers();

        },
    }

}());

$(document).ready(function () {

    _admnego.init();
    setTimeout(function () { javascript: window.print(); }, 1000);
})
