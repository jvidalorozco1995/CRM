function BLLAval() {
    
   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAval");
    var WsAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listambiente");
    


    BLLAval.prototype.Aval = function (referencia) {

        jsonData = "{ 'id':" + JSON.stringify(referencia) + " }";

        $.ajax({
            type: "POST", url: WsAval, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {
                 
                    $("#TxtRegistro").val(result.d[0].Registro);
                    $("#TxtProyecto").val(result.d[0].NOMBRE_PROYEC);
                    $("#TxtInmueble").val(result.d[0].INMUEBLE);
                    
                    

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.prototype.ListadoAmbientes = function () {

        $.ajax({
            type: "POST", url: WsAmbiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearAmbientes(result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.CrearAmbientes = function (ambientes) {
      var tabla =  document.getElementById('myTab1').innerHTML = "";

     //  tabla.innerHTML = "";
       
        $.each(ambientes, function (i, item) {
            if (i == 0) 
            {

                tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + item.Ambiente1 + "</a></li>";
               
            } else

            {
                tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + item.Ambiente1 + "</a></li>";

            }
           

        });
      /*  var tabla1 = document.getElementById('tabs').innerHTML = "";
        tabla1 += "<div id='" +1002+ "'class='tab-pane active'>"
        tabla1 += "JAJSJAJJAJJAJAJAJAAJJAAJAJAJAJAJAJJAJAJAJJAJJAJJA";
        tabla1 += "</div>";*/

        $('#myTab1').append(tabla);
      //  $('#tabs').append(tabla1);
                                  
    }



}