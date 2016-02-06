
function BLLAcuerdosFox() {

}
var WsUrl = "/Servicios/AcuerdosFox.asmx/AcuerdosNegocio";


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
        tabla += "<td>" + item.VLRCUOTA + "</td>";
        tabla += "<td>" + item.PAGOCUOTA + "</td>";
        tabla += "<td>" + item.SALDOXCOBRAR + "</td>";
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
        tabla += "<td>" + item.VLRCUOTA + "</td>";
        tabla += "<td>" + item.PAGOCUOTA + "</td>";
        tabla += "<td>" + item.SALDOXCOBRAR + "</td>";
        tabla += "</tr>";

        totalcuota = (totalcuota + item.VLRCUOTA);
        totalsaldo = (totalsaldo + item.SALDOXCOBRAR);
        totalpago = (totalpago + item.PAGOCUOTA);
       
      
    });


    $("#Txtcuotas").text(totalcuota);
    $("#TxtPago").text(totalpago);
    $("#TxtSaldo").text(totalsaldo);

    tabla += "</tbody>";
    tabla += '</table>';
    $('#TblAcuerdos').append(tabla);

}


BLLAcuerdosFox.TablaAcuerdosFox = function (acuerdos) {
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
  
    $.each(acuerdos, function (i, item) {

        tabla += " <tr id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.REFERENCIA1 + "</td>";
        tabla += "<td>" + item.INMUEBLE + "</td>";
        tabla += "<td>" + item.VLRCUOTA + "</td>";
        tabla += "<td>" + item.PAGOCUOTA + "</td>";
        tabla += "<td>" + item.SALDOXCOBRAR + "</td>";
        tabla += "</tr>";

      

    });
    tabla += "</tbody>";
    tabla += '</table>';
    

    $('#TblAcuerdos').append(tabla);
    $('#TblAcuerdosFox').dataTable();
}