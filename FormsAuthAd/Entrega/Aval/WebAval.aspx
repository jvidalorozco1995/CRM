<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebAval.aspx.cs" Inherits="FormsAuthAd.Entrega.Aval.WebAval" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

        <div class="content animate-panel"  style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                <!---Panel Informacion General--->
                <div class="col-lg-9" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            <div class="pull-right">
                              
                                
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Aval</a></li>
                     
                           
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                     <div class="hpanel" id="Informacion">
                              
                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="Div3" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-6">
                                                            <label>No Registro</label>
                                                            <input type="text" value="" id="TxtRegistro" class="form-control">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombres</label>
                                                            <input type="text" id="TxtNombre" class="form-control"  />
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Direccion</label>
                                                            <input type="text" value="" id="txtResidencia" class="form-control" name="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Telefono</label>
                                                            <input type="text" value="" id="TxtTelefono" class="form-control" name="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="text" value="" id="Txtcorreo" class="form-control" name="">
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
                </div>
             </div>
        </div>
     </div>

  

 
            
<style type="text/css">
    .scroll {
        height:700px;
        overflow: scroll;
    }
    .Border {
  background: #fff;
  border: 1.5px;
  border-radius: 2px;
  padding: 10px;
  position: relative;
}
</style>
     <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
     <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <link rel="stylesheet" href="../vendor/sweetalert/lib/sweet-alert.css" />
    <link rel="stylesheet" href="../vendor/toastr/build/toastr.min.css" />
    <link rel="stylesheet" href="../styles_crm/static_custom.css">
    <script src="../gmaps/gmap3.js"></script>
    
    <script src="../vendor/sweetalert/lib/sweet-alert.min.js"></script>
    <script src="../vendor/toastr/build/toastr.min.js"></script>
    <script src="../vendor/moment/moment.js"></script>
    <script src="../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../BLLscripts/BLLEmpresa.js"></script>
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="../BLLscripts/BLLActInmuebles.js"></script>
     <script src="../BLLscripts/BLLInmuebles.js"></script>
    <script src="../BLLscripts/BLLProyectos.js"></script>
    <script src="../BLLscripts/BLLTareas.js"></script>
    <script src="../BLLscripts/BLLSala_Ventas.js"></script>
    <script src="../BLLscripts/BLLClientes.js"></script>
    <script src="../BLLscripts/BLLComercial.js"></script>
    <script src="../BLLscripts/BLLTipoDocumentos.js"></script>
    <script src="../BLLscripts/BLLTipoPersonas.js"></script>
    <script src="js/proyecInfo.js"></script>
    <script src="../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../scripts_crm/accounting.js"></script>
</asp:Content>

