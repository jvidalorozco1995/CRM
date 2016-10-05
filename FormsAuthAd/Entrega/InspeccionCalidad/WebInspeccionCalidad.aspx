<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebInspeccionCalidad.aspx.cs" Inherits="FormsAuthAd.Entrega.InspeccionCalidad.WebInspeccionCalidad" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
 <div id="wrapper">

        <div class="content animate-panel" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                

                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                             <div class="pull-right">
                              
                                  <button class="btn btn-primary" type="button" id="BtnModalCrearAmbiente">Crear Ambientes</button>
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnModalCrearItem">Crear Items</button>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Listado de ambientes</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="TablaAmbientes">
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">
                            <!--DATOS DE SOLICITUDES--->
                            <div class="hpanel" id="Informacion">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    <strong> Ambiente : </strong>  <label id="Ambiente"> </label> 
                                </div>
                                <div class="Border padding">
                                    <div class="tab-content">
                                      
                                        <div class="row">
                                           
                                            <div class="col-lg-12">
                                                
                                            </div>

                                        </div>
                                         <div style="color:#E50000; text-align:center"><h4>Listado de items asignados</h4></div>
                                        <div id="tablaitemsxambiente" class="p-m tab-pane active">
                                        </div>

                                          <div style="color:#E50000; text-align:center"><h4>Listado de items</h4></div>
                                        <div id="tablaitems" class="p-m tab-pane active">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <!--Modal nuevo ambiente--->
            <div class="modal fade hmodal-danger" id="ModalCrearAmbiente" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Nuevo ambiente</h5>

                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="form-group col-lg-12">
                                        <label>Nombre del ambiente </label>
                                        <input id="TxtNombreAmbiente" type="text" value="" class="form-control">
                                     </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success " type="button" id="BtnregisAmbiente">Crear</button>
                            <button type="button" class="btn btn-default" id="BtnCerrar" data-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>


                 <!--Modal nueva item--->
            <div class="modal fade hmodal-danger" id="ModalCrearItem" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Nuevo item</h5>

                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="form-group col-lg-12">
                                        <label>Nombre del item </label>
                                        <input id="TxtNombreItem" type="text" value="" class="form-control">
                                     </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success " type="button" id="BtnregisItem">Crear</button>
                            <button type="button" class="btn btn-default" id="BtnCerrar2" data-dismiss="modal">Cerrar</button>

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
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        <link rel="stylesheet" href="../vendor/sweetalert/lib/sweet-alert.css" />
        <link rel="stylesheet" href="../vendor/toastr/build/toastr.min.css" />
        <link rel="stylesheet" href="../styles_crm/static_custom.css">
        <script src="../../gmaps/gmap3.js"></script>

        <script src="../../vendor/sweetalert/lib/sweet-alert.min.js"></script>
        <script src="../../vendor/toastr/build/toastr.min.js"></script>
        <script src="../../vendor/moment/moment.js"></script>
        <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
        <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
        <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>

       <script src="../../BLLscripts/BLLUtilidades.js"></script>
        <script src="../../BLLscripts/BLLInspeccionCalidad.js"></script>
 

        <script src="js/InspeccionCalidad.js"></script>-
        <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
        <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>

