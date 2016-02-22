
var utl = new BLLUtilidades();
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var _admhoja = (function () {

    var Wdtohoja = funcionUrlGlobal("/Servicios/WNegocio.asmx/lisHoja");
    var Wacuerdo = funcionUrlGlobal("/Servicios/WNegocio.asmx/_Acuerdopago");
    var WAddConfiguracionNegociogetAll = funcionUrlGlobal("/Servicios/WConfiguracionNegocios.asmx/getAll");

    var idhoja = utl.getUrl('idhoja');
    var proyec = utl.getUrl('proyec');
    
    var _addHandlers = function () {


    }

    var getHoha = function (hoja) {
        jsondata = "{'idhoja':" + JSON.stringify(hoja) + "}"
        $.ajax({
            type: "POST", url: Wdtohoja, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    
                }
                else {
                    var eval = result.d;
                    $("#Pinteres").append(eval[0].PROYECTO_INT);
                    $("#Lpropietario").append(eval[0].PROPIETARIO)
                    $("#Llugar").append(eval[0].CEDULA_P);
                    $("#Lcivil").append(eval[0].ESTADO_C);
                    $("#Lfnaci").append(moment(eval[0].FECHA_NACI).format("YYYY/DD/MM"));
                    $("#Lalugar").append(eval[0].LUGAR);
                    $("#LdireccionCr").append(eval[0].DIRECCION_R);
                    $("#Lfijo").append(eval[0].TELEFONO_P);
                    $("#Lempresa").append(eval[0].EMPRESA);
                    $("#Lcargo").append(eval[0].CARGO);
                    $("#Lprofesion").append(eval[0].PROFESION);
                    $("#LadireEmp").append(eval[0].DIRECCION_EMPR);
                    $("#Lanti").append(eval[0].ANTIGUEDAD);
                    $("#LCorreo").append(eval[0].CORREO);
                    $("#Lconyugue").append(eval[0].NOMBRE_CONY);
                    $("#LCyugue").append(eval[0].CEDULA_CUY);
                    $("#Lteconyugue").append(eval[0].TELE_CONY);
                    $("#LNhijos").append(eval[0].N_HIJO);
                    $("#Linteres").append(eval[0].INTERES_COM);
                    $("#Lvalapto").append(eval[0].VALOR_CASA);
                    $("#Linicial").append(utl.FormatNumero(eval[0].INICIAL));
                    $("#lacre").append(utl.FormatNumero(eval[0].CREDITO));
                    $("#lbanco").append(eval[0].BANCO);
                    //$("#Lpropietario").append(eval[0].NO_CREDITO);
                    $("#Fescritura").append(moment(eval[0].FECHA_ES).format("YYYY/DD/MM"));
                    $("#Fentrega").append(moment(eval[0].FECHA_ENT).format("YYYY/DD/MM"));
                    $("#fechasubro").append(moment(eval[0].FECHA_SUBRO).format("YYYY/DD/MM"));
                    $("#Lasesor").append(eval[0].ASESOR_INFO);
                    $("#Lentero").append(eval[0].MEDIO_ENT);
                    $("#LasesorC").append(eval[0].USER_NEGOCIO);
                    $("#codifox").append(eval[0].CODIGO_F);
                    $("#LIngresos").append(eval[0].INGRESO);
                    
                    
                    //$("#Lpropietario").append(eval[0].CLASE_INMU);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }


    var ConfiguracionNegocio = function (proyec) {
        jsondata = "{'p':" + JSON.stringify(proyec) + "}"
        $.ajax({
            type: "POST", url: WAddConfiguracionNegociogetAll,
            data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {


                }
                else {
                    var eval = result.d;
                    console.log(JSON.stringify(result.d))
                    var Nombre =" ";

                    $.each(eval, function (i,item) {
                       Nombre += "<br/>" + item.Nombre.trim(); //$("#TxtConf").val() +
                    });

                    $("#TxtConf").append(Nombre);
                  
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

   
    var acuerdo = function (idhoja) {
        jsondata = "{'ac':" + JSON.stringify(idhoja) + "}"
        $.ajax({
            type: "POST", url: Wacuerdo, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {

                }
                else
                {
                    LLenarTabla(result.d);
                    //alert(JSON.stringify(result.d))
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }
      

    var LLenarTabla = function (datos) {
        document.getElementById('tablapagos').innerHTML = "";
        var tabla = '<table class="table" style="font-size: 75%!important;" id="tablaspa">';
        tabla +='<thead>';
        tabla += '<tr>';
        tabla += '<th class="col-lg-4">Cuota</th>';
        tabla += '<th class="col-lg-4">Fecha</th>';
        tabla += '<th class="col-lg-4">Valor</th>';
        tabla +='</tr>';
        tabla +='</thead>';
		tabla += '<tbody>';
        $.each(datos, function (i,item) {
            tabla += '<tr>';
            tabla += '<td  class="col-lg-4">' + item.DETALLE + '</td>';
            tabla += '<td>' + moment(item.FECHA_PAGO).format("YYYY/MM/DD") + '</td>';
            tabla += '<td>' +utl.FormatNumero( item.VALOR_CUOTA) + '</td>';
            tabla += ' </tr>';
        });
        
        tabla +='</tbody>';
        tabla += '</table>';
        $('#tablapagos').append(tabla);
    }

    var imprimir = function () {

        $("#BtnImprimir").click(function () {
            javascript: window.print();
        });


    }

    


    var _Inicio = function () {
        getHoha(idhoja);
        acuerdo(idhoja);
        ConfiguracionNegocio(proyec);
        imprimir();
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }

}());

$(document).ready(function () {

    _admhoja.init();
    setTimeout(function () { javascript: window.print(); }, 1000);
})
