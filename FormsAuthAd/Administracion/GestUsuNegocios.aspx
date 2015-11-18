<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GestUsuNegocios.aspx.cs" Inherits="FormsAuthAd.Configuracion.GestUsuNegocios" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
        <div id="wrapper">
        <!---Contenedor-->
        <div class="content animate-panel">
            <div class="row">
                <div class="col-lg-12" id="Principal">
                    <div class="hpanel">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-2" id="proyasi">usuarios</a></li>
                        </ul>
                        <div class="tab-content">
                           <!--tab2-->
                            <div id="tab-2" class="tab-pane active">
                                <div class="panel-body" id="tabla">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
      <!--Modal Asignar Proyectos--->
    <div class="modal fade hmodal-success" id="ModalAsignar" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Asignacion de Proyectos</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group col-lg-6">
                            <label>Usuario</label>
                            <input id="TxtCodigo" class="form-control" readonly=""/>
                        </div>
                          <div class="form-group col-lg-6">
                            <label>Nombre del Usuario</label>
                            <input id="TxtProyecto" class="form-control" readonly=""/>
                        </div>
                        <!--Proyectos--->
                        <div id="Tabla2">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"  id="BtnCancelar">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

   
    <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="../vendor/sweetalert/lib/sweet-alert.css" />
    <link rel="stylesheet" href="../vendor/toastr/build/toastr.min.css" />
    <link rel="stylesheet" href="../styles_crm/static_custom.css">
    <script src="../BLLscripts/BLLTrabajadores.js"></script>
    <script src="../BLLscripts/BLLProyectos.js"></script>
    <script src="../BLLscripts/BLLUser.js"></script>
       <script src="../BLLscripts/BLLUtilidades.js"></script>
     <script src="../scripts_crm/HttpBll.js"></script>
    <script src="../BLLscripts/BLLnegocio.js"></script>
    <script src="../Administracion/js/Admingestusu.js"></script>
</asp:Content>
