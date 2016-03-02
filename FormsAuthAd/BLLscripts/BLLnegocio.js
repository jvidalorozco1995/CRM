var Wcliente = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/cliente");
var WclienteAsociado = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_getAsociado");


var _Dto="";
var val_casa = 0.0;
var inicial = 0.0;
var credito = 0.0;
var pagosf=[];
var date = new Date();
var dia = date.getDate();
var año = date.getFullYear();
var mes = date.getMonth() + 1;
if (dia < 10) { dia = '0' + dia }
if (mes < 10) { mes = '0' + mes }
fecha = año + "/" + mes + "/" + dia;
var acierdop = [];
_http = new HttpBll();
var utl = new BLLUtilidades();
var BLLnegocio = function () {

};
var Waddnegocio = funcionUrlGlobal("/Servicios/WNegocio.asmx/DatoNegocio");
var _banco;



//tabla para cargar los negocios al modulo de cartera
BLLnegocio.CrearTabl = function (proyectos) {

    document.getElementById('TblNegocios').innerHTML = "";
    var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>CODIGO CRM</th>";
    tabla += "<th>MANZANA O BLOQUE</th>";
    tabla += "<th>INMUEBLE</th>";
    tabla += "<th>CC</th>";
    tabla += "<th>PROPIETARIO</th>";
    tabla += "<th>ADJUNTO</th>";
    tabla += "<th>ESTADO</th>";
   // tabla += "<th>VER</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(proyectos, function (i, item) {
       
        tabla += "<tr>";
        tabla += "<td>" + item.CODIGOCRM + "</td>";
        if (item.Estado == 'CRM') {

            tabla += "<td style='width:200px'> <a class='limpiar' id=" + item.NEGOCIO + ">" + item.NOMBREBLOQUE + "</a></td>";
        }
        else {
            tabla += "<td style='width:200px'> <a class='CargarNego' id=" + item.NEGOCIO + ">" + item.NOMBREBLOQUE + "</a></td>";
        }
        tabla += "<td>" + item.CODIGOINMUEBLE + "</td>";
        tabla += "<td>" + item.CEDULA_P + "</td>";
        tabla += "<td>" + item.NOMBRECLIENTE + "</td>";
      
        
        if (item.DOCUMENTO != undefined && item.Estado == 'CRM')
        {

            tabla += "<td style='width:20px;'>";
            tabla += "<a class='btn btn-primary btn-xs' href='../Upload/" + item.DOCUMENTO + "'target='_blank'><span class='glyphicon glyphicon-cloud-download'></span> Ver</a>";
            tabla += "</td>";
            tabla += "<td>"
            tabla += "<a title='Este negocio no se ha cargado a multifox'><img src= '" + funcionUrlGlobal("/images_crm/Espera.png") + "' disabled/></a<";
            tabla += "</td>";
            
        }
         else if (item.Estado == 'CRM')
        {
             
             tabla += "<td style='width:20px; height:10px;'>";
             tabla += "<a href='#' id=" + item.CODIGOCRM + " class='btn btn-success btn-xs Modal'><span class='glyphicon glyphicon-upload'></span> Subir</a>";
             tabla += "</td>";
             tabla += "<td>"
             tabla += "<a title='Este negocio no se ha cargado a multifox'><img src='" + funcionUrlGlobal("/images_crm/Espera.png") + "' disabled/></a<";
             tabla += "</td>";
        }

        if (item.DOCUMENTO != undefined && item.Estado == 'FOX') {
            tabla += "<td style='width:20px;'>";
            tabla += "<a class='btn btn-primary btn-xs' href='../Upload/" + item.DOCUMENTO + "'target='_blank'><span class='glyphicon glyphicon-cloud-download'></span> Ver</a>";
            tabla += "</td>";
            tabla += "<td>"
            tabla += "<a title='Este negocio se encuentra en multifox'><img src='" + funcionUrlGlobal("/images_crm/fox.png") + "' style='width:22px; height:22px;'/></a<";
            tabla += "</td>";
           
        } else if (item.Estado == 'FOX') {

            tabla += "<td style='width:20px;'>";
            tabla += "<a href='#' id=" + item.CODIGOCRM + " class='btn btn-success btn-xs Modal'><span class='glyphicon glyphicon-upload'></span> Subir</a>";
            tabla += "</td>";
            tabla += "<td>"
            tabla += "<a title='Este negocio se encuentra en multifox'><img src='" + funcionUrlGlobal("/images_crm/fox.png") + "' style='width:22px; height:22px;'/></a<";
            tabla += "</td>";
           
        }
        if (item.DOCUMENTO != undefined && item.Estado == 'DESISTIDO') {

            tabla += "<td style='width:20px;'>";
            tabla += "<a class='btn btn-primary btn-xs' href='../Upload/" + item.DOCUMENTO + "'target='_blank'><span class='glyphicon glyphicon-cloud-download'></span> Ver</a>";
            tabla += "</td>";
            tabla += "<td>"
            tabla += "<a title='Este negocio esta desistido'><img src='" + funcionUrlGlobal("/images_crm/PV.png") + "' disabled/></a<";
            tabla += "</td>";
        }else  if (item.Estado == 'DESISTIDO') {

            tabla += "<td>No tiene Adjunto</td>";
            tabla += "<td>"
            tabla += "<a title='Este negocio esta desistido'><img src='" + funcionUrlGlobal("/images_crm/PV.png") + "' disabled/></a<";
            tabla += "</td>";
        }
        tabla += "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += "</table>";
    $('#TblNegocios').append(tabla);
    $('#exampleP').dataTable();
}

//tabla Proyectos CRM Asignar  Usuarios
BLLnegocio.CrearTablaPro = function (proyectos) {

    $("TxtInmueble");

    document.getElementById('Tabla2').innerHTML = "";
    var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>PROPIETARIO</th>";
    tabla += "<th>CODIGO_F</th>";
    tabla += "<th>USUARIO DE CARTERA</th>";
  
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(proyectos, function (i, item) {


        tabla += " <tr class='CargarNego' id=" + item.ID_HOJA + ">";
        tabla += "<td style='width:200px'>" + item.PROPIETARIO + "</td>";
        tabla += "<td>" + item.CODIGO_F + "</td>";
        tabla += "<td>" + item.USER_CARTERA + "</td>";
        tabla += "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += "</table>";
    $('#Tabla2').append(tabla);
    $('#exampleP').dataTable();
}

BLLnegocio.prototype = {

     ListNegocio: function (Wsurl, neg) {
   
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {

                    if (neg == "Admingestusu") {

                        BLLnegocio.CrearTablaPro(result.d)
                    }
                }
           },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
     },


     ListActualizarAdj: function (Wsurl, neg,adj) {
         var datos = "{'CodCRM':" + JSON.stringify(neg) + ",'Documento':" + JSON.stringify(adj) + "}";
         $.ajax({
             type: "POST", url: Wsurl, data:datos,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result) {
                 if (result.d == null) {

                 }
                 else {
                  
                     toastr.success(' CRM - Mayales' +
                        '<br/>Hoja de negocio Adjuntada');
                  
                 }
             },
             error: function (obj, error, objError) { alert(obj.responseText); }
         });
     },


     ListNegocioFOX: function (Wsurl, neg) {

         $.ajax({
             type: "POST", url: Wsurl,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result) {
                 if (result.d == null) {

                 }
                 else {

                     BLLnegocio.CrearTabl(result.d)
                    

                 }
             },
             error: function (obj, error, objError) { alert(obj.responseText); }
         });
     },


    ActualizarTodosLosNegocios: function (Wsurltodosnegocios) {
 
        $.ajax({
            type: "POST", url: Wsurltodosnegocios,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d.indexOf("Excepción") > -1 || result.d.indexOf("Exception") > -1) {

                    toastr.error(' CRM - Mayales no se pudo actualizar ' + result.d);
                    $('#Cargando').hide();
                }
                else if (result.d == 1) {
                    toastr.success(' CRM - Mayales' +
                        '<br/>Se han actualizado de manera exitosa todos los negocios');
                    $('#Cargando').hide();
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    },

    ListNegocioFOXID: function (Wsurl, neg) {
        var datos = "{'c':" + JSON.stringify(neg) + "}";
        $.ajax({
            type: "POST", url: Wsurl, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
                    var nego = result.d;
                    $('#TxtInmueble').val(nego[0].CODIGOINMUEBLE);
                    $('#TxtFecha').val(nego[0].FECHANEGOCIO);
                    $('#TxtVlrnegocio').val(utl.FormatNumero(nego[0].VLRNEGOCIO));
                    $('#TxtInicial').val(utl.FormatNumero(nego[0].VLRINICIALCUOTA));
                    $('#TxtVlrCredito').val(utl.FormatNumero(nego[0].VLRCREDITO));

                    $('#TxtInmueble').attr('readonly', true);
                    $('#TxtFecha').attr('readonly', true);
                    $('#TxtVlrnegocio').attr('readonly', true);
                    $('#TxtInicial').attr('readonly', true);
                    $('#TxtVlrCredito').attr('readonly', true);

                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    },

   UpdateCarteraNegocio: function (id, USER_CARTERA, Wsurl) {
        var datos = "{'id':" + JSON.stringify(id) + ",'USER_CARTERA':" + JSON.stringify(USER_CARTERA)+"}";
        $.ajax({
            type: "POST", url: Wsurl, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    toastr.error(' CRM - Mayales no se pudo actualizar el usuario');
                }
                else {
                    toastr.success(' CRM - Mayales' +
                       '<br/>Se ha agregado de manera exitosa el usuario en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
     },
   _addHoja: function (dto, inm, ac) {
        var re;


      var datos = "{'n':" + JSON.stringify(dto) + ",'inm':" + JSON.stringify(inm) + ",'ac':" + JSON.stringify(ac) + "}";
      $.ajax({
          type: "POST", url: Waddnegocio, data: datos,
          contentType: "application/json; charset=utf-8",
          dataType: 'json',
          async: true,
          success: function (result) {
              if (result.d == "ER") {
                  toastr.error(' CRM - Mayales no se pudo guardar la hoja');
              }
              else
              {
                  var k = result.d;
                  var x = k.split('-');
                  toastr.options.timeOut = 120000;
                  toastr.success(' CRM - Mayales'
                       +'<br/>Hoja de negocio creada correctamente,'
                       + 'Ya puede crear su negocio en multifox'
                       + '<br/>CODIGO MULTIFOX:' + x[0]
                       + '<br/>CLIENTE:' + dto.PROPIETARIO);

                  document.getElementById("button").innerHTML = "";
                  $("#button").append('<button class="btn btn-default btn-btn-circle Btimprimir" type="button" id=' + x[1] + ' >Imprimir hoja de negocio</button>');
                  
                  setTimeout(function () {
                      $('#datos').hide();
                      var proyec = utl.getUrl('proyec');
                      inmuebles._lisnegociosepracion(proyec);
                  }, 2000);
                  
                
              }
          },
           error: function (msg) { alert(msg.responseText); }
      });

   },


    _Getcliente: function (cedula) {
         var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
         $.ajax({
             type:"POST", url: Wcliente, data:datos,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result) {
                 if (result.d == "") { _Dto = result.d } else {
                     
                     document.getElementById("Tvalor").innerHTML = "";
                   
                     item = result.d[0];

                         $('#TxtNombres').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO);
                         $('#Textcivil').val(item.ESTADO_CIVIL);
                         $('#Textdireccion').val(item.DIRECCION + " " + item.BARRIO);
                         $('#Textphone').val(item.TELEFONO2);
                         $('#TextEmp').val(item.EMPRESA);
                         $('#Textcorreo').val(item.EMAIL);
                         $('#TextInt').val(item.INMU_INTERES);
                         $('#Textasesorinf').val(item.ASESOR);
                         $('#TextmedioInf').val(item.INFORMACION);
                         $('#TextPinteres').val(item.PROYEC_INTERES);
                         $('#Lvalor').val(utl.FormatNumero(item.VALOR_INM));
                         $("#Tvalor").append(utl.FormatNumero(item.VALOR_INM));

                     val_casa = item.VALOR_INM;
                     inicial = parseFloat(val_casa) * (30) / 100;
                     credito = parseFloat(val_casa) - (inicial);
                     separacion = parseFloat(inicial / 10);
                     $('#Textinicial').val((utl.FormatNumero(inicial)))
                     $('#Textcredito').val((utl.FormatNumero(credito)))
                     $('#Textseparacion').val((utl.FormatNumero(separacion)))
                 }
             },
             error: function (msg) { alert(msg.responseText); }
         });
         this._Dtocliente(_Dto)
        },
     
     _Getclienteseparacion: function (cedula) {
         var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
         $.ajax({
             type: "POST", url: Wcliente, data: datos,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result) { if (result.d == null) { _Dto = result.d } else { _Dto = result.d } },
             error: function (msg) { alert(msg.responseText); }
         });
         this._DtoclienteAso(_Dto)
     },

     _Dtocliente: function (cliente) {
         document.getElementById("Tvalor").innerHTML = "";
         $.each(cliente, function (i, item) {
             $('#TxtNombres').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO);
             $('#Textcivil').val(item.ESTADO_CIVIL);
             $('#Textdireccion').val(item.DIRECCION + " " + item.BARRIO);
             $('#Textphone').val(item.TELEFONO2);
             $('#TextEmp').val(item.EMPRESA);
             $('#Textcorreo').val(item.EMAIL);
             $('#TextInt').val(item.INMU_INTERES);
             $('#Textasesorinf').val(item.ASESOR);
             $('#TextmedioInf').val(item.INFORMACION);
             $('#TextPinteres').val(item.PROYEC_INTERES);
             $('#Lvalor').val(utl.FormatNumero(item.VALOR_INM));
             $("#Tvalor").append(utl.FormatNumero(item.VALOR_INM));
             val_casa = item.VALOR_INM;
         });
         inicial = parseFloat(val_casa) * (30) / 100;
         credito = parseFloat(val_casa) - (inicial);
         $('#Textinicial').val(inicial)
         $('#Textcredito').val(credito)
        
     },

     _DtoclienteAso: function (cliente) {
         document.getElementById("Lvalor").innerHTML = "";
         $.each(cliente, function (i, item) {
             $('#Textasesorinf').val(item.ASESOR);
             $('#TextmedioInf').val(item.INFORMACION);
             $('#TextPinteres').val(item.PROYEC_INTERES);
         })
     },

     _DtoclienteAsociado: function (cliente) {
      console.log(JSON.stringify(cliente))
     },

     _RecalcularCredito: function () {
         var inicial = $('#Textinicial').val();
         var inici = +inicial.replace(/[^\d\.-]/g, '');
         inicial = inici;
         var valorcasa = $('#Lvalor').val();
         var ini = +valorcasa.replace(/[^\d\.-]/g, '');
         valorcasa = ini;
         credito = valorcasa - inicial;
         $('#Textcredito').val(utl.FormatNumero(credito));
         separacion = parseFloat(inicial / 10);
         $('#Textseparacion').val(utl.FormatNumero(separacion));
         

     },

     _TablaPagos: function (pagos) {
         var fecha_p;
         var nom_c;
         document.getElementById("acuerdo").innerHTML = "";
         var tabla='<table id="acuerdopago" class="table table-striped table-bordered table-hover dataTable no-footer" role="grid" aria-describedby="example2_info">';
         tabla +='<thead>';
         tabla +='<tr>';
         tabla +='<th>Cuota</th>';
         tabla+='<th>Fecha</th>';
         tabla+='<th>Valor</th>';
         tabla+='</tr>';
         tabla+='</thead>';
         tabla += '<tbody>';
         for (var i = 0; i < pagos.length; i++)
         {
             tabla +='<tr>';
             tabla+='<td>'+i+'</td>';
             tabla += '<td id=' + pagos[i].Fecha + "-" + i + "-" + pagos[i].Valor + ' class="BtFecha">' + pagos[i].Fecha + '</td>';
             tabla += '<td>' + pagos[i].Valor + '</td>';
             tabla += '</tr>';
             fecha_p = pagos[i].Fecha;
         }
         tabla+='</tbody>';
         tabla += '</table>';

         //var dtof = fecha_p.split("-");
         var fechasc = fecha_p.split("/");
       
         añoscr = fechasc[0];
         mescr = parseInt(fechasc[1])+1;
         diascr = fechasc[2];
         if (mescr > 12) { año = parseInt(añoscr) + 1; mescr = 1; }
         if (mescr < 10) { mescr = '0' + mescr }
         var fechascr = año + "/" + mescr + "/" + diascr;
         $('#Textescritura').val(fechascr)
         $('#acuerdo').append(tabla);
         $('#acuerdopago').dataTable();
         this._Fechaentrega(fechascr);   
         
     },
         
     _Fechaentrega: function (fechescri) {
         var fechent = fechescri.split("/");
         var ent = fechent[0];
         var mesent = parseInt(fechent[1]) + 1;
         var diasent = fechent[2];
         if (mesent < 10) { mesent = '0' + mesent }
         var fechasent = ent + "/" + mesent + "/" + diasent;
         $("#Textentrega").val(fechasent)
         this._Fechasubrogracion(fechasent);
     },

    _Fechasubrogracion: function (fechasub) {
        var fechasubr = fechasub.split("/");
        var entsb = fechasubr[0];
        var mesentsb = parseInt(fechasubr[1]) + 1;
        var diasentsb = fechasubr[2];
        if (mesentsb < 10) { mesentsb = '0' + mesentsb }
        var fechasubro = entsb + "/" + mesentsb + "/" + diasentsb;
        $("#Textsubrogracion").val(fechasubro)
    },
};
