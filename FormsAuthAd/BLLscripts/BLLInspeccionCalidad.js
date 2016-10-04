//sdsd

function BLLInspeccionCalidad() {

    var WsAmbientes = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasPor");///Listado de clientes




    BLLEntregas.prototype.ListAmbiente = function () {

       // jsonData = "{'b':" + JSON.stringify(p) + ",'lista':" + JSON.stringify(lista) + "}";
        $.ajax({

            type: "POST", url: WsAmbientes, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
               
                    BLLEntregas.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }





    BLLEntregas.CrearTabla = function (ambientes) {
        document.getElementById('TablaAmbientes').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(ambientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Ambiente + "</td>";
            


          

            if (item.ENVIADO == null) {
                tabla += "<td style='width:22px'><button id='" + item.ID_ENTREGAS + "'class='btn btn-success btn-xs enviar' type='button'>Enviar</button></td>";

                tabla += "<td style='width:20px;height: 20px' class='desistir' id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
            } else {
                tabla += "<td></td>"
                tabla += "<td style='width:20px;height: 20px' tag='" + moment(item.ENVIADO).format("YYYY-DD-MM") + "/" + item.ENVIADOA + "/" + item.ENVIADOPOR +
                       "/" + item.ID_PROYECTO + "/" + moment(item.FECHAREG).format("YYYY-DD-MM") + "/" + item.DIROBRA + "/" + item.CONSECUTIVO + "'class='Info'id=" + item.ID_ENTREGAS + " ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";

            };
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaAmbientes').append(tabla);
        $('#example2').dataTable();

    }


}

