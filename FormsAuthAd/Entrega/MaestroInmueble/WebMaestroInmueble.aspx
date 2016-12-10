<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebMaestroInmueble.aspx.cs" Inherits="FormsAuthAd.Entrega.MaestroInmueble.WebMaestroInmueble" %>
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
                             <div class="pull-right">
                              
                              <select id="ComProyect">

                              </select>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Maestro inmueble</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="TablaMaestro">
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <!--Escribir, formato de asignacion para este scroll, y poder ser mejor persona!--->
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
                                    <strong> Registro Aval No: </strong>  <label id="Nregistro"> </label> 
                                </div>
                                <div class="Border padding">
                                    <div class="tab-content">
                                      
                                       <div class="row">
                                           
                                            <div class="col-lg-12">
                                                <div class="form-group col-lg-4">

                                                    <label>Proyecto</label>
                                                    <input type="text" value="" id="TxtProyecto" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Manzana o torre</label>
                                                    <input type="text" value="" id="TxtManzana" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Inmueble</label>
                                                    <input type="text" value="" id="TxtInmueble" class="form-control" name="" placeholder="" readonly="" />

                                                </div>

                                                <div class="form-group col-lg-4">

                                                    <label>F.Solicitud</label>
                                                    <input type="text" value="" id="TxtFSolicitud" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>F.Confirmación</label>
                                                    <input type="text" value="" id="TxtFConfirmacion" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                    <div class="form-group col-lg-4">

                                                    <label>Enviado A: </label>
                                                    <input type="text" value="" id="TxtEnviadoA" class="form-control" name="" placeholder="" readonly="" />
                                               </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Enviado Por: </label>
                                                    <input type="text" value="" id="TxtEnviadoPor" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

               <div class="modal fade hmodal-danger" id="modalactfechas" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Fecha</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Fecha</label>
                                        <input id="TxtFecha" type="text" class="form-control" readonly>
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="BtnActualizar">Actualizar</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>

         <div class="modal fade hmodal-danger" id="modaldocumento" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Fecha</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Fecha</label>
                                        <input id="TxtFechaCliente" type="text" class="form-control" readonly>
                                    </div>

                                    <div class="form-group col-lg-12">
                                        <label>Documento</label>
                                        <input type='file' name='UploadFile' id="UploadFile"  accept='.pdf,.docx' class='form-control subirfile' title='Detalle de separacion'/>
                                    </div>
                                     
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary " type="button" id="BtnGuardarDocumento">Guardar</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

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
    <script src="../../BLLscripts/BLLProyectos.js"></script>
        <script src="../../BLLscripts/BLLEntregas.js"></script>
    <script src="js/Maestro.js"></script>
    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>

