<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ConfigTramites.aspx.cs" Inherits="FormsAuthAd.TramitesVenta.ConfigTramites" %>
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
                              
                                
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSCliente">Nuevo</button>
                               
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Parametrización</a></li>
                         
                           
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                 <div class="panel-body" id="Tablatramites">
                                 </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="pull-right">
                              
                                
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnAgregar">Agregar</button>
                               
                            </div>
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">

                             <div class="v-timeline vertical-container animate-panel"  data-child="vertical-timeline-block" data-delay="1">
                    <div class="vertical-timeline-block">
                        <div class="vertical-timeline-icon navy-bg">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="vertical-timeline-content">
                            <div class="p-sm">
                                <span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>

                                <h2>The standard chunk of Lorem Ipsum</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div class="panel-footer">
                                It is a long established fact that
                            </div>
                        </div>
                    </div>
                    <div class="vertical-timeline-block">
                        <div class="vertical-timeline-icon navy-bg">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="vertical-timeline-content">
                            <div class="p-sm">
                                <span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>

                                <h2>There are many variations</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div class="panel-footer">
                                It is a long established fact that
                            </div>
                        </div>
                    </div>
                    <div class="vertical-timeline-block">
                        <div class="vertical-timeline-icon navy-bg">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="vertical-timeline-content">
                            <div class="p-sm">
                                <span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>

                                <h2>Contrary to popular belief</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div class="panel-footer">
                                It is a long established fact that
                            </div>
                        </div>
                    </div>
                    <div class="vertical-timeline-block">
                        <div class="vertical-timeline-icon navy-bg">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="vertical-timeline-content">
                            <div class="p-sm">
                                <span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>

                                <h2>The generated Lorem Ipsum</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div class="panel-footer">
                                It is a long established fact that
                            </div>
                        </div>
                    </div>
                    <div class="vertical-timeline-block">
                        <div class="vertical-timeline-icon navy-bg">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <div class="vertical-timeline-content">
                            <div class="p-sm">
                                <span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>

                                <h2>The standard chunk</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                </p>
                            </div>
                            <div class="panel-footer">
                                It is a long established fact that
                            </div>
                        </div>
                    </div>
                </div>
               </div>
           </div>
    
            </div>
           
        </div>

      </div>

               <!--Modal actividades--->
            <div class="modal fade hmodal-success" id="ModalListActividades" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Listado de actividades</h4>
                    </div>
                    <div class="modal-body">
                        
                        <!--Empresas--->
                        <div id="TblListaActividades"  >

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="BtnModalCrearActividad">Nueva</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"  id="BtnCerrar">Cerrar</button>
                         
                    </div>
                </div>
            </div>
        </div>


             <!--Modal crear actividades--->
            <div class="modal fade hmodal-success" id="ModalCrearActividades" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Crear actividad</h4>
                    </div>
                    <div class="modal-body">
                         <!--Formulario de crear actividades--->
                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-12">
                                                            <label>Nombre</label>
                                                            <input type="text" value="" id="TxtNombre" class="form-control">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Descripción</label>
                                                            <textarea id="TxtDescripcion" class="form-control" rows="2" cols="3" maxlength="100"></textarea>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Simultaneo</label>
                                                            <input id="" type="text" value="" class="form-control">
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label>Actividad dependiente</label>
                                                            <input id="TxtFecha" type="text" value="" class="form-control">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                       
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="BtnCActividad">Crear Actividad</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"  id="BtnCancelar">Cerrar</button>
                         
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
    <script src="../../BLLscripts/BLLActividades.js"></script>
     <script src="../../BLLscripts/BLLTramites.js"></script>
    <script src="js/Tramite.js"></script>
    <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>