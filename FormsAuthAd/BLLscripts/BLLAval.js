function BLLAval() {
    
   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAvalAntes");
    var WsAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listambiente");
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listitemxambiente");


    var WsInsertarAval = funcionUrlGlobal("/Servicios/WAval.asmx/InsertAval");

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
                    $("#TxtFinalAprob").val(result.d[0].FechaFinApro);
                    $("#TxtPropietario").val(result.d[0].NOMBRECLIENTE);
                    
                    
                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    BLLAval.prototype.InsertarAval = function (aval,itemAval) {


        jsonData = "{'b':" + JSON.stringify(aval) + ",'ItemAval':" + JSON.stringify(itemAval) + "}";
      

        $.ajax({
            type: "POST", url: WsInsertarAval, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Notificacion' +
                       '</br>Se ha guardado el aval satisfactoriamente');
                    setTimeout(function () {
                        window.location.replace("./../RevisionCalidad/WebRevisionCalidad.aspx");

                    }, 1000);

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    BLLAval.prototype.ListadoAmbientes = function (accion) {

        $.ajax({
            type: "POST", url: WsAmbiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {


                  
                        BLLAval.CrearAmbientes(result.d, accion);

                   
                    


                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.CrearAmbientes = function (ambientes,accion) {
        var tabla = document.getElementById('myTab1').innerHTML = "";
        var tabla1 = document.getElementById('tabs').innerHTML = "";
      
     //  tabla.innerHTML = "";
       
        $.each(ambientes, function (i, item) {
            if (i == 0) 
            {

                tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + 1 + "</a></li>";
               
            } else

            {
                tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + (i + 1)  + "</a></li>";

            }
           

       });

        $.each(ambientes, function (i, item) {
            if (i == 0) {
                tabla1 += "<div id='" + item.Id + "'class='tab-pane active'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='Tablas ITEM" + item.Id + "'></div>";
                if (accion == 1) {
                    Crear(item);
                } else {
                    Actualizar(item);
                }
                tabla1 += "</div>";
                tabla1 += "</div>";
            } else {

                tabla1 += "<div id='" + item.Id + "'class='tab-pane'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='Tablas ITEM" + item.Id + "'></div>";
                if (accion == 1) {
                    Crear(item)
                } else {
                    Actualizar(item);
                }
                tabla1 += "</div>";
                tabla1 += "</div>";
            }
           
        });

        $('#myTab1').append(tabla);
        $('#tabs').append(tabla1);
                                  
    }




    function Crear(item) {

        var datos = "{ 'id':" + JSON.stringify(item.Id) + " }";
        $.ajax({
            type: "POST", url: WsItems, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearTablaItems(item.Ambiente1, result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    function Actualizar(item) {

        var datos = "{ 'id':" + JSON.stringify(item.Id) + " }";
        $.ajax({
            type: "POST", url: WsItems, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearTablaItems(item.Ambiente1, result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    BLLAval.CrearTablaItems = function (nombreambiente,items) {
        
        document.getElementsByClassName("ITEM" + items[0].Idambiente).innerHTML = "";
        var tabla = '<table class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Consecutivo</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th>Item</th>";
        tabla += "<th>Cumple</th>";
        tabla += "<th>Observaciones</th>";
        tabla += "<th>F.Compromiso</th>";
     //   tabla += "<th>Recibo a satisfaci�n</th>";
      //  tabla += "<th>Aprobaci�n</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(items, function (i, item) {
           
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.Consecutivo + "</td>";
            tabla += "<td style='width:100px'>" + nombreambiente + "</td>";
            tabla += "<td style=''>" + item.Item + "</td>";
            tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='1'> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0'>No<br></td>"
            tabla += "<td><input type='text' class='observaciones'></input></td>"
            tabla += "<td><input type='date' id='fechas" + item.Id + "' class='fechas form-control' disabled></input></td>"
         //   tabla += "<td></td>"
           // tabla += "<td><input type='radio' class='RAaprobacion" + item.Id + "' value='1'> Si<br><input type='radio' name='RAaprobacion' value='0'>No<br></td>"
            
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
       
        $(".ITEM"+items[0].Idambiente).append(tabla);
        //$('#example3').dataTable();


    }

}