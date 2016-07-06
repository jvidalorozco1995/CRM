
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

    var getHoha = function (idhoja) {
        jsondata = "{'idhoja':" + JSON.stringify(idhoja) + "}"
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
                    alert(JSON.stringify(eval.LUGAR));
                    $("#Pinteres").append(eval.PROYECTO_INT);
                    $("#Lpropietario").append(eval.PROPIETARIO)
                    $("#Lcedula").append(eval.CEDULA_P);
                    $("#Lcivil").append(eval.ESTADO_C);
                    $("#Lfnaci").append(moment(eval.FECHA_NACI).format("YYYY/DD/MM"));
                    $("#Lalugar").append(eval.LUGAR);
                    $("#LdireccionCr").append(eval.DIRECCION_R);
                    $("#Lfijo").append(eval.TELEFONO_P);
                    $("#Lempresa").append(eval.EMPRESA);
                    $("#Lcargo").append(eval.CARGO);
                    $("#Lprofesion").append(eval.PROFESION);
                    $("#LadireEmp").append(eval.DIRECCION_EMPR);
                    $("#Lanti").append(eval.ANTIGUEDAD);
                    $("#LCorreo").append(eval.CORREO);
                    $("#Lconyugue").append(eval.NOMBRE_CONY);
                    $("#LCyugue").append(eval.CEDULA_CUY);
                    $("#Lteconyugue").append(eval.TELE_CONY);
                    $("#LNhijos").append(eval.N_HIJO);
                    $("#Linteres").append(eval.INTERES_COM);
                    $("#Lvalapto").append(utl.FormatNumero(eval.VALOR_CASA));
                    $("#Linicial").append(utl.FormatNumero(eval.INICIAL));
                    $("#lacre").append(utl.FormatNumero(eval.CREDITO));
                    $("#lbanco").append(eval.BANCO);

                    $("#linmueble").append(eval.NOMBRE_BLO);
                    

                    $("#Lfexpedicion").append(moment(eval.EXPEDICION).format("YYYY/DD/MM"));
                    //$("#Lpropietario").append(eval.NO_CREDITO);
                    $("#Fescritura").append(moment(eval.FECHA_ES).format("YYYY/DD/MM"));
                    $("#Fentrega").append(moment(eval.FECHA_ENT).format("YYYY/DD/MM"));
                    $("#fechasubro").append(moment(eval.FECHA_SUBRO).format("YYYY/DD/MM"));
                    $("#Lasesor").append(eval.ASESOR_INFO);
                    $("#Lentero").append(eval.MEDIO_ENT);
                    $("#LasesorC").append(eval.USER_NEGOCIO);
                    $("#codifox").append(eval.CODIGO_F);
                    $("#LIngresos").append(utl.FormatNumero(eval.INGRESO));
                    $("#lfechanegocio").append(moment(eval.FECHA_NEGOCIO).format("YYYY/DD/MM"));
                    
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
