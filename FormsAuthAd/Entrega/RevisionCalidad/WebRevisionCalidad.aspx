<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebRevisionCalidad.aspx.cs" Inherits="FormsAuthAd.Entrega.RevisionCalidad.WebRevisionCalidad" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
 <div id="wrapper">

        <div class="content animate-panel" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                <div class="row">
                    <div class="col-sm-6 text-center">
                        <div class="pull-center">
                            <div class="dt-buttons btn-group">

                                <a class="btn btn-default buttons-copy buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                    <span>No revisado</span>
                                    <img src='<%= ResolveUrl("../../images_crm/libre.png") %>' style="width: 20px; height: 18px" />
                                </a>
                                  <a class="btn btn-default buttons-copy buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                    <span>Revisado con hallazgos</span>
                                    <img src='<%= ResolveUrl("../../images_crm/Espera.png") %>' style="width: 20px; height: 18px" />
                                </a>
                                <a class="btn btn-default buttons-csv buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                    <span>Aprobado para entrega</span>
                                    <img src='<%= ResolveUrl("../../images_crm/Completa.png") %>' style="width: 15px; height: 15px" />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            
                            <li class="active"><a data-toggle="tab" href="#tab-1">Revisión calidad</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="TablaPendientes">
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <%--<div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">
                            <!--DATOS DE SOLICITUDES--->
                            <div class="hpanel" id="Informacion">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    <strong> Solicitud No: </strong>  <label id="Nsolicitud"> </label> 
                                </div>
                                <div class="Border padding">
                                    <div class="tab-content">
                                      
                                        <div class="row">
                                           
                                            <div class="col-lg-12">
                                                <div class="form-group col-lg-4">

                                                    <label>Proyecto</label>
                                                    <input type="text" value="" id="TxtProyectos" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Fecha</label>
                                                    <input type="text" value="" id="TxtFecha" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Dir Obra</label>
                                                    <input type="text" value="" id="TxtDirObra" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                            </div>

                                        </div>
                                          <div style="color:#E50000; text-align:center"><h4>Listado de inmuebles</h4></div>
                                        <div id="tablainmuebles" class="p-m tab-pane active">
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group col-lg-4">

                                                    <label>F. Enviado</label>
                                                    <input type="text" value="" id="TxtFechaEnviado" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Enviado A:</label>
                                                    <input type="text" value="" id="TxtEnviadoA" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Enviado por:</label>
                                                    <input type="text" value="" id="TxtEnviadoPor" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal"  id="BtnGuardar">Guardar</button>
                                           <button type="button" class="btn btn-success" id="BtnEditar">Editar</button>
                                             <button type="button" class="btn btn-default" data-dismiss="modal"  id="BtnCancelar">Cancelar</button>

                                        <%--   <button type="button" class="btn btn-default" data-dismiss="modal"  id="BtnCancelar">Guardar</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>


            </div>



            <!--Modal nueva solicitud--->
            <div class="modal fade hmodal-danger" id="ModalAsignar" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Nueva solicitud</h5>

                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <label>Proyecto:</label>
                                            <select id="ComProyect" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label>Dir Obra:</label>
                                            <select id="CombAsesores" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>

                                        <div class="form-group col-lg-12">
                                            <h1>Inmuebles</h1>
                                        </div>

                                        <div class="form-group col-lg-5">
                                            <label id="label10">Manzana</label>
                                            <select id="Mazanasb" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-5">
                                            <label id="label10">Inmueble</label>
                                            <select id="Inmueble" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <label id="label10">Inmueble</label>
                                        <div class="form-group col-lg-1">
                                            <button class="btn btn-success " type="button" id="BtnAdd">+</button>
                                        </div>


                                    </div>
                                </div>

                            </div>
                            <div style="border-top:solid;color:#E50000"><h4>Historial de tarea</h4></div>
                        <div id="TablaInmueblesEntregas">
                        </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success " type="button" id="Btnregis">Crear</button>
                            <button type="button" class="btn btn-default" id="BtnCerrar" data-dismiss="modal">Cerrar</button>

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
        <script src="../../BLLscripts/BLLRevisionCalidad.js"></script>
 

        <script src="js/RevisionCalidad.js"></script>-
        <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
        <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>
