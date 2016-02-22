
var user = new BLLUser();
var gp = new BLLProyectos();


var admUser = (function () {

    var cedula = null;
    var proyecto = null;
    var Nom_user = null;
    var name = null;
    var userP = null;
    var rol=null;
    var op = 0;
    $('#BtnRol').hide(); 
    $('#PermisosPanel').hide();

    var WsListProyec =funcionUrlGlobal( "/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

    var WsLisTra = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");//Cosulto Trabajadores
    var WsAsigProyec = funcionUrlGlobal("/Servicios/WTrabajador.asmx/AsignarProyectos");

    var WsRemoverp = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/DeleteAcceso");
    var WsLisTp = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisTraProyectos");

    var _addHandlers = function () {

        $(document).on('click', '.Removerrol', function () {
            var ctx = $(this).attr("id");
            var dto = ctx.split("/");
            userP = dto[0];
            $('#AccesoShip').modal('show');
            user.AccesoUser(userP);
        });

        $(document).on('click', '.deleteAccesoS', function () {
            var ctx = $(this).attr("id");
            var dto = ctx.split("/");
            rol = dto[0];
            userP = dto[1];
            user.DeleteAccesoU(userP,rol);
            setTimeout(function () { user.AccesoUser(userP) }, 1000);
        });

        $(document).on('click', '.permiso', function () {
            var usuario = $('#user').val();
            var dtot = $(this).attr("id");
            user.AsignarPermisos(usuario, dtot);

        })

        $('#rol').click(function () {

            $('#BtnRol').show();
            document.getElementById("Principal").className = "col-lg-12";
            $('#PermisosPanel').hide();
        });

        $(document).on('click', '#usuarioms', function () {
            document.getElementById("Principal").className = "col-lg-12";
            $('#PermisosPanel').hide();
        });

        $(document).on('click', '.asigroles', function () {
            document.getElementById("Principal").className = "col-lg-7";
            $('#PermisosPanel').show();
            op = 1; var dtot = $(this).attr("id");
            var usuarios = dtot.split("/")
            $('#user').attr('readonly', true);
            $('#user').val(usuarios[0])
            user.getRoles(op);
        });

        $(document).on('click', '#proyasi', function () {
            $('#BtnRol').hide();
            document.getElementById("Principal").className = "col-lg-12";
            $('#PermisosPanel').hide();
            user.getUser();
        });

        $(document).on('click', '#asigp', function () { $('#BtnRol').hide(); });

        $('#BtnRol').click(function () {
            var rol = $('#Txtrol').val();
            if (rol === "")
            {
                toastr.error('CRM - Mayales Notifiacacion' +
                    '<br> Campo nombre del Rol se encuentra vacio verifique')
            }
            else
            { 
                user.InsertRol(rol);
                setTimeout(function () { user.getRoles(0); }, 1000)
            }
        })

        //Asignar Proyectos a trabajador MODAL
        $(document).on('click', '.Asignar', function () {
            gp.ListProyec(3, WsListProyec);
            $('#ModalAsignar').modal('show');
            var dtot = $(this).attr("id");
            var result = dtot.split('-');
            $('#TxtCodigo').val(result[0]);
            $('#TxtProyecto').val(result[1]);
        });

        //Asignar Proyectos al trabajador
        $(document).on('click', '.CargarPT', function () {
           cedula = $(this).attr("id");
           proyecto = $('#TxtCodigo').val();
           gp.AsignarProyecto(_Datos(proyecto,cedula), WsAsigProyec);
        })
        
        //Modal Remover Acceso
        $(document).on('click', '.Remover', function () {
            var dtot = $(this).attr("id");
            var result = dtot.split('-');
            $('#TxtCodigoT').val(result[0]);
            $('#ModalRemover').modal('show');
            $('#TxtProyectoT').val(result[1])
            proyecto = result[0];
            gp.LisTraProyecto(proyecto, WsLisTp);
        });

        //Remover acceso al proyecto
        $(document).on('click', '.Delete', function () {
            var dtot = $(this).attr("id");
            gp.RemoverAcceso(parseInt(dtot), WsRemoverp);
            setTimeout(function () { gp.LisTraProyecto(proyecto, WsLisTp) }, 1000);
        });
                
        //Cargar Usuario a la BD Traidos desde Active Directory 
        $(document).on('click', '.User', function () {
             var dtot = $(this).attr("id");
            datos = dtot.split("/");
            var dto2 = datos[0].split("@");
            Nom_user = dto2[0];
            name = datos[1];
            $('#Textusuario').val(Nom_user);
            $('#iduser').modal('show');
        })

        $(document).on('click', '#BtnCrearUser', function () {
            var em = $('#TxtEmail').val();
            var tp = $('#ComTipo').val();
           
            if (em.length < 1) {
                toastr.error(' CRM - Mayales' +
                       '</br>el compo email se encuentra vacio');
            }
            else
            {
                if (tp.length < 1) {
                    toastr.error(' CRM - Mayales' +
                           '</br>No selccionado un tipo de empleado');
                }
                else
                {
                    user.DtoShip(_DtoShip(Nom_user, Nom_user, ""));
                    user.DtoTrabajador(_dtoTrabajador(Nom_user, name,em,tp));
                }
            }
           
        });

        $(document).on('click', '#BtnTrabajador', function () {
            $('#iduser').modal('hide');
            $('#TxtEmail').val("");
            $('#ComTipo').val("");
        });

        $(document).on('click', '#BtnCancelar', function () {
            $('#ModalAsignar').modal('hide');
        });

        $(document).on('click', '#BtnCancelarP', function () {
            $('#ModalRemover').modal('hide');
        });



    };

    var _dtouser = function (usuario) {
        var user = {};
        user.NOM_USER = usuario;
        return user;
    }

    var _Datos = function (cedula, proyecto) {
        var pt = {};
        pt.trabajador = cedula;
        pt.proyecto = proyecto;
        return pt;
    }

    var _DtoShip = function (usuario, password, email) {
        var dtship = {};
        dtship.user = usuario;
        dtship.password = password;
        dtship.email = email;
        return dtship;
    }

    var _dtoTrabajador = function (usuario, nombre,email,tipo) {
        var t = {};
        t.T_cedula = usuario;
        t.nombres = nombre;
        t.email = email;
        t.tipo = tipo;
        return t;
    }

    var _ExportToExcel = function (mytblId) {
        var htmltable = document.getElementById(mytblId);
        var html = htmltable.outerHTML;
        window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
    }
    
    var _Inicio = function () {
        user.getUser();
        user.GetUSerShip();
        gp.ListTrabajadores(WsLisTra);
        user.getRoles(op);
      }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }

}());
$(document).ready(function () {
    admUser.init();
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": false,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "4000",
    };
})