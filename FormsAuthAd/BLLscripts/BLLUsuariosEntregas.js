
function BLLUsuariosEntregas() {

    var WsUsuarios = funcionUrlGlobal("/ServiciosFox/Wproyectos.asmx/LisProyectos");///Listado de clientes
    var WsUSerActived = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");//Retorna listas de usuarios del dominio


    BLLUsuariosEntregas.prototype.Listado= function () {
        $.ajax({
            type: "POST", url: WsUsuarios,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLUsuariosEntregas.CrearTabla(result.d);
                }
                else {
                    BLLUsuariosEntregas.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }


    BLLUsuariosEntregas.prototype.getUser = function () {
        $.ajax({
            type: "POST", url: WsUSerActived,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                  

                } else {
                    BLLUsuariosEntregas.CompenenteP(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }


   /* BLLUsuariosEntregas.prototype.ListbProyec = function (proyecto) {
        jsonData = "{ 'b':" + JSON.stringify(proyecto) + " }";
        $.ajax({
            type: "POST", url: Wsproyectos, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    $('#Mazanasb').html("")
                    $('#Mazanasb').append('<option></option>')
                } else {
                    $('#Mazanasb').html("")
                    $('#Mazanasb').append('<option></option>')
                    BLLUsuariosEntregas.CompenenteP(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }*/

    

    BLLUsuariosEntregas.CompenenteP = function (bloque) {
        for (var i = 0; i < bloque.length; i++) {
            var lista = '<option value=' + bloque[i]["T_CEDULA"] + '>';
            lista += bloque[i]["NOMBRES"];
            lista += '</option>'
            $(".Mazanasb").append(lista);
        }
    }

  
    //Tabla de Cliente
    BLLUsuariosEntregas.CrearTabla = function (clientes) {
        document.getElementById('Tablauser').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr >";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Usuario</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += "<tr>";
            tabla += "<td><a class='infDetalle' id='" + item.ID_PROYEC + "'>" + item.NOMBRE_PROYEC + "</a></td>";
            tabla += "<td><select class='Mazanasb'></select></td>";

            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#Tablauser').append(tabla);
        $('#example2').dataTable();
        BLLUsuariosEntregas.prototype.getUser();
    }
}
