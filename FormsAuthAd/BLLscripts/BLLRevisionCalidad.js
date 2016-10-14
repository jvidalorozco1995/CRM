
function BLLRevisionCalidad() {

    var WsRevisioncalidad = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasC");///Listado de clientes
 
    BLLRevisionCalidad.prototype.Listado = function () {
        $.ajax({
            type: "POST", url: WsRevisioncalidad,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d == null) {


                }
                else {
                    BLLRevisionCalidad.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }



    //Tabla de Cliente
    BLLRevisionCalidad.CrearTabla = function (usuarios) {
        document.getElementById('TablaPendientes').innerHTML = "";
        var tabla = '<table id="example344" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nro solicitud</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Manzana</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>F. config</th>";
        tabla += "<th>Aval</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";

        $.each(usuarios, function (i, item) {
            tabla += "<tr>";
            tabla += "<td><a class='infDetalle' id='" + item.ID_INMUEBLES_ENTREGAS + "'>" + item.ID_INMUEBLES_ENTREGAS + "</a></td>";
            tabla += "<td>" + item.NOMBRE_PROYEC + "</td>";
            tabla += "<td>" + item.MZA + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            tabla += "<td>" + moment(item.FECHACONFIRMA).format("YYYY/DD/MM")+"</td>";
            
            if (item.ESTADOAVAL == 0) {
               
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/libre.png') + "' id='" + item.ID_INMUEBLES_ENTREGAS + "/" + item.NOMBRE_PROYEC + "' class='ClienteS' title='Agregar a separacion'></img></td>";


            } else if (item.ESTADOAVAL == 1) {
              

                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/Espera.png') + "' id='" + item.ID_INMUEBLES_ENTREGAS + "/" + item.NOMBRE_PROYEC + "' class='ClienteS' title='Agregar a separacion'></img></td>";

            } else if (item.ESTADOAVAL == 2) {

                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "' id='" + item.ID_INMUEBLES_ENTREGAS + "/" + item.NOMBRE_PROYEC + "' class='ClienteS' title='Agregar a separacion'></img></td>";

            } else {
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/libre.png') + "' id='" + item.ID_INMUEBLES_ENTREGAS + "/" + item.NOMBRE_PROYEC + "' class='ClienteS' title='Agregar a separacion'></img></td>";

            }
         
            if (item.IdAval == null) {

                tabla += "<td style='width:22px'><button  id='" + item.REFERENCIA_INMUEBLE + "'class='btn btn-success btn-xs AVAL' type='button'>+ AVAL</button></td>";
                tabla += "<td style='width:22px'><a  id='" + item.REFERENCIA_INMUEBLE + "'class='btn btn-success btn-xs fa fa-clock '><i class='fa fa-clock-o'></i></a></td>";


            } else {

                tabla += "<td style='width:22px'><button tag='" + item.IdAval+ "' id='" + item.REFERENCIA_INMUEBLE + "'class='btn btn-danger btn-xs VERAVAL' type='button'>Ver</button></td>";
                tabla += "<td style='width:22px'><a  id='" + item.REFERENCIA_INMUEBLE + "'class='btn btn-success btn-xs fa fa-clock'><i class='fa fa-clock-o'></i></a></td>";

            }

            tabla += "</tr>";


        });


        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaPendientes').append(tabla);
        $('#example344').dataTable();

    }
  
}
