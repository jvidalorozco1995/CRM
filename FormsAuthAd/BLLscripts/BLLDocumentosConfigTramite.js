function BLLDocumentosConfigTramite() {


    BLLDocumentosConfigTramite.prototype.DeleteDocumentos = function (Documento, Wsurl) {

        jsonData = "{ 'c':" + JSON.stringify(Documento) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {

                    toastr.success('CRM Mayales - Notificacion' +
                   '</br></br>Se elimino satisfactoriamente');
                }
                else {
                    toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>No fue posible eliminar');

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }
    
    BLLDocumentosConfigTramite.prototype.ListDocumentos = function (actividad, Wsurl) {

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


                    BLLDocumentosConfigTramite.prototype.TablaDocumentos(result.d);
                }
                else {
                    BLLDocumentosConfigTramite.prototype.TablaDocumentos(result.d);

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    BLLDocumentosConfigTramite.prototype.Documento = function (documento, Wsurl) {

        jsonData = "{ 'id':" + JSON.stringify(documento) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                  //  $("#TxtDocumento").val(result.d[0].Nombre);
                 
                }
                else {
                    $("#TxtDocumento").val(result.d[0].Nombre);

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }


    BLLDocumentosConfigTramite.prototype.UpdateDocumento = function (documento, Wsurl) {

        jsonData = "{ 'i':" + JSON.stringify(documento) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {

                    toastr.success('CRM Mayales - Notificacion' +
                   '</br></br>Se actualizo satisfactoriamente');
                }
                else {
                    toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>No fue posible actualizar');

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }



    BLLDocumentosConfigTramite.prototype.InsertDocumento = function (documento, Wsurl) {

        jsonData = "{ 'b':" + JSON.stringify(documento) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                  
                    toastr.success('CRM Mayales - Notificacion' +
                   '</br></br>Se registro satisfactoriamente');
                }
                else
                {
                    toastr.error('CRM Mayales - Notificacion' +
                  '</br></br>No fue posible guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLDocumentosConfigTramite.prototype.TablaDocumentos = function (documentos) {



        document.getElementById('TblListaDocumentos').innerHTML = "";
        var tabla = '<table id="documentos" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Codigo</th>";
       
        tabla += "<th>Nombre</th>";
      
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(documentos, function (i, item) {

            tabla += "<tr>";
            tabla += "<td >" + item.Id + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            tabla += "<td style='width:120px;height: 20px'>";
            tabla += '<button type="button" onclick = "return confirm("Deseas eliminar esto?");" id="' + item.Id + '"class="btn btn-danger btn-xs vertical-date pull-right QuitarDocu"> Quitar </button>'
            tabla += '<button type="button" id="' + item.Id + '"class="btn btn-success btn-xs vertical-date pull-right EditarDocu"> Editar </button>'
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