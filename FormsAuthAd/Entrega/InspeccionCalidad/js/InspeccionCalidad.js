


//DSDasas
var Insp = new BLLInspeccionCalidad();
 

var admRevision = (function () {
    var Ambiente;
    var id;
    var idItemEditar;
    var ItemNombreEditar;

    var _addHandlers = function () {

        $("#BtnModalCrearAmbiente").click(function () {
           
            $("#ModalCrearAmbiente").modal('show');
            $("#TxtNombreAmbiente").val('');
            $("#BtnregisAmbiente").show();
            $("#BtnEditarAmbiente").hide();
            
        });
        
        $("#BtnModalCrearItem").click(function () {

            $("#ModalCrearItem").modal('show');
            $("#TxtNombreItem").val('');
            $("#BtnregisItem").show();
            $("#BtnEditarItem").hide();

        });

        $(document).on('click', '.Subir', function () {
            var rrt = $(this).attr("id");
            var a = JSON.parse(rrt);

            var Objeto ={
                "Id":a.Id,
                "IdAmbiente":a.Idambiente,
                "IdItem":0,
                "Consecutivo":a.Consecutivo - 1,
            }

            Insp.UpdatePosicionItemXambiente(Objeto);

            setTimeout(function () {

                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);

        });


        
        $(document).on('click', '.EditarItem', function () {
            var datos = $(this).attr("id");
            var result = datos.split("/");
             idItemEditar = result[0];
             ItemNombreEditar = result[1];


           
            $("#ModalCrearItem").modal('show');
            $("#BtnregisItem").hide();
            $("#BtnEditarItem").show();
            $("#TxtNombreItem").val(ItemNombreEditar);
          
        });

        $(document).on('click', '.EditarAmbiente', function () {
            var datos = $(this).attr("id");
            var result = datos.split("/");
            id = result[0];
            Ambiente = result[1];
           
            $("#ModalCrearAmbiente").modal('show');
            $("#BtnregisAmbiente").hide();
            $("#BtnEditarAmbiente").show();
            $("#TxtNombreAmbiente").val(Ambiente);
        });

        $(document).on('click', '.Bajar', function () {
            var rrt = $(this).attr("id");
            var a = JSON.parse(rrt);

            var Objeto = {
                "Id": a.Id,
                "IdAmbiente": a.Idambiente,
                "IdItem": 0,
                "Consecutivo": a.Consecutivo + 1,
            }

            Insp.UpdatePosicionItemXambiente(Objeto);

            setTimeout(function () {

                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);
        });


        $(document).on('click', '.Guardar', function () {
            var IdItem = $(this).attr("id");
            

            var DtoItemXambiente = {

                'IdAmbiente': id,
                'IdItem': IdItem
            }
            Insp.AgregarItemXAmbiente(DtoItemXambiente);

            setTimeout(function () {

                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);
        });

        $(document).on('click', '.Quitar', function () {
            var idQuitar = $(this).attr("id");

            Insp.DeleteItemXambiente(idQuitar);
            setTimeout(function () {
                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);
        });
        
       
        $(document).on('click', '.ver', function () {

            var datos = $(this).attr("id");
            var result = datos.split("/");
            id = result[0];
            Ambiente = result[1];

            $("#Ambiente").text(Ambiente);
            Insp.ListItem(id);
            Insp.ListItemXambientes(id);
            $("#datos").show();
        });
       
        
        
        $("#BtnregisAmbiente").click(function () {
            
            if ($("#TxtNombreAmbiente").val().length > 0) {

                var DtoAmbiente = {

                    'Ambiente1': $("#TxtNombreAmbiente").val()
                }
                Insp.InsertarAmbiente(DtoAmbiente);
               
                setTimeout(function () {
                    Insp.ListAmbiente();
                }, 1000);
                $("#TxtNombreAmbiente").val('');
                $("#ModalCrearAmbiente").modal('hide');
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
           }
            
        });



        $("#BtnEditarAmbiente").click(function () {

            if ($("#TxtNombreAmbiente").val().length > 0) {

                var DtoAmbiente = {
                    'Id': id,
                    'Ambiente1': $("#TxtNombreAmbiente").val()
                }
                Insp.UpdateAmbiente(DtoAmbiente);

                setTimeout(function () {
                    Insp.ListAmbiente();
                }, 1000);
                $("#TxtNombreAmbiente").val('');
                $("#ModalCrearAmbiente").modal('hide');
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
            }

        });



        $("#BtnregisItem").click(function () {

            if ($("#TxtNombreItem").val().length > 0) {

                var DtoItem = {
                   
                    'item1': $("#TxtNombreItem").val()
                }
                Insp.InsertarItem(DtoItem);


                $("#TxtNombreItem").val('');
                $("#ModalCrearItem").modal('hide');

                if (id != null) {
                    setTimeout(function () {
                        Insp.ListItem(id);
                        Insp.ListItemXambientes(id);
                    }, 1000);
                }
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
            }

        });


        $("#BtnEditarItem").click(function () {

            if ($("#TxtNombreItem").val().length > 0) {

                var DtoItem = {
                    'Id': idItemEditar,
                    'item1': $("#TxtNombreItem").val()
                }
                Insp.UpdateItem(DtoItem);

                $("#TxtNombreItem").val('');
                $("#ModalCrearItem").modal('hide');
                setTimeout(function () {
                    Insp.ListItem(id);
                    Insp.ListItemXambientes(id);
                }, 1000);
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
            }

        });
        
        

    }

    var _Inicio = function () {

        $("#datos").hide();
        Insp.ListAmbiente();
        
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admRevision.init();
});




