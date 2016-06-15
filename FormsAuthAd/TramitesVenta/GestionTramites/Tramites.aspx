<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Tramites.aspx.cs" Inherits="FormsAuthAd.TramitesVenta.Tramites" %>

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


                                <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSCliente">Gen. tramites</button>

                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Gestión de tramites</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="Tablatramites">
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " style="display:none" id="Actividadesxtramite" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <!---Panel de las tareas generadas por cada pago--->
                            <div class="hpanel" id="PanelTramites">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear tramite
                                </div>


                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombre</label>
                                                            <input type="text" value="" id="TxtTramite" class="form-control">
                                                        </div>

                                                        <div class="form-group col-lg-12">
                                                            <label>Banco</label>
                                                            <select id="TxtBanco" class="form-control">
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <button type="button" class="btn btn-success" id="BtnGuardarTramite">Guardar</button>
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

                            <div class="hpanel" id="PanelActividades">
                                <div class="panel-heading hbuilt">

                                    <a class="Pcreartarea" id="BtnAgregar"><i class=" fa fa-plus-circle fa-7x btn-sm btn-success pull-right"></i></a>
                                    <h5>Actividades</h5>
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
    <script src="js/Tramites.js"></script>

    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>

