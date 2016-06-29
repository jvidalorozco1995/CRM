function BLLDocumentosTramites() {




    BLLDocumentosTramites.prototype.ListDocumentos = function (actividad, Wsurl) {

        jsonData = "{ 'b':" + JSON.stringify(actividad) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {


                    BLLDocumentosTramites.prototype.TablaDocumentos(result.d);
                }
                else {
                    BLLDocumentosTramites.prototype.TablaDocumentos(result.d);

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }



    //Tabla de Bancos Traidos de MultiFox
    BLLDocumentosTramites.prototype.TablaDocumentos = function (documentos) {



        document.getElementById('Tabladocumentos').innerHTML = "";
        var tabla = '<table id="documentos" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";

        tabla += "<th>Documento</th>";

        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(documentos, function (i, item) {

            tabla += "<tr>";
            tabla += "<td >" + item.Nombre + "</td>";
            if (item.Documento == null)
            {
                tabla += "<td style='width:120px;height: 20px'>"
                 + "<div class='row'>"
                     + "<div class='col-sm-9'>"
                         + "<input type='file' name='UploadFile' accept='.pdf,.docx'  id=" + item.Id + " class='subirfile' title='Detalle de separacion'/>"
                     + "</div>"
                     + "<div class='col-sm-3'>"
                        + "<button id='" + item.Id + "' class='btn btn-success btn-xs RemoverP' type='button'>Subir</button>"
                     + "</div>"
                 + "</div>"
                 + "</td>";
                tabla += "<td></td>"
            } else
            {
                tabla += "<td>" + item.Documento + "</td>";
                tabla += "<td style='width:120px;height: 20px'>";
                tabla += '<button type="button" onclick = "return confirm("Deseas eliminar esto?");" id="' + item.Id + '"class="btn btn-danger btn-xs vertical-date pull-right QuitarDocu"> Quitar </button>'
                tabla += '<button type="button" id="' + item.Id + '"class="btn btn-success btn-xs vertical-date pull-right EditarDocu"> Ver </button>'
                tabla += "</td>";
            }
           
        
            tabla += "</tr>";
            ///images/cancel.png

        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tabladocumentos').append(tabla);
        $('#documentos').dataTable();
    };
}