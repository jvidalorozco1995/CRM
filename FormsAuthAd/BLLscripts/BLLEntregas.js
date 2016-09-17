

function BLLEntregas() {

    var WsProgramacionEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasPor");///Listado de clientes
    var WsProgramacionProyectos = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListInmueblesEntregasproyecto");///Listado de clientes
    
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

    BLLEntregas.prototype.ListInmueblesProyecto = function (p) {

        jsonData = "{ 'p':" + JSON.stringify(p) + " }"
   
        $.ajax({
            type: "POST", url: WsProgramacionProyectos, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLEntregas.CrearTablaInmuebles(result.d)
                }
                else {
                    BLLEntregas.CrearTablaInmuebles(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    

    BLLEntregas.CrearTablaInmuebles = function (clientes) {
        document.getElementById('tablainmuebles').innerHTML = "";
        var tabla = '<table id="esd" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Manzana</th>";
        tabla += "<th>Inmueble</th>";
     
  
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.ID_INMUEBLES_ENTREGAS + "</td>";
            tabla += "<td>" + item.NOMBRE_BLO + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
         
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablainmuebles').append(tabla);
        $('#esd').dataTable();

    }
    




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
                tabla += "<td style='width:22px'><button id='" + item.ID_PROYECTO + "'class='btn btn-success btn-xs separar' type='button'>Enviar</button></td>";

                tabla += "<td style='width:20px;height: 20px' class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
            } else {
                tabla += "<td></td>"
                tabla += "<td style='width:20px;height: 20px' class='Info'id=" + item.ID_PROYECTO +"><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
               
            }
           

          ;
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaProgramacion').append(tabla);
        $('#example2').dataTable();

    }


}

