var BLLPagosFox = function () {

};
var WAPagosNegocio = "/Servicios/WPagosFox.asmx/pagosFox"
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

BLLPagosFox.TablaPagosNegocio = function (acuerdos) {
    document.getElementById('pagosFox').innerHTML = "";
    var tabla = '<table id="pagos" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Recibo No.</th>";;
    tabla += "<th>Fecha de recibo</th>";
    tabla += "<th>VLR RECIBO</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(acuerdos, function (i, item) {
        console.log(item.FECHACARTERA);
        tabla += " <tr class='CargarPagos' id=" + item.REFERENCIA1 + ">";
        tabla += "<td>" + item.Nrecibo + "</td>";
        tabla += "<td>" + item.Fecharecibo + "</td>";
        tabla += "<td>" + item.Vlrrecibo + "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += '</table>';
    $('#pagosFox').append(tabla);
    $('#pagos').dataTable();
}
