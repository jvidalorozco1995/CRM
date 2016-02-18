<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Bancos.aspx.cs" Inherits="FormsAuthAd.Configuracion.Bancos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">


    <div id="wrapper">

        <div class="content animate-panel"  style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
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
                                <button class="btn btn-danger btn-btn-circle" type="button" id="BtnCrear">Crear Banco</button>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            
                            <li class="active"><a data-toggle="tab" href="#tab-1">Clientes</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                 <div class="panel-body" id="TablaBancos">
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">

                         
                            <!---Panel Crear Bancos--->
                            <div class="hpanel" id="Pbancos">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="ptCerrar"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear Bancos
                                </div>
                                <div class="Border">
                                    <div class="tab-content">
                                        <div id="Div1" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        
                                                        <div class="form-group col-lg-12">
                                                            <label>Nombre del banco</label>
                                                            <textarea id="TxtNBanco" class="form-control" rows="2" cols="3" maxlength="100"></textarea>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-right m-t-xs">
                                                <button class="btn btn-success " type="button" id="BtnCreaBanco"><i class="fa fa-check"></i>Crear</button>
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
  border: 1.5px solid #E50000;
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
    <script src="../BLLscripts/BLLBancos.js"></script>
    <script src="../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../scripts_crm/accounting.js"></script>
    <script src="js/Bancos.js"></script>
</asp:Content>
