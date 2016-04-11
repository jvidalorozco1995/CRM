
function BLLAcuerdosFox() {

}
function fRight(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else {
        var iLen = String(str).length;
        return String(str).substring(iLen, iLen - n);
    }
}
function fLeft(str, n) {
    if (n <= 0)
        return "";
    else if (n > String(str).length)
        return str;
    else
        return String(str).substring(0, n);
}
var WsUrl = funcionUrlGlobal("/Servicios/AcuerdosFox.asmx/AcuerdosNegocio");


BLLAcuerdosFox.prototype.AcuerdosReporte = function (negocio) {

    jsonData = "{ 'n':" + JSON.stringify(negocio) + " }";

    $.ajax({
        type: "POST", url: WsUrl, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {

            BLLAcuerdosFox.TablaAcuerdosReporte(result.d);
        },
        error: function (obj, error, objError) { alert(objError); }
    });
}

BLLAcuerdosFox.prototype.AcuerdosFoxReporte = function (negocio) {

    jsonData = "{ 'n':" + JSON.stringify(negocio) + " }";

    $.ajax({
        type: "POST", url: WsUrl, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {

            BLLAcuerdosFox.TablaAcuerdosFoxReporte(result.d);
        },
        error: function (obj, error, objError) { alert(objError); }
    });
}


BLLAcuerdosFox.prototype.AcuerdosFox = function (negocio) {

    jsonData = "{ 'n':" + JSON.stringify(negocio) + " }";

      $.ajax({
        type: "POST", url: WsUrl, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            BLLAcuerdosFox.TablaAcuerdosFox(result.d);
        },
        error: function (obj, error, objError) { alert(objError); }
     });
}
BLLAcuerdosFox.prototype.AcuerdosFoxCompromiso = function (negocio) {

    jsonData = "{ 'n':" + JSON.stringify(negocio) + " }";

    $.ajax({
        type: "POST", url: WsUrl, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            BLLAcuerdosFox.TablaAcuerdoFoxCompromiso(result.d);
            
        },
        error: function (obj, error, objError) { alert(objError); }
    });
}




BLLAcuerdosFox.TablaAcuerdosReporte = function (acuerdos) {
    document.getElementById('TblCuotas').innerHTML = "";
    var tabla = '<table id="TblAcuerdosFox" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Referencia</th>";
    tabla += "<th>Inmueble</th>";
    tabla += "<th>Vlr cuota</th>";
    tabla += "<th>Pago cuota</th>";
    tabla += "<th>Saldo x cobrar</th>";
 
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";

    $.each(acuerdos, function (i, item) {

        tabla += " <tr id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.REFERENCIA1 + "</td>";
        tabla += "<td>" + item.INMUEBLE + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
       
        tabla += "</tr>";



    });
    tabla += "</tbody>";
    tabla += '</table>';


    $('#TblCuotas').append(tabla);
   
}

BLLAcuerdosFox.TablaAcuerdosFoxReporte = function (acuerdos) {
    document.getElementById('TblAcuerdos').innerHTML = "";
    var tabla = '<table id="TblAcuerdosFox" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Referencia</th>";
    tabla += "<th>Inmueble</th>";
    tabla += "<th>Vlr cuota</th>";
    tabla += "<th>Pago cuota</th>";
    tabla += "<th>Saldo x cobrar</th>";

    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    var totalpago = 0;
    var totalsaldo = 0;
    var totalcuota = 0;
    $.each(acuerdos, function (i, item) {

        tabla += " <tr id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.REFERENCIA1 + "</td>";
        tabla += "<td>" + item.INMUEBLE + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
      
        tabla += "</tr>";

        totalcuota = (totalcuota + item.VLRCUOTA);
        totalsaldo = (totalsaldo + item.SALDOXCOBRAR);
        totalpago = (totalpago + item.PAGOCUOTA);
       
      
    });


    $("#Txtcuotas").text(utl.FormatNumero(totalcuota));
    $("#TxtPago").text(utl.FormatNumero(totalpago));
    $("#TxtSaldo").text(utl.FormatNumero(totalsaldo));

    tabla += "</tbody>";
    tabla += '</table>';
    $('#TblAcuerdos').append(tabla);

}

//acuerdos
BLLAcuerdosFox.TablaAcuerdosFox = function (acuerdos) {
    document.getElementById('TblAcuerdos').innerHTML = "";
    var tabla = '<table id="TblAcuerdosFox" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>No.Cuota</th>";
    tabla += "<th>Tipo</th>";
    tabla += "<th>Fecha</th>";
    tabla += "<th>Vlr cuota</th>";
    tabla += "<th>Pago cuota</th>";
    tabla += "<th>Saldo x cobrar</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";

    $.each(acuerdos, function (i, item) {

        tabla += " <tr id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.CODIGO + "</td>";
        tabla += "<td>" + item.CONCEPTO + "</td>";
        tabla += "<td>" + item.FECHACARTERA + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
        
    });
    tabla += "</tbody>";
    tabla += '</table>';


    $('#TblAcuerdos').append(tabla);
    $('#TblAcuerdosFox').dataTable();
}
//acuerdos
    BLLAcuerdosFox.TablaAcuerdoFoxCompromiso = function (acuerdos) {
        document.getElementById('TblAcuerdos').innerHTML = "";
        var tabla = '<table id="TblAcuerdosFox" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No.Cuota</th>";
        tabla += "<th>Tipo</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th>Vlr cuota</th>";
        tabla += "<th>Pago cuota</th>";
        tabla += "<th>Saldo x cobrar</th>";
        tabla += "<th>Compromiso</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";

        $.each(acuerdos, function (i, item) {
            var f = new Date();
            var d = f.getDate();
            if (d < 10) { d = "0" + d };
            var m = (f.getMonth());
            if (m < 10) { m = "0" + m };
            f = ( d + "/" + m + "/" + f.getFullYear());
            var f2 = item.FECHACARTERA;
            var izq = fLeft(f2, 2);
            var der = fRight(f2, 4);
            var med = fRight(fLeft(f2, 5), 2) -1;
            var izq1 = fLeft(f, 2);
            var der1 = fRight(f, 4);
            var med1 = fRight(fLeft(f, 5), 2);
            var date1 = new Date(der1, med1, izq1);
            var date2 = new Date(der, med, izq);

            tabla += " <tr id=" + item.REFERENCIA1 + ">";
            tabla += "<td>" + item.CODIGO + "</td>";
            tabla += "<td>" + item.CONCEPTO + "</td>";
            tabla += "<td>" + item.FECHACARTERA + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
            if (item.SALDOXCOBRAR == 0) {
                tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
            }else{
            if (date1 < date2) {
                tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/libre.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
            }
            else {
                tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/espera.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
            }
            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';


        document.getElementById('TblAcuerdos2').innerHTML = "";
        var tabla2 = '<table id="TblAcuerdosFox2" class="table table-striped table-bordered table-hover">';
        tabla2 += "<thead>";
        tabla2 += "<tr>";
        tabla2 += "<th>Select</th>";
        tabla2 += "<th>No.Cuota</th>";
        tabla2 += "<th>Tipo</th>";
        tabla2 += "<th>Fecha</th>";
        tabla2 += "<th>Vlr cuota</th>";
        tabla2 += "<th>Pago cuota</th>";
        tabla2 += "<th>Saldo x cobrar</th>";
        tabla2 += "<th>Compromiso</th>";
        tabla2 += "</tr>";
        tabla2 += "</thead>";
        tabla2 += "<tbody>";
        var totalpago = 0;
        var totalsaldo = 0;
        var totalcuota = 0;

        $.each(acuerdos, function (i, item) {
            var f = new Date();
            var d = f.getDate();
            if (d < 10) { d = "0" + d };
            var m = (f.getMonth());
            if (m < 10) { m = "0" + m };
            f = (d + "/" + m + "/" + f.getFullYear());
            var f2 = item.FECHACARTERA;
            var izq = fLeft(f2, 2);
            var der = fRight(f2, 4);
            var med = fRight(fLeft(f2, 5), 2) - 1;
            var izq1 = fLeft(f, 2);
            var der1 = fRight(f, 4);
            var med1 = fRight(fLeft(f, 5), 2);
            var date1 = new Date(der1, med1, izq1);
            var date2 = new Date(der, med, izq);
            
            tabla2 += " <tr id=" + item.CODIGO + " tag=" + item.REFERENCIA1 + ">";
            
            tabla2 += "<td><input type='checkbox'/> <a class='Detallett2' id=" + item.CODIGO + "></a></td>";
            tabla2 += "<td style='width:200px'> <a >" + item.CODIGO + "</a></td>";
            tabla2 += "<td>" + item.CONCEPTO + "</td>";
            tabla2 += "<td>" + item.FECHACARTERA + "</td>";
            tabla2 += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
            tabla2 += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
            tabla2 += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
            if (item.SALDOXCOBRAR == 0) {
                tabla2 += "<td ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
            } else {
                if (date1 < date2) {
                    tabla2 += "<td ><img src='" + funcionUrlGlobal('/images_crm/libre.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
                }
                else {
                    tabla2 += "<td ><img src='" + funcionUrlGlobal('/images_crm/espera.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href=''/></td>";
                }
            }
            tabla2 += "</tr>";
            totalcuota = (totalcuota + item.VLRCUOTA);
            totalsaldo = (totalsaldo + item.SALDOXCOBRAR);
            totalpago = (totalpago + item.PAGOCUOTA);

        });
        $("#Txtcuotas").text(utl.FormatNumero(totalcuota));
        $("#TxtPago").text(utl.FormatNumero(totalpago));
        $("#TxtSaldo").text(utl.FormatNumero(totalsaldo));

        tabla2 += "</tbody>";
        tabla2 += '</table>';



        $('#TblAcuerdos2').append(tabla2);
        $('#TblAcuerdos').append(tabla);
        $('#TblAcuerdosFox').dataTable();
    }


