<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InfocomercialProyecspx.aspx.cs" Inherits="FormsAuthAd.Comercial.Informes.InfocomercialProyecspx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">

<div id="wrapper">
    <div class="normalheader transition animated fadeIn small-header">
            <div class="hpanel">
                <div class="panel-body">
                    <div class="col-lg-3">
                        <label>Fecha Inicio</label>
                        <input id="Txtinico" type="text" value="" class="form-control" readonly="">
                    </div>
                    <div class="col-lg-3">
                        <label>Fecha Fin</label>
                        <input id="Txtfin" type="text" value="" class="form-control" readonly="">
                    </div>

                    <div class="col-lg-3">
                        <label>Proyecto</label>
                        <select class="form-control" id="ComProyect"><option></option></select>
                        
                    </div>
                    <div style="padding-top: 10px">
                        <button id="BtnCargar" class="btn btn-success col-lg-2" type="button">Cargar datos</button>
                    </div>

                </div>
            </div>
        </div>
    <div class="content animate-panel">
        
        <div class="row">
            <div class="col-lg-12 text-center m-t-md">
                <h2>Informe Proyectos
                </h2>
            </div>
        </div>
        <div class="row">

            <%--<div class="col-md-3 animated-panel zoomIn" style="animation-delay: 0.8s; -webkit-animation-delay: 0.8s;">
        <div class="hpanel hbggreen">
            <div class="panel-body">
                <div class="text-center">
                    <h3>Tareas Culminadas</h3>
                    <p class="text-big font-light" id="completadas">
                    </p>
                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </small>
                </div>
            </div>
        </div>
    </div>--%>

            <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                <div class="hpanel stats">
                    <div class="panel-body h-200">
                        <div class="stats-title pull-left">
                            <h4>Estimacion de Tareas</h4>
                        </div>
                        <div class="stats-icon pull-right">
                            <i class="pe-7s-share fa-4x"></i>
                        </div>
                        <div class="m-t-xl">
                            <h3 class="m-b-xs" id="total"></h3>
                            <span class="font-bold no-margins">Porcentaje completado
                            </span>
                            <div class="progress m-t-xs full progress-small" id="progres">
                            </div>
                            <div class="col-xs-6 animated-panel zoomIn" style="animation-delay: 0.6s; -webkit-animation-delay: 0.6s;">
                                <small class="stats-label">Completadas</small>
                                <h4 id="completada"></h4>
                            </div>
                            <div class="col-xs-6 animated-panel zoomIn" style="animation-delay: 0.3s; -webkit-animation-delay: 0.3s;">
                                <small class="stats-label">Cumplimiento</small>
                                <h4 id="cumplimiento"></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                <div class="hpanel stats">
                    <div class="panel-body h-200">
                        <div class="stats-title pull-left">
                            <h4>Estimacion de Tareas</h4>
                        </div>
                        <div class="stats-icon pull-right">
                            <i class="pe-7s-share fa-4x"></i>
                        </div>
                        <div class="m-t-xl">
                            <h3 class="m-b-xs" id="H1"></h3>
                            <span class="font-bold no-margins">Porcentaje completado
                            </span>
                            <div class="progress m-t-xs full progress-small" id="Div1">
                            </div>
                            <div class="col-xs-6 animated-panel zoomIn" style="animation-delay: 0.6s; -webkit-animation-delay: 0.6s;">
                                <small class="stats-label">Completadas</small>
                                <h4 id="H2"></h4>
                            </div>
                            <div class="col-xs-6 animated-panel zoomIn" style="animation-delay: 0.3s; -webkit-animation-delay: 0.3s;">
                                <small class="stats-label">Cumplimiento</small>
                                <h4 id="H3"></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="row">


            <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.4s; -webkit-animation-delay: 0.4s;">
                <div class="hpanel">
                    <div class="panel-heading">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                            <a class="closebox"><i class="fa fa-times"></i></a>
                        </div>
                        Clientes por Proyecto
                    </div>
                    <div class="panel-body">
                        <div>
                            <canvas id="singleBarOptions" height="281" width="604" style="width: 604px; height: 281px;"></canvas>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s;">
                <div class="hpanel">
                    <div class="panel-heading">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                            <a class="closebox"><i class="fa fa-times"></i></a>
                        </div>
                        CLientes por Asesor
                    </div>
                    <div class="panel-body">
                        <div>
                            <canvas id="sharpLineOptions" height="281" width="604" style="width: 604px; height: 281px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
    <script src="../../vendor/chartjs/Chart.js"></script>

    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../scripts_crm/moment.min.js"></script>
     <script src="../../BLLscripts/BLLProyectos.js"></script>
    <script src="../../BLLscripts/BLLinfocomercialProyec.js"></script>
    <script src="js/infocomercialProye.js"></script>
</asp:Content>
