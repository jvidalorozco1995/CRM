function BLLAval() {
    
   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAvalAntes");
    var WsAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listambiente");
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listitemxambiente");

    
    var WsInsertarAval = funcionUrlGlobal("/Servicios/WAval.asmx/InsertAval");
    var WsListaItemAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListItemAval");


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


    BLLAval.prototype.ListadoAmbientes = function (accion,idaval) {

        if (accion == 1)
        {

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

        } else {
            jsonData = "{ 'id':" + JSON.stringify(idaval) + " }";
            $.ajax({
                type: "POST", url: WsListaItemAval, data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d != null) {



                        BLLAval.CrearTablaItemsActualizar(result.d);



                    } else {
                        toastr.error(' CRM - Notificacion' +
                            '</br>Ha habido un error en el sistema y no se ha podido guardar');

                    }

                },
                error: function (obj, error, objError) { alert(objError); }
            });

        }
    }

    BLLAval.CrearAmbientes = function (ambientes) {
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
                Crear(item);
                tabla1 += "</div>";
                tabla1 += "</div>";
            } else {

                tabla1 += "<div id='" + item.Id + "'class='tab-pane'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='Tablas ITEM" + item.Id + "'></div>";
                Crear(item)
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

    BLLAval.CrearTablaItems = function (nombreambiente, items) {

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

        $(".ITEM" + items[0].Idambiente).append(tabla);
        //$('#example3').dataTable();


    }



    BLLAval.CrearTablaItemsActualizar = function (items) {
        var tabla = document.getElementById('myTab1').innerHTML = "";
        var tabla1 = document.getElementById('tabs').innerHTML = "";

        var numero = 0;
         for (i = 0; i < items.length; i++) {
     
        

           
             if (i + 1 < items.length) {

                
                 if (items[i].Ambiente != items[i + 1].Ambiente) {

                     numero++;
                     if (numero == 1) {
                         tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";
                     } else {
                         tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";
                     }
                 }
             } else if (i + 1 == items.length) {

                 numero++;
                 tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";

             
             }
          
        }


         var numero2 = 0;
         for (i = 0; i < items.length; i++) {




             if (i + 1 < items.length) {


                 if (items[i].Ambiente != items[i + 1].Ambiente) {

                     numero2++;
                     if (numero2 == 1) {
                         tabla1 += "<div id='" + items[i].Id + "'class='tab-pane active'>"
                         tabla1 += "<div class='panel-body'>";
                         tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                         tabla1 += "<div id ='ITEM" + numero2 + "'></div>";


                         findValor(numero2, items, items[i].Ambiente)
                         tabla1 += "</div>";
                         tabla1 += "</div>";
                     } else {
                         tabla1 += "<div id='" + items[i].Id + "'class='tab-pane '>"
                         tabla1 += "<div class='panel-body'>";
                         tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                         tabla1 += "<div id ='ITEM" + numero2 + "'></div>";


                         findValor(numero2, items, items[i].Ambiente)
                         tabla1 += "</div>";
                         tabla1 += "</div>";
                     }
                 }
             } else if (i + 1 == items.length) {

                 numero2++;
                 tabla1 += "<div id='" + items[i].Id + "'class='tab-pane '>"
                 tabla1 += "<div class='panel-body'>";
                 tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                 tabla1 += "<div id ='ITEM" + numero2 + "'></div>";


                 findValor(numero2, items, items[i].Ambiente)
                 tabla1 += "</div>";
                 tabla1 += "</div>";


             }

         }

       
        $('#myTab1').append(tabla);
        $('#tabs').append(tabla1);

     


    }

    function findValor(numero,items, valor) {
        var array=[];
        $.each(items, function (i, item) {
            if (item.Ambiente == valor) {
                array.push(item);
            }
        });

        CrearActualizar(numero,array);
    }

 
    

    function CrearActualizar(numero,items) {
       var Clase = "ITEM" + numero;
        // document.getElementById("ITEM"+ numero).innerHTML = "";
         var tabla = '<table class="table table-striped table-bordered table-hover">';
         tabla += "<thead>";
         tabla += "<tr>";
         tabla += "<th>Consecutivo</th>";
         tabla += "<th>Ambiente</th>";
         tabla += "<th>Item</th>";
         tabla += "<th>Cumple</th>";
         tabla += "<th>Observaciones</th>";
         tabla += "<th>F.Compromiso</th>";
 
         tabla += "</tr>";
         tabla += "</thead>";
         tabla += "<tbody>";
         $.each(items, function (i, item) {
            
             tabla += " <tr>";
             tabla += "<td style='width:100px'>" + item.Numero + "</td>";
             tabla += "<td style='width:100px'>" + item.Ambiente + "</td>";
             tabla += "<td style=''>" + item.Item + "</td>";
             if (item.Cumple == 1) {
 
                 tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='1' checked> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0'>No<br></td>"
             } else {
 
                 tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='1'> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0' checked>No<br></td>"
 
             } tabla += "<td><input type='text' class='observaciones'></input></td>"
             tabla += "<td><input type='date' id='fechas" + item.Id + "' class='fechas form-control' disabled></input></td>"
             //   tabla += "<td></td>"
             // tabla += "<td><input type='radio' class='RAaprobacion" + item.Id + "' value='1'> Si<br><input type='radio' name='RAaprobacion' value='0'>No<br></td>"
 
             tabla += "</tr>";
             ///images/cancel.png
         });
         tabla += "</tbody>";
         tabla += "</table>";
         console.log(tabla);
         
       
         console.log(Clase);
         $("#"+Clase).append(tabla);
        //$('#example3').dataTable();*/
    }

    

}