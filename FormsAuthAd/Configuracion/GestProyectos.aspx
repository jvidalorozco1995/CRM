<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GestProyectos.aspx.cs" Inherits="FormsAuthAd.Configuracion.GestProyectos" %>
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
            <div class="col-lg-6" id="Principal">
                <div class="hpanel">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab-1">Proyectos MultiFox</a></li>
                    </ul>
                    <div class="tab-content">
                           <!--tab1-->
                        <div id="tab-1" class="tab-pane active">
                             <div class="panel-body" id="TablaFox">
                                 <center>
                                 <div class="alert alert-danger" role="alert" id="MensajeFox" style="width:80%">
                                  <h1> CRM - Mayales</h1>
                                  <h3> Actualemte no Existen Proyectos Cargados MultiFox</h3>
                                 </div>
                               </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6" id="segundo">
                <div class="hpanel">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab-2">Proyectos CRM</a></li>
                    </ul>
                    <div class="tab-content">
                        <!--tab1-->
                        <div id="tab-2" class="tab-pane active">
                            <div class="panel-body" id="Tabla">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         
        </div>
        <div class="modal fade hmodal-danger" id="planos" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Cargar Imagen</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <form method="POST" EncType="Multipart/Form-Data"> 
                                    <div class="form-group col-lg-12">
                                        <label></label>
                                        <input type="file" class="form-control" name="inputFile" id="inputFile"/>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="BtnLoadplano">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

     <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../BLLscripts/BLLTrabajadores.js"></script>
    <script src="../BLLscripts/BLLProyectos.js"></script>
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="js/proyectos.js"></script>
</asp:Content>
