


var BLLSeguiNegocios = function () {

};


//tabla para cargar los negocios al modulo de cartera, que tengan acuerdos vencidos o por vencer
BLLSeguiNegocios.CrearTabl = function (proyectos) {

    document.getElementById('TblNegociosComp').innerHTML = "";
    var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>BLOQUE</th>";
    tabla += "<th>CEDULA</th>";
    tabla += "<th>NOMBRE CLIENTE</th>";
    tabla += "<th>CELULAR</th>";
    tabla += "<th>TELEFONO EMPRESA</th>";
    tabla += "<th>FECHA CARTERA</th>";
    tabla += "<th>ESTADO</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(proyectos, function (i, item) {

        tabla += "<tr>";
        tabla += "<td>" + item.NOMBREBLOQUE + "</td>";
        tabla += "<td>" + item.CEDULA_P + "</td>";
        tabla += "<td>" + item.NOMBRECLIENTE + "</td>";
        tabla += "<td>" + item.TELEFONO_P + "</td>";
        tabla += "<td>" + item.TELFONO_EMP + "</td>";
        tabla += "<td>" + item.FECHACARTERA + "</td>";
        switch (item.ESTADO) {
            case "VE":
                tabla += "<td><img src='images_crm/Suspendido.png' tag="+item.CEDULA_P+"  class='Detallett' id=" + item.REFERENCIA1 + " href='' /></td>";
                break
            case "PV":
                tabla += "<td><img src='images_crm/pv.png' tag=" + item.CEDULA_P + " class='Detallett' id=" + item.REFERENCIA1 + " href=''/></td>";
                break
            case "ES":
                tabla += "<td><img src='images_crm/libre.png' tag=" + item.CEDULA_P + " class='Detallett' id=" + item.REFERENCIA1 + " href=''/></td>";
                break
            case null:
                tabla += "<td></td>";
                break

        }
     });
    tabla += "</tbody>";
    tabla += "</table>";
    $('#TblNegociosComp').append(tabla);
    $('#exampleP').dataTable();
}

 
BLLSeguiNegocios.prototype = {

    ListNegocios: function (Wsurl,Proyecto) {
        var jsonData = "{ 'c':" + JSON.stringify(Proyecto) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d == null) {

                }
                else {
                   
                    BLLSeguiNegocios.CrearTabl(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    },
}