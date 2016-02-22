
var t = new BLLTrabajadores();

function BLLUser() {

    var JsTrabajador = null;
    var usrship = null;
    var ctx = null;

    var WsUSerActived = funcionUrlGlobal("/Servicios/WServidores.asmx/LisUser");//Retorna listas de usuarios del dominio

    var WInsertUser = funcionUrlGlobal("/Servicios/WServidores.asmx/InsertUser");//Servicio para cargar usuario a la base de datos CRM

    var WInsertUserShip = funcionUrlGlobal("/Servicios/WServidores.asmx/InsertUserShip");//Servicio para cargar usuario a la base de datos memberShip

    var WgetUserMShip = funcionUrlGlobal("/Servicios/WServidores.asmx/GetUSerShip");//Servicio para cargar usuario a la base de datos memberShip

    var WInsertRol = funcionUrlGlobal("/Servicios/WServidores.asmx/InsertRol");//Servicio para crear un rol en membership

    var WLisroles = funcionUrlGlobal("/Servicios/WServidores.asmx/LisRoles");//Retorna listado roles creados en el sistema
    
    var Wasinarpermiso = funcionUrlGlobal("/Servicios/WServidores.asmx/AsignarPermiso");//Asignar permisos a usuarios del sistema

    var WAcesosUser = funcionUrlGlobal("/Servicios/WServidores.asmx/ListAcceso");

    var WDeleteAcceso = funcionUrlGlobal("/Servicios/WServidores.asmx/RemoveAcceso");

    BLLUser.prototype.AccesoUser = function (usuario) {
        jsondata = "{'user':" + JSON.stringify(usuario) + "}";
        $.ajax({
            type: "POST", url: WAcesosUser, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === true)
                {
                    BLLUser.CrearTablaShipAcc(result.d,usuario);
                }
                else
                {
                    BLLUser.CrearTablaShipAcc(result.d,usuario);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLUser.prototype.AsignarPermisos = function (usuario, rol) {
        jsondata = "{'user':"+JSON.stringify(usuario)+",'rol':"+JSON.stringify(rol)+"}";
        $.ajax({
            type: "POST", url: Wasinarpermiso,data:jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === true) {
                    toastr.success('CRM Mayales - Notificacion' +
                    '</br>Se ha asignados al usuario acceso al modulo'+"  "+ rol +"  "+' de manera manera exitosa');
                }
                else
                {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> El usuario ya tiene acceso al modulo.');
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLUser.prototype.DeleteAccesoU = function (usuario, rol) {
        jsondata = "{'user':" + JSON.stringify(usuario) + ",'rol':" + JSON.stringify(rol) + "}";
        $.ajax({
            type: "POST", url: WDeleteAcceso, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === true)
                {
                    toastr.success('CRM Mayales - Notificacion' +
                    '</br>Se ha removido el acceso al usuario al modulo'+rol);
                }
                else
                {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br> No fue pisblie llevar a cabo el proceso.');
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLUser.prototype.getUser = function () {
        $.ajax({
            type: "POST", url: WsUSerActived,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('Tablauser').innerHTML = "";
                } else {
                    BLLUser.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLUser.prototype.getRoles = function (op) {
        $.ajax({
            type: "POST", url: WLisroles,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null)
                {
                    document.getElementById('roles').innerHTML = "";
                }
                else
                {
                    BLLUser.CrearRol(result.d,op);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }
   //Metodo para crear Rol en sistema
    BLLUser.prototype.InsertRol = function (rol) {
        JsonData = "{'r':"+JSON.stringify(rol)+"}";
        $.ajax({
            type: "POST", url: WInsertRol,data:JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === false) {
                    $('#Txtrol').val("");
                    toastr.error('CRM  Mayales - Notifiacion' +
                   "</p>" + 'ya existe un rol con el mismo nombre registrado en el sistema');
                }
                else
                {
                    $('#Txtrol').val("");
                    toastr.success('CRM  Mayales' +
                   "</p>" + 'el rol fue creado de manera exitosa');
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLUser.CrearTabla = function (clientes) {
        document.getElementById('Tablauser').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Usuario</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.name + "</td>";
            tabla += "<td style='width:20px;heig'><button id='" + item.user + " /" + item.name + "'class='btn btn-success btn-xs User' type='button'>Cargar Usuario</button></button></td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#Tablauser').append(tabla);
        $('#example2').dataTable();
    }

    BLLUser.CrearRol = function (roles,op) {
       
        switch (op) {
            case 0:
                document.getElementById('roles').innerHTML = "";
                var tabla = '<table id="exampleRol" class="table table-striped table-bordered table-hover">';
                tabla += "<thead>";
                tabla += "<tr>";
                tabla += "<th>Nombre de Rol</th>";
                tabla += "</tr>";
                tabla += "</thead>";
                tabla += "<tbody>";
                $.each(roles, function (i, item) {
                    tabla += " <tr>";
                    tabla += "<td>" + item.roles + "</td>";
                    tabla += "</tr>";
                });
                tabla += "</tbody>";
                tabla += '</table>';
                $('#roles').append(tabla);
                $('#exampleRol').dataTable();
                break
            case 1:
                document.getElementById('rolesR').innerHTML = "";
                var tabla = '<table id="exampleRoles" class="table table-striped table-bordered table-hover">';
                tabla += "<thead>";
                tabla += "<tr>";
                tabla += "<th>Nombre de Rol</th>";
                tabla += "<th></th>";
                tabla += "</tr>";
                tabla += "</thead>";
                tabla += "<tbody>";
                $.each(roles, function (i, item) {
                    tabla += " <tr>";
                    tabla += "<td>" + item.roles + "</td>";
                    tabla += "<td style='width:20px;heig'><button id='" + item.roles + " 'class='btn btn-success btn-xs permiso' type='button'>Asignar</button></button></td>";
                    tabla += "</tr>";
                });
                tabla += "</tbody>";
                tabla += '</table>';
                $('#rolesR').append(tabla);
                $('#exampleRoles').dataTable();
            break

        }
    }

    // Metodo para crear usuario
    BLLUser.prototype.CrearUser = function (user) {
        jsonData = "{ 'u':" + JSON.stringify(user) + " }";
        $.ajax({
            type: "POST", url: WInsertUser,data:jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                switch (result.d) {
                    case 1:  
                        t.InserTrabajador(JsTrabajador);
                        setTimeout(function () {BLLUser.createUserShip()},2000)
                        break
                    case 2:
                        JsTrabajador = null;
                        toastr.error(' CRM - Mayales Notificacion'
                            + '</br>El usuario que intenta cargar na se encuentra registrado en el sistema..');
                       break
                }
            },
            error: function (error) { alert(error.responseText); }
        });

    }

    ///Pasar datos para registra trabajador
    BLLUser.prototype.DtoTrabajador = function (trabajador) {
        JsTrabajador = trabajador;
    }

    BLLUser.prototype.DtoShip = function (usuario) {
        usrship = usuario;
        BLLUser.createUserShip();
        
    }

    //Metodo para crear usuario en membership
    BLLUser.createUserShip = function () {
        jsonData = "{'u':" + JSON.stringify(usrship) + "}"
        $.ajax({
            type: "POST", url: WInsertUserShip, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d==0)
                {
                    usrship = null;
                    toastr.error('CRM Mayales - Notificacion' +
                     '</br> El usuario que intenta registrar ya se encuentra almacenado en el sistema');
                }
                else
                {
                    t.InserTrabajador(JsTrabajador);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    // Metodo para Caragar usuario de memberShip
    BLLUser.prototype.GetUSerShip = function () {
        $.ajax({
            type: "POST", url: WgetUserMShip,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('TablaUSerShip').innerHTML = "";
                }
                else
                {
                    BLLUser.CrearTablaShip(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLUser.CrearTablaShip = function (user) {
        document.getElementById('TablaUSerShip').innerHTML = "";
        var tabla = '<table id="Membership" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Usuario</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(user, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.user + "</td>";
            tabla += "<td >";
            tabla += "<button id='" + item.user + " /" + item.user + "'class='btn btn-success btn-xs asigroles' type='button'>Asignar permiso</button></button>";
            tabla += "<button id='" + item.user + " /" + item.user + "'class='btn btn-danger btn-xs Removerrol' type='button'>Eliminar</button></button>";
            tabla +="</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaUSerShip').append(tabla);
        $('#Membership').dataTable();
    }

    BLLUser.CrearTablaShipAcc = function (rol,user) {
        document.getElementById('DataAcceso').innerHTML = "";
        var tabla = '<table id="MembersipAcce" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Usuario</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(rol, function (i, item) {
            tabla += " <tr>";
            tabla += "<td class='deleteAccesoS' id=" + item.roles + "/" + user + ">" + item.roles + "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#DataAcceso').append(tabla);
        $('#MembersipAcce').dataTable();
    }

}


//BLLUser.property = {

//    getUser: function () {

//    }
//}