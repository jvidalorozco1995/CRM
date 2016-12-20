    <%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Clientes.aspx.cs" Inherits="FormsAuthAd.Comercial.clientes.Clientes" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
     <!-- Main Wrapper -->
    <div id="wrapper">
    <!---Contenedor-->
    <div class="content animate-panel">
        <div class="row">
            <!---Panel Informacion General--->
            <div class="col-lg-7" id="Principal">

                <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            <%--<div class="pull-right">
                              
                                  
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSCliente">Crear Postventa</button>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>--%>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Postventas</a></li>
                                        
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                            <div class="panel panel-danger">
                                 <div>
                                 <label>Cedula Cliente </label><input type="text" value="" id="cedula" class="form-control" maxlength="" autofocus="" />
                                 <button class="btn btn-danger btn-btn-circle" type="button" id="Btncliente">Buscar Cliente</button>
                                       </div>
                    <div class="panel">
                        
                        <label></label>
                        <div class="pull-left">
                               <div class="col-sm-12 animated-panel zoomIn" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s; padding-top: 10px">
                           

                        </div>
                        </div>
                    

                      
                        <div class="tab-content">
                            <div id="tab-3" class="tab-pane active">

                                <br />
                                <label>Inmuebles</label>
                                <div class="panel-body" id="Tablanegocios">
                                </div>

                            </div>

                        </div>
                        <div class="tab-content">
                            <div id="tab-2" class="tab-pane active">
                                 <div data-toggle="buttons" class="btn-group">
                                     <label>Solicitudes realizadas</label>
                                     <br />
                                     <button class="btn btn-success btn-xs" type="button" id="Btnterminada">Atendidas</button>
                                     <button class="btn btn-warning btn-xs" type="button" id="Btnespera">No atendidas</button>
                             
                                </div>
                                <div class="panel-body" id="Tablaclientes">
                                </div>

                            </div>

                        </div>

                    </div>

                 </div>
                            </div>
                          

                              <!--tab2-->
                           
                        </div>
                    </div>


                
            </div>
            <div class="col-lg-5 scroll " id="Actividadesxtramite" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <!---Panel de las tareas generadas por cada pago--->
                            <div class="hpanel" id="PanelCliente">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear Postventa
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                    <div class="form-group col-lg-12">
                                                        <label>Proyecto</label>
                                                        <input type="text" value="" id="Text1" class="form-control" maxlength="" autofocus="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Mzna/Torre</label>
                                                        <input type="text" value="" id="Text2" class="form-control" name="" placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Cod.Inmueble</label>
                                                        <input type="text" value="" id="Text3" class="form-control" placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label id="label2">Propietario</label>
                                                        <input type="text" value="" id="Text4" class="form-control" placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label id="label3">Telefono</label>
                                                        <input type="text" value="" id="Text5" class="form-control" placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Correo</label>
                                                        <input type="text" value="" id="Text6" class="form-control" placeholder="" />
                                                    </div>
                                                     <div class="form-group col-lg-12">
                                                        <label>Descripcion</label>
                                                        <textarea class="form-control" rows="5" id="Text7"></textarea>
                                                    </div>
                                                        <div class="form-group col-lg-12">
                                                            <button type="button" class="btn btn-success" id="BtnGuardar">Guardar</button>
                                                        </div>
                                                 </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="pull-right">
                            </div>
                         </div>
                    </div>

                </div>
             <div class="col-lg-5 scroll " id="Actividadesxtramites" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <!---Panel de las tareas generadas por cada pago--->
                            <div class="hpanel" id="PanelClientes">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear Postventa
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                    <div class="form-group col-lg-12">
                                                        <label>Proyecto</label>
                                                        <input type="text" value="" id="Text1s" class="form-control" maxlength="" readonly autofocus="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Mzna/Torre</label>
                                                        <input type="text" value="" id="Text2s" class="form-control" name="" readonly placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Cod.Inmueble</label>
                                                        <input type="text" value="" id="Text3s" class="form-control" readonly placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label id="label21">Propietario</label>
                                                        <input type="text" value="" id="Text4s" class="form-control" readonly placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label id="label31">Telefono</label>
                                                        <input type="text" value="" id="Text5s" class="form-control" readonly placeholder="" />
                                                    </div>
                                                    <div class="form-group col-lg-12">
                                                        <label>Correo</label>
                                                        <input type="text" value="" id="Text6s" class="form-control" readonly placeholder="" />
                                                    </div>
                                                     <div class="form-group col-lg-12">
                                                        <label>Descripcion</label>
                                                        <textarea class="form-control" rows="5" id="Text7s" readonly></textarea> 
                                                    </div>
                                                       
                                                 </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="pull-right">
                            </div>
                         </div>
                    </div>

                </div>
        </div>
        </div>
       

    </div>
    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
     <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
        <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../BLLscripts/BLLClientes.js"></script>
    <script src="js/clientes.js"></script>

    
   
</asp:Content>

