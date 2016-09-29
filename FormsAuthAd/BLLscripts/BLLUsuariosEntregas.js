
function BLLUsuariosEntregas() {

    var WsUsuarios = funcionUrlGlobal("/Servicios/WResponsableCalidad.asmx/ListResponsableCalidad");///Listado de clientes
    var WsUSerActived = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");//Retorna listas de usuarios del dominio
    var WsUpdate = funcionUrlGlobal("/Servicios/WResponsableCalidad.asmx/UpdateResponsable");///Listado de clientes 
  

    BLLUsuariosEntregas.prototype.Listado= function () {
        $.ajax({
            type: "POST", url: WsUsuarios,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
         
            success: function (result) {
                if (result.d == null) {

                   
                }
                else {
                    BLLUsuariosEntregas.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLUsuariosEntregas.prototype.Update = function (b) {
        Jsondata = "{'b':" + JSON.stringify(b) + "}";
        $.ajax({
            type: "POST", url: WsUpdate,data:Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d == null) {

                    toastr.error('CRM Mayales - Notificacion' +
                       '</br></br>No se pudo actualizar en el sistema');
                }
                else {
                    toastr.success('CRM Mayales - Notificacion' +
                       '</br></br>Se actualizo de manera exitosa el usuario de entregas calidad en sistema');
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
           
            success: function (result) {
                if (result.d == null) {

                  

                } else {

       
                   
                    BLLUsuariosEntregas.CrearTablaUsuarios(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    

    BLLUsuariosEntregas.CompenenteP = function (bloque) {
        for (var i = 0; i < bloque.length; i++) {
            var lista = '<option value=' + bloque[i]["T_CEDULA"] + '>';
            lista += bloque[i]["NOMBRES"];
            lista += '</option>'
            $(".Mazanasb").append(lista);
        }
    }
    

     //Tabla de Cliente
    BLLUsuariosEntregas.CrearTabla = function (proyectos) {
        document.getElementById('Tablauser').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr >";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Usuario</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
       
        $.each(proyectos, function (i, item) {
            tabla += "<tr>";
            tabla += "<td>"+ item.Proyecto + "</td>";
        
            if (item.Usuario == null) {
                tabla += "<td>No hay un usuario asignado</td>";
            } else {
                tabla += "<td>"+ item.Usuario + "</td>";
            }
            tabla += "<td style='width:22px'><button type='button' tag='"+item.Id+"' id='" + item.Proyecto + "' class='actualizar btn btn-xs btn-success'>Modificar</button></td>";
            tabla += "</tr>";

           
        });
       
        
        tabla += "</tbody>";
        tabla += '</table>';
        $('#Tablauser').append(tabla);

        $('#example2').dataTable();
        
    }

  
  
        
    //Tabla de Cliente
    BLLUsuariosEntregas.CrearTablaUsuarios = function (usuarios) {
        document.getElementById('Tblusuarios').innerHTML = "";
        var tabla = '<table id="example344" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr >";
        tabla += "<th>Usuario</th>";
        tabla += "<th>Nombre</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";

        $.each(usuarios, function (i, item) {
            tabla += "<tr>";
            tabla += "<td><a class='infDetalle' id='" + item.T_CEDULA + "'>" + item.T_CEDULA + "</a></td>";

            tabla += "<td>" + item.NOMBRES + "</td>";
            tabla += "</tr>";


        });


        tabla += "</tbody>";
        tabla += '</table>';
        $('#Tblusuarios').append(tabla);

        $('#example344').dataTable();

    }
}
