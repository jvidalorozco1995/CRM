function BLLSala_Ventas() {

    var WAddsala = "/Servicios/WSala_Ventas.asmx/InsertSala";

    BLLSala_Ventas.prototype.AddSala = function (sala) {
        
        JsonData = "{'s':" + JSON.stringify(sala) + "}";
         $.ajax({
            type: "POST", url: WAddsala,data:JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0)
                {
                    toastr.error(' CRM - Mayales notificacion' +
                     '</br></br>Ya existe creada una sala de ventas con el mismo nombre a la que intenta registrar');
                }
                else
                {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Sala de ventas registrada de manera exitosa');
                    $('#Txtsala').val("");
                }

            },
            error: function (msg) {
                alert(msg.responseText);
            }
        });
    };

    BLLSala_Ventas.prototype.ListaSala = function (op, Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                switch (op) {
                    case 1:
                        var dataJson = eval(result.d);
                        if (dataJson == null)
                        {

                        }
                        else
                        {
                            $.each(dataJson, function (i, item) {
                                $('#CombSala').append('<option value=' + item.ID_SALA + '>' + item.NOMBRE_SALA + '</option>');
                            });
                        }
                        break
                    case 2:
                        BLLSala_Ventas.Tablasalas(result.d);
                        break

                }
            },
            error: function (msg) {
                alert(msg.responseText);
            }
        });
    }

    BLLSala_Ventas.Tablasalas = function (salas) {
        document.getElementById('salas').innerHTML = "";
        var tabla = '<table id="salav" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(salas, function (i, item) {
            tabla += " <tr>";
            tabla += " <td>";
            tabla += item.NOMBRE_SALA;
            tabla += "</td>";
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#salas').append(tabla);
        $('#salav').dataTable();
    };


}