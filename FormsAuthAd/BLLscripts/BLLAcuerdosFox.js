
function BLLAcuerdosFox() {

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

            tabla += " <tr id=" + item.REFERENCIA1 + ">";
            tabla += "<td>" + item.CODIGO + "</td>";
            tabla += "<td>" + item.CONCEPTO + "</td>";
            tabla += "<td>" + item.FECHACARTERA + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.VLRCUOTA) + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.PAGOCUOTA) + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.SALDOXCOBRAR) + "</td>";
            tabla += "<td><img src= '" + funcionUrlGlobal('/images_crm/libre.png') + "' tag=" + item.CODIGO + "  class='Detallett1' id=" + item.REFERENCIA1 + " href='' /></td>";
        });
        tabla += "</tbody>";
        tabla += '</table>';


        $('#TblAcuerdos').append(tabla);
        $('#TblAcuerdosFox').dataTable();
    }