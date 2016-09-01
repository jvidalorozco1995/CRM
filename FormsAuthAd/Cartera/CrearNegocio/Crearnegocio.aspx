<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Crearnegocio.aspx.cs" Inherits="FormsAuthAd.Cartera.Crearnegocio" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
     <script src='<%= ResolveUrl("../../vendor/jquery/dist/jquery.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../scripts/jquery-1.11.1.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcore.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatatable.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdata.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.pager.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxscrollbar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxbuttons.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxlistbox.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.edit.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcalendar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatetimeinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.selection.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdropdownlist.js") %>'></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">

       <div id="wrapper">

            <div class="content animate-panel">
            <div class="row scroll" >
              

                <!--Modal del los crear negocios-->
                <div class="col-lg-12  center" style=" padding-left:200px; padding-right:200px">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">

                            <!--Informacion cliente--->
                            <div class="hpanel">
                                <ul class="nav nav-tabs" id="myTab">
                                     <li class="active"><a data-toggle="tab" data-target="#tab-1">Informacion de cliente</a></li>
                                    <li class=""><a data-toggle="tab"data-target="#tab-2"">Acuerdos de gas</a></li>
                                    <li class=""><a data-toggle="tab" data-target="#tab-3">Fechas de pago</a></li>
                                    <li class=""><a data-toggle="tab"data-target="#tab-4"">Acuerdos de pago</a></li>
                                </ul>
                                <div class="tab-content">
                                     <!---------Tab 1---------->
                                    <div  id="tab-1" class="tab-pane active">
                                        <div class="panel-body">
                                            <div class="row">

                                                  <!---------PANEL DATOS DEL INMUEBLE---------->
                                                <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Datos del Inmueble</h4>
                                                    </div>
                                                </div>


                                              <div class="col-lg-12">
                                                <div class="row">
                                                    <div class="form-group col-lg-4">
                                                        <label class="control-label">Tipo de inmueble</label>
                                                    </div>
                                                    <div class="form-group col-lg-2" style="display: none;">
                                                        <label class="control-label">
                                                            <input type="checkbox" value="Manzana" id="checkmanzada" class="form-group-lg">
                                                            Manzana
                                                        </label>
                                                    </div>
                                                    <div class="form-group col-lg-2" style="display: none;">
                                                        <label class="control-label">
                                                            <input type="checkbox" value="Torre" id="checktorre" class="form-group-lg">
                                                            Torre
                                                        </label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="form-group col-lg-4">
                                                            <div class="col-lg-12">
                                                                <label class="control-label">
                                                                    <input type="checkbox" value="Casa" id="checkcasa" class="form-group-lg">
                                                                    Casa
                                                                </label>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <label class="control-label">
                                                                    <input type="checkbox" value="Apartamento" id="checkapartamento" class="form-group-lg">
                                                                    Apartamento
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-lg-12">
                                                    
                                                        <label>Ubicación del inmueble</label>
                                                   
                                                </div>
                                                 <div class="form-group col-lg-4">
                                                    <label>Area privada</label>
                                                    <input type="text" value="" id="TxtAreaprivada" class="form-control" name="" placeholder="Area privada">
                                                </div>
                                                <div class="form-group col-lg-4">
                                                    <label>Area construida</label>
                                                    <input type="text" value="" id="TxtAreaConstruida" class="form-control" name="" placeholder="Area construida" >
                                                </div>
                                                <div class="form-group col-lg-4">
                                                    <label>Parqueadero</label>
                                                    <input type="text" value="" id="TxtParqueadero" class="form-control" name="" placeholder="Ej : privado o comunal" >
                                                </div>
                                                 <div class="form-group col-lg-12">
                                                     <label>Areas comunes de uso exclusivo</label>
                                                     <input type="text" value="" id="TxtAreasComunes" class="form-control" name="" placeholder="Ej : terraza balcon o patio" >
                                                </div>

                                        <!--######################################################################################################-->







                                                <!---------PANEL DATOS DEL PROPIETARIO---------->
                                                <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Datos del Cliente</h4>
                                                    </div>
                                                </div>
                                                 <div class="form-group col-lg-2">
                                                    <label>Tipo de persona</label>
                                                    <input type="text" value="" id="TxtTipoPersona" class="form-control" maxlength="10" style="float: left" readonly="">
                                                </div>
                                                

                                                

                                                <div class="form-group col-lg-3">
                                                    <label>Tipo de identificacion</label>
                                                    <input type="text" value="" id="TxtTipoIdentificacion" class="form-control" maxlength="10" style="float: left" readonly="">
                                                </div>
                                                <div class="form-group col-lg-3">
                                                    <label>Cedula</label>
                                                    <input type="text" value="" id="TxtIdentidad" class="form-control" maxlength="10" style="float: left">
                                                </div>
                                                <div class="col-lg-2">

                                                    <div style="float: left; padding-top: 20px">
                                                        <a id="BtnDisponibilidad">
                                                            <img src= '<%= ResolveUrl("../../images_crm/Buscar.png") %>'  style="float: left" /></a>
                                                    </div>
                                                    <div style="float: left; padding-top: 20px">
                                                        <a id="BtnAsociadoc">
                                                            <img src='<%= ResolveUrl("../../images_crm/asociado.png") %>'    style="float: left" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Estado civil</label>
                                                    <input type="text" value="" id="Textcivil" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Comprador</label>
                                                    <input type="text" value="" id="TxtNombres" class="form-control" name="" placeholder="Propietario" readonly="">
                                                </div>
                                                  <div class="form-group col-lg-6">
                                                    <label>Lugar de expedicion</label>
                                                    <input type="text" value="" id="Textlugar" class="form-control" name="">
                                                </div>

                                                <div class="form-group col-lg-6">
                                                    <label>Fecha expedicion</label>
                                                    <input type="text" value="" id="TextExpedicion" class="form-control" name="" readonly="" >
                                                </div>
                                              
                                                <div class="form-group col-lg-6">
                                                    <label>Fecha de nacimiento</label>
                                                    <input type="text" value="" id="Textnacimiento" class="form-control" name="">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>Lugar</label>
                                                    <input type="text" value="" id="TextlugarNacimiento" class="form-control" name="">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>No De hijos</label>
                                                    <input type="number" value="" id="TextNh" class="form-control">
                                                </div>

                                                  <div class="form-group col-lg-6">
                                                    <label>Domicilio</label>
                                                    <input type="text" value="" id="Textdomicilio" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Direccion de correspondencia</label>
                                                    <input type="text" value="" id="Textdireccion" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Telefono</label>
                                                    <input type="text" value="" id="Textphone" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Movil</label>
                                                    <input type="text" value="" id="Textcelular" class="form-control">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>Correo electronico</label>
                                                    <input type="text" value="" id="Textcorreo" class="form-control">
                                                </div>

                                                 <!--######################################################################################################-->



                                                 <!---------INFORMACIÓN LABORAL---------->
                                                <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Información Laboral</h4>
                                                    </div>
                                                </div>
                                                  <div class="form-group col-lg-6">
                                                    <label>Empresa donde labora</label>
                                                    <input type="text" value="" id="TextEmp" class="form-control">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>Cargo</label>
                                                    <input type="text" value="" id="Textcargo" class="form-control">
                                                </div>

                                                <div class="form-group col-lg-6">
                                                    <label>Profesion</label>
                                                    <input type="text" value="" id="Textprofesion" class="form-control">
                                                </div>
                                                    
                                                <div class="form-group col-lg-6">
                                                    <label>Direccion</label>
                                                    <input type="text" value="" id="TextdireccionE" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Ingresos</label>
                                                    <input type="text" value="" id="TextIngresos" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Antiguedad</label>
                                                    <input type="text" value="" id="Textantiguedad" class="form-control">
                                                </div>

                                                 <!--######################################################################################################-->



                                                <!---------DATOS DEL CONYUGUE---------->
                                                <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Datos del conyugue</h4>
                                                    </div>
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <label>Nombre de conyugue</label>
                                                    <input type="text" value="" id="Textconyugue" class="form-control">
                                                </div>
                                                 <div class="form-group col-lg-3">
                                                    <label>Tipo de identificacion</label>
                                                    <input type="text" value="" id="TxtTipoIdentificacionConyu" class="form-control" maxlength="10" style="float: left" readonly="">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>Cedula</label>
                                                    <input type="number" value="" id="TextidentificacionC" class="form-control">
                                                </div>
                                                <div class="form-group col-lg-3">
                                                    <label>Lugar de expedición</label>
                                                    <input type="text" value="" id="TxtLugarExpConyu" class="form-control" maxlength="10" style="float: left" readonly="">
                                                </div>
                                                <div class="form-group col-lg-3">
                                                    <label>Fecha de expedición</label>
                                                    <input type="text" value="" id="TxtFechaExpConyu" class="form-control" maxlength="10" style="float: left" readonly="">
                                                </div>
                                                  <div class="form-group col-lg-6">
                                                    <label>Telefono</label>
                                                    <input type="number" value="" id="TexttelC" class="form-control">
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                    <label>Interes de compra</label>
                                                    <input type="text" value="" id="TextInt" class="form-control">
                                                </div>

                                                 <!--######################################################################################################-->


                                               
                                              


                                                <!---------OTROS DATOS---------->
                                                 <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Otros datos</h4>
                                                    </div>
                                                </div>
                                    
                                            <div class="form-group col-lg-6">
                                                 <label class="control-label">Asesor de cartera</label>
                                                    <select id="CmbAsesorCart" class="form-control">
                                                            <option></option>
                                                    </select>
                                             </div>
                                               
                                                <div class="form-group col-lg-6">
                                                    <label>Proyecto de interes</label>
                                                    <input type="text" value="" id="TextPinteres" class="form-control">
                                                </div>
                                               

                                                 <div class="form-group col-lg-6">
                                                        <label class="control-label">Observaciones</label>
                                                        <input type="text" value="" id="TextObservaciones" class="form-control" name="">                                                   
                                                </div>
                                                 <div class="form-group col-lg-6">
                                                 <label class="control-label">Autorizo recibir información por mensaje a mi celular</label>
                                                    <select id="CmbAuto" class="form-control">
                                                            <option>Si</option>
                                                           <option>No</option>
                                                    </select>
                                             </div>
                                                   <div class="form-group col-lg-6">
                                                 <label class="control-label">Autorizo recibir información por mensaje a mi correo electronico</label>
                                                    <select id="CmbAutoElectro" class="form-control">
                                                            <option>Si</option>
                                                           <option>No</option>
                                                    </select>
                                              </div>
                                                 <div class="form-group col-lg-6">
                                                        <label class="control-label">Medio por el cual se entero del proyecto</label>
                                                        <input type="text" value="" id="TextmedioInf" class="form-control" name="">                                                   
                                                </div>

                                                  <!--######################################################################################################-->

                                            </div>
                                           
                                        </div>
                                        <div class="panel-footer" id="divsiguiente">
                                            <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSiguiente">Siguiente</button>
                                        </div>
                                    </div>


                                    <!--tab2-->
                                    <div id="tab-3" class="tab-pane" >
                                        <div class="panel-body">
                                            <div class="col-lg-12">
                                                <div class="row">

                                                    <!---------OTROS DATOS---------->
                                                 <div class="form-group col-lg-12">
                                                    <div class="stats-title pull-center">
                                                        <h4>Costo del Inmueble</h4>
                                                    </div>
                                                </div>

                                                    <div class="form-group col-lg-12">
                                                        <h3 id="Tvalor"></h3>
                                                        <input class="control-label" id="Lvalor" type="text" />

                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Inicial</label>
                                                        <input type="text" value="" id="Textinicial" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Adiciones/Exclusiones</label>
                                                        <input type="text" value="" id="Textadiciones" class="form-control" name="">
                                                    </div>
                                                     <div class="form-group col-lg-6">
                                                        <label class="control-label">Subsidio</label>
                                                        <input type="text" value="" id="Textsubsidio" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Garaje</label>
                                                        <input type="text" value="" id="TextGaraje" class="form-control" name="">
                                                    </div>
                                                      <div class="form-group col-lg-6">
                                                        <label class="control-label">Saldo a financiar</label>
                                                        <input type="text" value="" id="Textcredito" class="form-control" name=""  readonly>
                                                    </div>
                                                   
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Descuento</label>
                                                        <input type="text" value="" id="TextDescuento" class="form-control" name="">
                                                    </div>
                                                     <div class="form-group col-lg-6">
                                                        <label class="control-label">Banco</label>
                                                        <select id="ComBancos" class="form-control">
                                                            <option></option>
                                                        </select>
                                                    </div>


                                                  
                                                    
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Separación</label>
                                                        <input type="text" value="" id="Textseparacion" class="form-control" name="" >
                                                    </div>
                                                      <div class="form-group col-lg-6">
                                                        <label class="control-label">Valor total de venta</label>
                                                        <input type="text" value="" id="TextValorventa" class="form-control" name="" >
                                                    </div>
                                                   
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Fecha de separacion</label>
                                                        <input value="" id="TextFecinicial" class="form-control" name="">
                                                    </div>
                                                     <div class="form-group col-lg-6">
                                                        <label class="control-label"> Fecha primera cuota</label>
                                                        <input value="" id="TextFecinicial2" class="form-control" name="">
                                                    </div>
                                                     <div class="form-group col-lg-6">
                                                        <label class="control-label">No cuotas para pagar el saldo inicial</label>
                                                        <input type="number" min="1" value="" id="Textcuota" class="form-control" name="" >
                                                    </div>
                                                </div>
                                            </div>

                                        

                                            <div class="col-lg-12">
                                                <div class="row">

                                                 <div class="form-group col-lg-6">
                                                        <label class="control-label">Fecha de Escritura</label>
                                                        <input type="text" value="" id="Textescritura" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Fecha de Entrega</label>
                                                        <input type="text" value="" id="Textentrega" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Fecha de Subrogracion</label>
                                                        <input value="" id="Textsubrogracion" class="form-control" name="">
                                                    </div>
                                                     <div class="form-group col-lg-6">
                                                        <label class="control-label">Intereses subrogacion</label>
                                                        <input value="" id="TextIntereses" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Asesor que dio la información</label>
                                                        <input type="text" value="" id="Textasesorinf" class="form-control" name="" readonly="">
                                                    </div>
                                                      <div class="col-lg-12">
                                                <div class="row">
                                                    <div id="jqxWidget" style="margin: 0 auto;">
                                                        <%-- <button type="button" id="datos">aaaa</button>--%>
                                                        <div id="dataTable"></div>
                                                    </div>
                                                </div>
                                            </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="panel-footer" id="divsiguiente2">
                                            <button class="btn btn-danger btn-btn-circle"  type="button" id="BtnSiguiente2">Siguiente</button>
                                        </div>
                                    </div>

                                    <!--tab3-->
                                    <div id="tab-4" class="tab-pane">
                                        <div class="panel-body">
                                            

                                         

                                            
                                        </div>

                                        <div class="panel-footer" id="button">
                                            <button class="btn btn-danger btn-btn-circle" type="button" id="BtnCrearH">Crear negocio</button>
                                        </div>
                                    </div>
                                     <!--tab2-->
                                    <div id="tab-2" class="tab-pane" >
                                        <div class="panel-body">
                                            <div class="col-lg-12">
                                                <div class="row">
                                                    
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Fecha Inicial</label>
                                                        <input type="text" value="" id="Textinicialg" class="form-control" name="">
                                                    </div>
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">Creditó</label>
                                                        <input type="text" value="" id="Textcreditog" class="form-control" name=""  >
                                                    </div>
                                                    
                                                    <div class="form-group col-lg-6">
                                                        <label class="control-label">No cuotas</label>
                                                        <input type="number" min="1" value="" id="Textcuotag" class="form-control" name="" >
                                                    </div>

                                                    <div class="col-lg-12">
                                                <div class="row">
                                                    <div id="jqxWidget2" style="margin: 0 auto;">
                                                        <%-- <button type="button" id="datos">aaaa</button>--%>
                                                        <div id="dataTable2"></div>
                                                    </div>
                                                </div>
                                            </div>


                                                </div>
                                            </div>

                                        

                                            
                                        </div>

                                        <div class="panel-footer" id="divsiguiente2g">
                                            <button class="btn btn-danger btn-btn-circle"  type="button" id="BtnSiguiente2g">Siguiente</button>
                                        </div>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="modal fade hmodal-danger" id="asociadoModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Persona Asociadas</h5>
                        </div>
                        <div class="modal-body" id="asociados">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade hmodal-danger" id="FechasPagos" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                        </div>
                        <div class="modal-body" id="">
                            <div class="form-group">
                                <label class="control-label">Fecha Actual</label>
                                <input type="text" value="" id="fechAc" class="form-control" name="" readonly="">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Nueva fecha</label>
                                <input type="text" value="" id="nuevafc" class="form-control" name="">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-success" id="Btnfecha">Cambiar fecha</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    



    <style type="text/css">
        .scroll {
            height: 700px;
            overflow: scroll;
        }

        .Border {
            background: #fff;
            border: 1.5px solid #E50000;
            border-radius: 2px;
            padding: 10px;
            position: relative;
        }
    </style>
    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../../scripts_crm/HttpBll.js"></script>
        <script src="../../scripts_crm/accounting.js"></script>
        <script src="../../BLLscripts/BLLUtilidades.js"></script>
 


    <script src="../../BLLscripts/BLLnegocio.js"></script>
      <script src="js/CrearNegocio.js"></script>
</asp:Content>