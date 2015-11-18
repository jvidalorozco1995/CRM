<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AdminUsuarios.aspx.cs" Inherits="FormsAuthAd.Administracion.AdminUsuarios" %>
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
                            <li class="active"><a data-toggle="tab" href="#tab-1" id="usuarioms">usuarios</a></li>
                            <li><a data-toggle="tab" href="#tab-2" id="proyasi">Asignacion de Proyectos</a></li>
                            <li><a data-toggle="tab" href="#tab-4" id="rol">Creacion de Roles</a></li>
                            <li><a data-toggle="tab" href="#tab-3" id="asigp">Asignacion de Permisos</a></li>
                        </ul>
                        <div class="tab-content">
                            <!--tab1-->
                            <div id="tab-1" class="tab-pane active">
                                
                                <div class="panel-body" id="Tablauser">
                                    
                                </div>
                            </div>
                            <!---Tap 2-->
                            <div id="tab-2" class="tab-pane">
                                <!--Trabajadores--->
                                <div class="panel-body" id="tabla">
                                </div>
                            </div>
                             <!---Tap 3-->
                            <div id="tab-3" class="tab-pane">
                                <div class="panel-body" id="TablaUSerShip">
                                </div>
                            </div>
                              <!---Tap 4-->
                            <div id="tab-4" class="tab-pane">
                                <div class="panel-body">
                                   <div style="float:left" class="col-lg-6">
                                       <div class="form-group col-lg-12">
                                        <label class="form-label">Nombre del Rol</label>
                                        <input type="text" value="" id="Txtrol" class="form-control">
                                    </div>
                                   </div>
                                    <div style="float:left" class="col-lg-6" id="roles">

                                    </div>  
                                </div>
                            </div>
                            <div class="panel-footer">
                               <button class="btn btn-success " type="button" id="BtnRol">Crear Roles</button>
                             </div>
                        </div>
                    </div>
                </div>

               <div class="col-lg-5" id="PermisosPanel">
                <div class="panel panel-success">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                            <div class="form-group">
                                <div class="col-sm-8">
                                    <input id="user" class="form-control" /></div>
                            </div>
                        </div>
                       Asignacion de Permisos
                    </div>
                    <div class="panel-body" id="rolesR">
                   
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

       <!--Modal reomver proyectos--->
    <div class="modal fade hmodal-danger" id="ModalRemover" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Remover Acceso</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group col-lg-6">
                            <label>Codigo Proyecto</label>
                            <input id="TxtCodigoT" class="form-control" readonly=""/>
                        </div>
                          <div class="form-group col-lg-6">
                            <label>Proyecto</label>
                            <input id="TxtProyectoT" class="form-control" readonly=""/>
                        </div>
                        <div id="TablaT">

                        </div>
                              
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" " id="BtnCancelarP">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

     <!--Crear usuario--->
    <div class="modal fade hmodal-success" id="iduser" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Crear Trabajador</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group col-lg-6">
                            <label class="label-control">Usuario</label>
                            <input id="Textusuario" class="form-control" readonly=""/>
                        </div>
                          <div class="form-group col-lg-6">
                            <label>Email</label>
                            <input id="TxtEmail" class="form-control"/>
                        </div>
                           <div class="form-group col-lg-6">
                            <label>Tipo de Trabajador</label>
                            <select id="ComTipo" class="form-control">
                                <option ></option>
                                <option value="AS">Asesor Comercial</option>
                                <option value="JV">Jefe de Ventas</option>
                            </select>
                        </div>    
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-success" " id="BtnCrearUser">Registrar</button>
                        <button type="button" class="btn btn-default" " id="BtnTrabajador">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

          <!--Modal Remover acceso--->
    <div class="modal fade hmodal-danger" id="AccesoShip" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Remover Accesos</h4>
                    </div>
                    <div class="modal-body">
                        <!--Proyectos--->
                        <div id="DataAcceso">

                        </div>
                    </div>
                    <div class="modal-footer">
                         <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
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
    <script src="js/Serveruser.js"></script>
</asp:Content>
