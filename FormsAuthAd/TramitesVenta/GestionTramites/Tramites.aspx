﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Tramites.aspx.cs" Inherits="FormsAuthAd.TramitesVenta.Tramites" %>

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


                                <button class="btn btn-danger btn-btn-circle" type="button" id="BtnGenTramite">Gen. tramites</button>

                            </div>
                            <li class="active"> <a data-toggle="tab" href="#tab-1">Gestión de tramites -  <label id="NombreProyecto"></label>  </a></li>

                           
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="Tablatramites">
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll" style="display:none" id="Actividadesxtramite" >

                    <div class="panel panel-success">
                        <div class="panel-body">
                         

                            <div class="pull-right">
                            </div>

                            <div class="hpanel" id="PanelActividades">
                                <div class="panel-heading hbuilt">

                                 
                                    <h5 id="lblproyecto">Actividades - <label id="Nombretramite"></label></h5>
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="datos" class="p-m tab-pane active">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

          <div class="modal fade hmodal-danger" id="infoActividadInmueble" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Detalles de actividad</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Id
                                </label>
                                <input type="text" value="" id="TxtId" class="form-control" readonly="">
                                <input type="text" value="" id="TxtIdTramiteinmueble" style="display:none" class="form-control" readonly="">
                                 <input type="text" value="" id="TxtActividad" style="display:none" class="form-control" readonly="">
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Descripcion</label>
                                        <textarea id="TxtNombre" class="form-control" rows="2" cols="3" readonly=""></textarea>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Fecha de inicio tarea</label>
                                        <input id="fechainicio" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="labelfin">Fecha de Finalizacion</label>
                                        <input id="fechafinal" type="text" value="" class="form-control" readonly="">
                                    </div>
                                  

                                </div>
                            </div>

                        </div>
                        <div style="border-top:solid;color:#E50000"><h4>Documentos</h4></div>
                        <div id="Tabladocumentos">
                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary " type="button" id="BtnTerminada">Completado</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                   </div>
                </div>
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
    <link rel="stylesheet" href="../../vendor/sweetalert/lib/sweet-alert.css" />
    <link rel="stylesheet" href="../../vendor/toastr/build/toastr.min.css" />
    <link rel="stylesheet" href="../../styles_crm/static_custom.css">
    <script src="../../gmaps/gmap3.js"></script>

    <script src="../../vendor/sweetalert/lib/sweet-alert.min.js"></script>
    <script src="../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../vendor/moment/moment.js"></script>
    <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>

     <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../BLLscripts/BLLTramites.js"></script>
    <script src="../../BLLscripts/BLLDocumentosTramites.js"></script>
    <script src="js/Tramites.js"></script>

    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>

