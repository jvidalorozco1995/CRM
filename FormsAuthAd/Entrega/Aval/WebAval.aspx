﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebAval.aspx.cs" Inherits="FormsAuthAd.Entrega.Aval.WebAval" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

             <div class="content animate-panel">
            <div class="row scroll" >
              

                <!--Modal del los crear negocios-->
                <div class="col-lg-12  center" style=" padding-left:200px; padding-right:200px">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">

                            <!--Informacion cliente--->
                            <div class="hpanel">
                                <ul class="nav nav-tabs" id="myTab">
                                     <li class="active"><a data-toggle="tab" data-target="#tab-1">Aval</a></li>
                                </ul>
                                <div class="tab-content">
                                     <!---------Tab 1---------->
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
                                                            <input type="text" value="" id="TxtRegistro" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Proyecto</label>
                                                            <input type="text" id="TxtProyecto" class="form-control"  readonly=""/>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Inmueble</label>
                                                            <input type="text" value="" id="TxtInmueble" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Propietario</label>
                                                            <input type="text" value="" id="TxtPropietario" class="form-control" name="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Residente</label>
                                                            <input type="text" value="" id="TxtResidente" class="form-control" name="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Inspección</label>
                                                            <input type="text" value="" id="TxtInspeccion" class="form-control" name="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Aprueba</label>
                                                            <input name="Si"  value="si" type="checkbox">Si</input>
                                                            <input name="No" value="no" type="checkbox">No</input>
                                                        </div>
                                                    </div>
                                                </div>

                                                  <div class="col-lg-12">
                                                       <ul class="nav nav-tabs" id="myTab1">
                                                          
                                                       </ul>
                                                         <div class="tab-content">
                                                            
                             <div id="1003" class="tab-pane active">
                               
                                 kasasjjajajajajajaja
                                </div>
                                                             </div>
                                                   <a class="btn btn-success" id="BtnSiguiente2g">Siguiente</a>
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
     <script src="../../BLLscripts/BLLAval.js"></script>
    <script src="js/Aval.js"></script>
    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>
