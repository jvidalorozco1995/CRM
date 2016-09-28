//ASA
var utl = new BLLUtilidades();
var BLLPagosFox = function () {

};
var WAPagosNegocio = funcionUrlGlobal("/Servicios/WPagosFox.asmx/pagosFox");
BLLPagosFox.prototype.PagosFox = function (negocio) {
    jsonData = "{'n':" + JSON.stringify(negocio) + "}";
    $.ajax({
        type: "POST", url: WAPagosNegocio, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result.d === null) {

            }
            else {
               BLLPagosFox.TablaPagosNegocio(result.d);
            }

        },
        error: function (error) { alert(error.responseText); }
    })
}


BLLPagosFox.prototype.PagosFoxCompromisos = function (negocio) {
    jsonData = "{'n':" + JSON.stringify(negocio) + "}";
    $.ajax({
        type: "POST", url: WAPagosNegocio, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result.d === null) {

            }
            else {
                BLLPagosFox.TablaPagosCompromisos(result.d);
            }

        },
        error: function (error) { alert(error.responseText); }
    })
}


BLLPagosFox.TablaPagosCompromisos = function (acuerdos) {
    document.getElementById('pagosFox').innerHTML = "";
    var tabla = '<table id="pagos" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Recibo No.</th>";;
    tabla += "<th>Fecha de recibo</th>";
    tabla += "<th>Vlr Recibo</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(acuerdos, function (i, item) {

        tabla += " <tr class='CargarPagos' id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.Nrecibo + "</td>";
        tabla += "<td>" + item.Fecharecibo + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.Vlrrecibo) + "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += '</table>';
    $('#pagosFox').append("<label><strong>Pagos realizados</strong></label>");
    $('#pagosFox').append(tabla);
   // $('#pagos').dataTable();

}



BLLPagosFox.TablaPagosNegocio = function (acuerdos) {
    document.getElementById('pagosFox').innerHTML = "";
    var tabla = '<table id="pagos" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>RECIBO NO.</th>";;
    tabla += "<th>FECHA DE RECIBO</th>";
    tabla += "<th>VLR RECIBIDO</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(acuerdos, function (i, item) {
     
        tabla += " <tr class='CargarPagos' id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.Nrecibo + "</td>";
        tabla += "<td>" + item.Fecharecibo + "</td>";
        tabla += "<td>" + utl.FormatNumero(item.Vlrrecibo) + "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += '</table>';
    $('#pagosFox').append(tabla);
    $('#pagos').dataTable();



}
