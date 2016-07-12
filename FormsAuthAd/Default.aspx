<%@ Page Title="Pagina principal" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FormsAuthAd._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
    <section class="featured">
     <%--   <div class="content-wrapper">
         
        </div>--%>
    </section>
</asp:Content>
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <!-- Main Wrapper -->
<div id="wrapper">
 <div class="content animate-panel">
<div class="row">
    <div class="col-lg-12">
        <div class="hpanel panel-collapse">
            <div class="panel-heading active">
                <div class="panel-tools">
                    <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                    <a class="closebox"><i class="fa fa-times"></i></a>
                </div>
                Información de estadisticas
            </div>
      </div>
    </div>
</div>
<!--Estdisticas-->
<div class="row">
    <div class="col-lg-6">
               <div class="hpanel stats">
                    <div class="panel-body h-200">
                        <div class="stats-title pull-left">
                            <h4>Tareas </h4>
                        </div>
                        <div class="stats-icon pull-right">
                            <i class="pe-7s-check fa-4x"></i>
                        </div>
                        <div class="m-t-xl">
                            <h3 class="m-b-xs" id="Asignadas"></h3>
                    <span class="font-bold no-margins">
                        Tareas asignadas
                    </span>
                            <div class="progress m-t-xs full progress-small progres" id="porcentaje">
                              
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <small class="stats-label">Completadas</small>
                                    <h4 id="Completadas"></h4>
                                </div>

                                <div class="col-xs-6">
                                    <small class="stats-label">% Cumplimiento</small>
                                    <h4 id="cumplidos"></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">
                        Gestión de tareas
                    </div>
                </div>
            </div>
    <div class="col-lg-6">
        <div class="hpanel stats">
            <div class="panel-body h-200">
                <div class="stats-title pull-left">
                    <h4>Meta anual</h4>
                </div>
                <div class="stats-icon pull-right">
                    <i class="pe-7s-graph2 fa-4x"></i>
                </div>
                <div class="m-t-xl">
                    <h3 class="m-b-xs">622</h3>
                    <span class="font-bold no-margins">Clientes atendidos
                    </span>
                    <div class="progress m-t-xs full progress-small">
                        <div style="width: 16%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" role="progressbar" class=" progress-bar progress-bar-success">
                            <span class="sr-only">35% Complete (success)</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <small class="stats-label">Ventas </small>
                            <h4>102</h4>
                        </div>

                        <div class="col-xs-6">
                            <small class="stats-label">% Efectividad</small>
                            <h4>16.3%</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-footer">
                Clientes y oportunidades.
            </div>
        </div>
    </div>
</div>
<!---->
<!-- Tareas Programadas -->
<div class="row">
    <div class="col-lg-12">
        <div class="hpanel panel-collapse">
            <div class="panel-heading active">
                <div class="panel-tools">
                    <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                    <a class="closebox"><i class="fa fa-times"></i></a>
                </div>
                Recordatorio de Tareas Pendientes
            </div>
            <div class="panel-body list" id="listareas">
               
            </div>
        </div>
    </div>
</div>
<!--Detalles de tareas-->
        <div class="modal fade hmodal-danger" id="infoTareas" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Detalles de Tarea</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Id de tarea</label>
                                <input type="text" value="" id="TxtIdTarea" class="form-control" readonly="">
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Descripción de Tarea</label>
                                        <textarea id="Txtdetalle" class="form-control" rows="2" cols="3" readonly=""></textarea>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Fecha de inicio tarea</label>
                                        <input id="fechainfo" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-12">
                                        <label id="labelfin">Fecha de Finalización</label>
                                        <input id="Fechafin" type="text" value="" class="form-control" readonly="">
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label id="labelmotivo">descripción</label>
                                        <textarea id="TxtMotivo" class="form-control" rows="2" cols="3"></textarea>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div style="border-top:solid;color:#E50000"><h4>Historial de tarea</h4></div>
                        <div id="TablaBitacoras">
                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="BtnEditarI">Editar</button>
                        <button class="btn btn-success " type="button" id="BtnPostI">Posponer</button>
                        <button class="btn btn-primary " type="button" id="BtnTerminadaI">Completado</button>
                        <button class="btn btn-warning " type="button" id="ButnCerrarG">Cancelar gestion</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                   </div>
                </div>
            </div>
        </div>

         <div class="modal fade hmodal-danger" id="Cancelargestion" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Cancelacion de gestion</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label class="label-control">MotiVo de cancelacion</label>
                                        <select class="form-control" id="gestcancelar">
                                            <option></option>
                                            <option value="C">Realizara Comprar</option>
                                            <option value="N">Desiste proceso de compra</option>
                                         </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div> 
</div>
</div>
</asp:Content>
