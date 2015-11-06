function BLLBloques() {

    var bloquesCRM = null;

    //Listado de Proyectos MultiFox
    BLLBloques.prototype.ListProyectosCRM = function (Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null)
                {
                    BLLBloques.CrearCompoenente(result.d);
                }
                else
                {
                    BLLBloques.CrearCompoenente(result.d);
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Listado de Bloques CRM
    BLLBloques.prototype.ListBloquesCRM = function (bloque, Wsurl, peticion) {
        jsonData = "{ 'b':" + JSON.stringify(bloque) + " }";
        switch (peticion) {
            case 1:
                $.ajax({
                    type: "POST", url: Wsurl, data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: true,
                    success: function (result) {
                        if (result.d == null) {
                            document.getElementById('TablaB').innerHTML = "";
                            BLLBloques.TablaBloquesCRM(result.d);
                        } else {
                            BLLBloques.TablaBloquesCRM(result.d);
                            bloquesCRM = result.d;
                        }

                    },
                    error: function (obj, error, objError) { alert(obj.responseText); }
                });
                break
            case 2:
                $.ajax({
                    type: "POST", url: Wsurl, data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: true,
                    success: function (result) {
                        if (result.d == null) {
                            $('#CombBloques').html("")
                        } else {
                            $('#CombBloques').html("")
                            BLLBloques.CrearCompoenenteCRM(result.d);
                        }

                    },
                    error: function (obj, error, objError) { alert(obj.responseText); }
                });
                break

        }


    }

    //cargar Bloques a Crm;
    BLLBloques.prototype.InsertBloque = function (bloque, Wsurl) {
        jsonData = "{ 'b':" + JSON.stringify(bloque) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0)
                {
                    toastr.error(' CRM - Mayales no se pudo llevar acabo el proceso Posibles Causas' +
                     "</p>" + '1:El bloque que intenta cargar al sistema ya existe en el sistema');
                }
                else
                {
                    toastr.success(' CRM - Mayales' +
                        '<br/>Se ha agregado de manera exitosa el bloque en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    ///Crear Companente de Proyectos cargargados
    BLLBloques.CrearCompoenente = function (proyectos) {
        $.each(proyectos, function (i, item) {
            var combo = '<option value=' + item.ID_PROYEC + '>' + item.NOMBRE_PROYEC + '</option>';
            $('#CombProyectos').append(combo);
        })

    }

    //componenete para cargar Combo bloques
    BLLBloques.CrearCompoenenteCRM = function (bloques) {
        $.each(bloques, function (i, item) {
            var combo = '<option value=' + item.ID_BLOQUE + '>' + item.NOMBRE_BLO + '</option>';
            $('#CombBloques').append(combo);
        })
    }

    //Retorna una lista de Bloques de MultiFox
    BLLBloques.prototype.ListBloquesFox = function (Wsurl, proyecto) {
        jsonData = "{ 'p':" + JSON.stringify(proyecto) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLBloques.TablaBloques(result.d);
                }
                else
                {
                    BLLBloques.TablaBloques(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bloques Traidos de MultiFox
    BLLBloques.TablaBloques = function (bloques) {
        document.getElementById('Tabla').innerHTML = "";
        var tabla = '<table id="example3" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cod_Bloque</th>";
        tabla += "<th>Bloque</th>";
        tabla += "<th>Sector</th>";
        tabla += "<th>Cargar</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(bloques, function (i, item) {
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.ID_BLOQUE + "</td>";
            tabla += "<td>" + item.PROYECTO_SET + "</td>";
            tabla += "<td>" + item.NOMBRE_SET + "</td>";
            tabla += "<td style='width:20px;'>"
            tabla += "<button id='" + item.ID_BLOQUE + '/' + item.PROYECTO_SET + '/' + item.NOMBRE_SET + "' class='btn btn-success btn-xs CargarB' type='button'>Cargar</button>";
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tabla').append(tabla);
        $('#example3').dataTable();
    };

    //Tabla de Bloques Traidos de CRM
    BLLBloques.TablaBloquesCRM = function (bloques) {
        document.getElementById('TablaB').innerHTML = "";
        var tabla = '<table id="example4" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cod_Bloque</th>";
        tabla += "<th>Bloque</th>";
        tabla += "<th>Sector</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(bloques, function (i, item) {
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.ID_BLOQUE + "</td>";
            tabla += "<td>" + item.BLOQUE_CODI + "</td>";
            tabla += "<td>" + item.NOMBRE_BLO + "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TablaB').append(tabla);
        $('#example4').dataTable();
    };
}