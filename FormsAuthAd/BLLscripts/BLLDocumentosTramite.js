function BLLDocumentosTramite() {
    BLLDocumentosTramite.prototype.ListDocumentos = function (actividad, Wsurl) {

        jsonData = "{ 'actividad':" + JSON.stringify(actividad) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {


                    BLLDocumentosTramite.prototype.TablaDocumentos(result.d);
                }
                else {
                    BLLDocumentosTramite.prototype.TablaDocumentos(result.d);

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLDocumentosTramite.prototype.TablaDocumentos = function (documentos) {



        document.getElementById('TblListaDocumentos').innerHTML = "";
        var tabla = '<table id="documentos" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Codigo</th>";
       
        tabla += "<th>Nombre</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(documentos, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TblListaDocumentos').append(tabla);
        $('#documentos').dataTable();
    };
}