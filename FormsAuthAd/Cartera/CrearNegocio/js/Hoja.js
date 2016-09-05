
var utl = new BLLUtilidades();
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var _admhoja = (function () {

    var Wdtohoja = funcionUrlGlobal("/Servicios/WNegocio.asmx/lisHoja");
    var Wacuerdo = funcionUrlGlobal("/Servicios/WNegocio.asmx/_Acuerdopago");
    var WacuerdoGas = funcionUrlGlobal("/Servicios/WNegocio.asmx/_Acuerdopagogas");
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
            async: false,
            success: function (result) {
                if (result.d == null) {
                    
                }
                else {
                    
                    var eval = result.d;
                    $("#codifox").append(eval.CODIGO_F);
                  
                    
                    $("#LblClaseInmu").append(eval.CLASE_INMU);
                    $("#Lblfechanegocio").append(moment(eval.FECHA_NEGOCIO).format("YYYY/DD/MM"));
                    $("#LblUbicacionInmueble").append(eval.CLASE_INMU);
                    $("#LblManzana").append("Manzana : " + eval.INMUEBLE.substring(6, 8) + " Casa o torre : " + eval.INMUEBLE.substring(8, 13));
                    $("#LblAreaPrivada").append(eval.AREA_PRIVADA+" Mt2" );
                    $("#LblAreaConstruida").append(eval.AREA_CONSTRUIDA + " Mt2");
                    $("#LblParqueadero").append(eval.PARQUEADERO);
                    $("#LblAreasComunes").append(eval.AREAS_COMUNES);
                    $("#Lblpropietario").append(eval.PROPIETARIO);
                    $("#Lbltpersona").append(eval.TIPO_PERSONA);
                    $("#Lblcivil").append(eval.ESTADO_C);
                    $("#Lbltdocumento").append(eval.TIPO_DOCUMENTO);
                    $("#Lblcedula").append(eval.CEDULA_P);
                    $("#LblExpedicion").append(eval.LUGAR_EXPE);
                    $("#Lblfexpedicion").append(moment(eval.EXPEDICION).format("YYYY/DD/MM"));
                    $("#Lblfechanacimiento").append(moment(eval.FECHA_NACI).format("YYYY/DD/MM"));
                    $("#Lbllugarnacimiento").append(eval.LUGAR);
                    $("#LblNroHijos").append(eval.N_HIJO);
                    $("#LblDomicilio").append(eval.DIRECCION_R);
                    $("#LblDireccionCorresp").append(eval.DIRECCION_CORRESPON);
                    $("#LblCorreo").append(eval.CORREO);
                    $("#LblTelefono").append(eval.TELEFONO_P);
                    $("#LblCelular").append(eval.CELULAR);
                    $("#LblEmpresa").append(" "+eval.EMPRESA);
                    $("#LblCargo").append(eval.CARGO);
                    $("#LblProfesion").append(eval.PROFESION);
                    $("#LblDireccion").append(eval.DIRECCION_EMPR);
                    $("#LblIngresos").append(utl.FormatNumero(eval.INGRESO));
                    $("#LblAntiguedad").append(eval.ANTIGUEDAD);
                    $("#LblNombreconyugue").append(eval.NOMBRE_CONY);
                    $("#Lbltipodocumentocony").append(eval.TIPO_DOCUMENTO_CONY);
                    $("#LblNumerodocumentocony").append(eval.CEDULA_CUY);
                    $("#Lbllugarexpedicioncony").append(eval.LUGAR_EXPEDICION);
                    $("#LblFechaexpedicionconyu").append(moment(eval.FECHA_EXPEDICION_CUY).format("YYYY/DD/MM"));
                    $("#LblTelefonoconyu").append(eval.TELE_CONY);
                    $("#LblValorInmueble").append(utl.FormatNumero(eval.VALOR_CASA));
                    $("#LblCuotaInicial").append(utl.FormatNumero(eval.INICIAL));
                    $("#LblAdiciones").append(utl.FormatNumero(eval.ADICIONES_EXCLUSIONES));
                    $("#LblSubsidio").append(utl.FormatNumero(eval.SUBSIDIO)); 
                    $("#LblGaraje").append(utl.FormatNumero(eval.GARAJE));
                    $("#LblSaldofinanciar").append(utl.FormatNumero(eval.CREDITO));
                    $("#LblDescuento").append(utl.FormatNumero(eval.DESCUENTO));
                    $("#LblBanco").append(eval.NOMBRE_BANCO);
                    $("#LblValortotal").append(utl.FormatNumero(eval.VALOR_CASA));
                    $("#LblValorserviciogas").append(utl.FormatNumero(eval.VALOR_SERVICIOGAS));
                    $("#LblNroCuotas").append(eval.NO_CREDITO);
                    $("#LblIntereses").append(eval.INTERESES_SUBROGACION+" %");
                  
                    

                    $("#TxtObservaciones").append(eval.OBSERVACIONES);
                 
                    $("#Pinteres").append(eval.PROYECTO_INT);
                    $("#Lasesor").append(eval.ASESOR_INFO);
                    $("#Lentero").append(eval.MEDIO_ENT);
                    $("#LasesorC").append(eval.USER_CREO);
                    
/*
                    $("#Pinteres").append(eval.PROYECTO_INT);
                    $("#Lcivil").append(eval.ESTADO_C);
                    $("#Lalugar").append(eval.LUGAR);
                    $("#LdireccionCr").append(eval.DIRECCION_R);
                    $("#Lfijo").append(eval.TELEFONO_P);
                   
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
                    $("#lbanco").append(eval.NOMBRE_BANCO);

                    $("#linmueble").append(eval.NOMBRE_BLO);
                    

                   
                    //$("#Lpropietario").append(eval.NO_CREDITO);
                    $("#Fescritura").append(moment(eval.FECHA_ES).format("YYYY/DD/MM"));
                    $("#Fentrega").append(moment(eval.FECHA_ENT).format("YYYY/DD/MM"));
                    $("#fechasubro").append(moment(eval.FECHA_SUBRO).format("YYYY/DD/MM"));
                    $("#Lasesor").append(eval.ASESOR_INFO);
                    $("#Lentero").append(eval.MEDIO_ENT);
                    $("#LasesorC").append(eval.USER_NEGOCIO);
                   
                    $("#LIngresos").append(utl.FormatNumero(eval.INGRESO));
                  
                    
                    //$("#Lpropietario").append(eval[0].CLASE_INMU);*/
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
            async: false,
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
    var acuerdogas = function (idhoja) {
        jsondata = "{'ac':" + JSON.stringify(idhoja) + "}"
        $.ajax({
            type: "POST", url: WacuerdoGas, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: false,
            success: function (result) {

                if (result.d == null) {

                }
                else {
                    LLenarTablaGas(result.d);
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

    var LLenarTablaGas = function (datos) {
        document.getElementById('tablapagosgas').innerHTML = "";
        var tabla = '<table class="table" style="font-size: 75%!important;" id="tablaspa2">';
        tabla += '<thead>';
        tabla += '<tr>';
        tabla += '<th class="col-lg-4">Cuota</th>';
        tabla += '<th class="col-lg-4">Fecha</th>';
        tabla += '<th class="col-lg-4">Valor</th>';
        tabla += '</tr>';
        tabla += '</thead>';
        tabla += '<tbody>';
        $.each(datos, function (i, item) {
            tabla += '<tr>';
            tabla += '<td  class="col-lg-4">' + item.DETALLE + '</td>';
            tabla += '<td>' + moment(item.FECHA_PAGO).format("YYYY/MM/DD") + '</td>';
            tabla += '<td>' + utl.FormatNumero(item.VALOR_CUOTA) + '</td>';
            tabla += ' </tr>';
        });

        tabla += '</tbody>';
        tabla += '</table>';
        $('#tablapagosgas').append(tabla);
    }

    



    var imprimir = function () {

        $("#BtnImprimir").click(function () {
            javascript: window.print();
        });


    }

    


    var _Inicio = function () {
      
        getHoha(idhoja);

        acuerdo(idhoja);

        acuerdogas(idhoja);

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
