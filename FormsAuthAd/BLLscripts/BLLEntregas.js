

function BLLEntregas() {

    var WsProgramacionEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasPor");///Listado de clientes

    BLLEntregas.prototype.ListProgramacionEntregas = function () {
       
        $.ajax({
            type: "POST", url: WsProgramacionEntregas,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLEntregas.CrearTabla(result.d)
                }
                else {
                    BLLEntregas.CrearTabla(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }


    //Tabla de Cliente
    BLLEntregas.CrearTabla = function (clientes) {
        document.getElementById('TablaProgramacion').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th>Dir Obra</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.CONSECUTIVO + "</td>";
            tabla += "<td>" + item.ID_PROYECTO + "</td>";
            tabla += "<td>" + moment(item.FECHAREG).format("YYYY/DD/MM"); + "</td>";
            tabla += "<td>" + item.DIROBRA + "</td>";
            
            if (item.ENVIADO == null) {
                tabla += "<td style='width:20px;height: 20px' class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
            } else {
                tabla += "<td style='width:20px;height: 20px' class='Info'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
            }
           

          ;
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaProgramacion').append(tabla);
        $('#example2').dataTable();

    }


}

