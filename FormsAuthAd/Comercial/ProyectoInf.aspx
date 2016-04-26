<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ProyectoInf.aspx.cs" Inherits="FormsAuthAd.Comercial.ProyectoInf" %>
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
                              
                                  <button class="btn btn-primary" type="button" id="BtnActInmuebles">Act. Inmuebles</button>
                                  <button class="btn btn-danger btn-btn-circle" type="button" id="BtnSCliente">Crear Cliente</button>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Clientes</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-5">Tareas</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-2">Inmuebles</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-3">Planos</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-4">Localizacion</a></li>
                            <li class=""><a data-toggle="tab" href="#tab-6">separaciones</a></li>
                           
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                 <div class="panel-body" id="TablaClientes">
                                 </div>
                                <div class="panel-footer">
                                     <div data-toggle="buttons" class="btn-group">
                                        <button class="btn btn-warning btn-xs" type="button" id="Btnactivos" style="background: #12166B">Activos</button>
                                        <button class="btn btn-success btn-xs" type="button" id="Btncompra">Compra</button>
                                        <button class="btn btn-danger btn-xs" type="button" id="Btnocompra" >No comprados</button>
                                         <button class="btn btn-warning btn-xs" type="button" id="BtnTodos" >Todo</button>
                                    </div>
                                </div>
                            </div>
                            <!--tab2-->
                            <div id="tab-2" class="tab-pane">
                                <div class="panel-body" id="TablaInmueble">
                                    <div class="panel panel-success">
                                        <div class="panel-heading">  <label id="lblact">Ultima vez actualizado</label></div>
                                        <div class="panel-body" style="text-align: center">
                                            <div class="btn-group" role="group">
                                                <label>
                                                    <input type="radio" value="0" id="checkDisponible" name="optionsRadios">Disponibles</label>
                                                <label>
                                                    <input type="radio" value="1" id="checkOcupados" name="optionsRadios">Ocupados</label>
                                                <label>
                                                    <input type="radio" value="2" id="checkSeparados" name="optionsRadios">Separados</label>
                                                <select id="Mazanasb"></select>
                                            </div>
                                            <div class="alert alert-danger" role="alert" id="alertbloques">
                                                <h4>CRM - Mayales</h4>
                                                <h5>No existen inmuebles disponibles para bloque selecccionado..!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tables">
                                    </div>
                                </div>
                            </div>
                            <!--Tap3-->
                            <div id="tab-3" class="tab-pane">
                                <div class="panel-body">
                                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                        <!-- Indicators -->
                                        <ol class="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                        </ol>

                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner" role="listbox">
                                            <div class="item active">
                                                <img src='<%= ResolveUrl("../images_crm/Planos2.jpg")%>' alt="Chania">
                                            </div>

                                            <div class="item">
                                                <img src='<%= ResolveUrl("../images_crm/Planos2.jpg")%>' alt="Flower">
                                            </div>
                                        </div>

                                        <!-- Left and right controls -->
                                        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!--Tap3-->
                            <div id="tab-4" class="tab-pane">
                                <div class="panel-body">
                                    <div style="width: 100%; height: 500px;" id="gmap"></div>
                                </div>
                            </div>
                             <!--Tap3-->
                            <div id="tab-5" class="tab-pane">
                         
                                <div class="panel-body">
                                    <div class="pull-righ">
                                        <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s; padding-top: 10px">
                                            <div data-toggle="buttons" class="btn-group">
                                                <button class="btn btn-danger btn-xs" type="button" id="Btnvencido">Vencido</button>
                                                <button class="btn btn-success btn-xs" type="button" id="Btnatendida">Atendidas</button>
                                                <button class="btn btn-warning btn-xs" type="button" id="Btnespera">No atendidas</button>
                                                <button class="btn btn-warning btn-xs" type="button" id="Btnpospuesta" style="background:#E67E22">Pospuesta</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="width: 100%; height: 500px;" id="clientesData"></div>
                                </div>
                            </div>
                               <!--Tap3-->
                            <div id="tab-6" class="tab-pane">
                                <div class="panel-body">
                                    <div style="width: 100%; height: 500px;" id="sepraciones"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">

                            <!--Informacion cliente--->
                            <div class="hpanel" id="Informacion">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Informacion Cliente
                                </div>
                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="Div3" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-12">
                                                            <label>Documento de Identidad</label>
                                                            <input type="text" value="" id="TxtIdentificacion" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombres</label>
                                                            <input type="text" id="TxtNombre" class="form-control" readonly="" />
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Direccion</label>
                                                            <input type="text" value="" id="txtResidencia" class="form-control" name="" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Telefono</label>
                                                            <input type="text" value="" id="TxtTelefono" class="form-control" name="" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Email</label>
                                                            <input type="text" value="" id="Txtcorreo" class="form-control" name="" readonly="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!---Panel Registro CLientes--->
                            <div class="hpanel" id="Clientes"  style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="PClientes"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear Clientes
                                </div>
                                <div class="panel-body no-padding">
                                    <div class="tab-content">
                                        <div id="step1" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-11">
                                                            <label>Documento de Identidad *</label>
                                                          <input type="text" value="" id="TxtIdentidad" class="form-control" maxlength="10" autofocus="" style="float:left">
                                                         </div>
                                                        <div style="float:left;padding-top:20px"><a id="BtnDisponibilidad"><img src='<%= ResolveUrl("../images_crm/Buscar.png")%>'style="float:left" /></a></div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Nombre *</label>
                                                            <input type="text" value="" id="TxtNombres" class="form-control" name="" placeholder="Nombre">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Primer Apelido *</label>
                                                            <input type="text" value="" id="TxtP_apellido" class="form-control" placeholder="Primer Apellido">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label id="labelS_apellido">Segundo Apellido</label>
                                                            <input type="text" value="" id="TxtS_apellido" class="form-control" placeholder="Segundo Apellido">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label id="label1">Estado Civil</label>
                                                            <select id="Combestadoc" class="form-control">
                                                                <option></option>
                                                                <option>Casado</option>
                                                                <option>Soltero</option>
                                                                <option>Union Libre</option>
                                                                <option>Divorciado</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Direccion de resicencia</label>
                                                            <input type="text" value="" id="TxtDireccion" class="form-control" placeholder="Direccion">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Barrio</label>
                                                            <input type="text" value="" id="TxtBarrio" class="form-control" placeholder="Direccion">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Proyecto de Interes</label>
                                                            <select id="ComProyect" class="form-control">
                                                                <option></option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Telefono Celular</label>
                                                            <input type="tel" value="" id="TxtTel1" class="form-control" name="" placeholder="Celular" maxlength="10">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Correo</label>
                                                            <input type="email" value="" id="TxtEmail" class="form-control" name="" placeholder="">
                                                        </div>
                                                      
                                                        <div class="form-group col-lg-6">
                                                             
                                                          <label>Empresa</label>
                                                             <div class="input-group">
                                             
                                                      <input type="tel" value="" id="CombEmpresa" class="form-control" name="" placeholder="Empresa" maxlength="10" readonly>
                                                                   <div class="input-group-addon" style="padding:0px 12px;color:black !important" id="BtnModalEmpresa">
	                                                    <span  class="glyphicon glyphicon-search"></span> 
                                                       </div>
                                                      </div>
                                                            </div>
                                                           

                                                        <div class="form-group col-lg-6">
                                                            <label>Telefono de trabajo</label>
                                                            <input type="text" value="" id="teltrabajo" class="form-control" />
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Sueldo</label>
                                                            <select id="CombSueldo" class="form-control">
                                                                <option>Seleccionar..</option>
                                                                <option>Menos de 3'000.000</option>
                                                                <option>3'000.000 - 5'999.999</option>
                                                                <option>6'000.000 - 9'999.999</option>
                                                                <option>10'000.000 en adelante.</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Presupuesto de Compra</label>
                                                            <select id="Combpresuesto" class="form-control">
                                                                <option>Selccionar..</option>
                                                                <option>Entre 50y 100 millones</option>
                                                                 <option>Entre 100 a 150 Millones</option>
                                                                <option>Entre 150 a 200 Millones</option>
                                                                <option>> 200 Millones</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Que esta buscando</label>
                                                            <select id="ComboBuscando" class="form-control">
                                                                <option>Seleccionar..</option>
                                                                <option>Casa</option>
                                                                <option>Apartamento</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Como se entero del proyecto</label>
                                                            <select id="ComboEntero" class="form-control">
                                                                <option>Seleccionar..</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-5 control-label">
                                                                Le gustaria vivir en:
                                                                <br>
                                                            </label>

                                                            <div class="col-sm-5">
                                                                <div class="radio">
                                                                    <label>
                                                                        <input type="checkbox" value="Conjunto cerrado" id="check1">
                                                                        Conjunto cerrado
                                                                    </label>
                                                                </div>
                                                                <div class="radio">
                                                                    <label>
                                                                        <input type="checkbox" value="Urabnizacion abierta" id="check2"></label>
                                                                    Urbanización abierta
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="col-sm-6 control-label">
                                                                Motivo de la Compra
                                                                <br>
                                                            </label>

                                                            <div class="col-sm-5">
                                                                <div class="radio">
                                                                    <label>
                                                                        <input type="checkbox" value="Vivienda" id="check3" name="optionsRadios">
                                                                        Vivienda
                                                                    </label>
                                                                </div>
                                                                <div class="radio">
                                                                    <label>
                                                                        <input type="checkbox" value="Inversion" id="check4" name="optionsRadios"></label>
                                                                    Inversion
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label id="LabelSala">Sala de Venta</label>
                                                            <select id="CombSala" class="form-control">
                                                                <option></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-right m-t-xs">
                                                <button class="btn btn-success " type="button" id="BtnRegCliente"><i class="fa fa-check"></i>Guardar Cliente</button>
                                                <button class="btn btn-primary " type="button" id="BtnUpdate"><i class="fa fa-check"></i>Actualizar Datos</button>
                                                <button class="btn btn-default" type="button" id="Btnsocio">Asociar persona</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!---Panel Crear Tarea--->
                            <div class="hpanel" id="Tareas">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="ptCerrar"><i class="fa fa-times"></i></a>
                                    </div>
                                    Crear Tarea
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
                                                            <label>Documento de Identidad</label>
                                                            <input type="number" value="" id="TxtClientes" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Descricpion de Tarea numero de caracteres 100</label>
                                                            <textarea id="TxtDescripcion" class="form-control" rows="2" cols="3" maxlength="100"></textarea>
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Fecha Tarea</label>
                                                            <input id="TxtFecha" type="text" value="" class="form-control">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-right m-t-xs">
                                                <button class="btn btn-success " type="button" id="BtnCreaTarea"><i class="fa fa-check"></i>Crear Tarea</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                           
                            <!---Panel BitacorasTareas-->
                            <div class="hpanel" id="Bitatareas">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="BitaCerrar"><i class="fa fa-times"></i></a>
                                    </div>
                                    Bitacora de Tareas
                                </div>
                                <div class="Border no-padding">
                                    <ul class="list-group" id="List">
                                    </ul>
                                </div>
                                <div class="text-right m-t-xs">
                                    <button class="btn btn-success " type="button" id="Btntareas"><i class="fa fa-check"></i>Crear Tareas</button>
                                </div>
                            </div>
                             <!---Panel Historial CLiente---->
                             <div class="hpanel" id="hisorialcliente">
                                <div class="panel-heading">
                                    <div class="panel-danger">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                   Historial Cliente
                                </div>
                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="historiladetalle" class="p-m tab-pane active">

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!---Separar Inmueble--->
                            <div class="hpanel" id="SepararInmueble">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="ptCerrar"><i class="fa fa-times"></i></a>
                                    </div>
                                    Separar Inmueble
                                </div>
                                <div class="Border">
                                    <div class="tab-content">
                                        <div id="step3" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-12">
                                                            <label>Inmueble</label>
                                                            <input type="text" value="" id="Inmueble" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Cliente</label>
                                                            <input id="Cliente" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                          <div class="form-group col-lg-6">
                                                            <label>Correo electronico</label>
                                                            <input id="EmailCliente" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-12" >
                                                            <label>Fecha de cierre de negocio</label>
                                                            <input id="Fechafinal" type="text" value="" class="form-control" readonly="">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-right m-t-xs">
                                                <button class="btn btn-success " type="button" id="Btnseparar"><i class="fa fa-check"></i>Separar Inmueble</button>
                                                <button type="button" class="btn btn-default" id="BtnsepararC">Cerrar</button>
                                                <img src="../Images/loading.gif" style="width:25px;height:25px" id="loadig"/>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                             <!---Detallesepracion-->
                            <div class="hpanel" id="detallesepracion" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s;">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="ptCerrar"><i class="fa fa-times"></i></a>
                                    </div>
                                    Detalle de separacion de inmueble
                                </div>
                                <div class="Border">
                                    <div class="tab-content">
                                        <div id="Div4" class="p-m tab-pane active">

                                            <div class="row">
                                                <div class="col-lg-3 text-center">
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="row">
                                                        <div class="form-group col-lg-12">
                                                            <label>Cliente</label>
                                                            <input type="text" value="" id="detalleCliente" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Direccion de residencia</label>
                                                            <input id="detalleresidencia" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Descripcion de Inmueble</label>
                                                            <input id="descripcionInm" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-12">
                                                            <label>Inmueble seprado</label>
                                                            <input id="detalleinmueble" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                        <div class="form-group col-lg-6">
                                                            <label>Fecha de separacion</label>
                                                            <input id="detalleFechasep" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                          <div class="form-group col-lg-6">
                                                            <label>Fecha de realizacion de negocio</label>
                                                            <input id="detallefechafin" type="text" value="" class="form-control" readonly="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-right m-t-xs">
                                               <label id="Error" style="color:#E50000;font-size:14px">CRM mayales - Error al cargar los datos</label>
                                                <button type="button" class="btn btn-default" id="BtncDetalle">Cerrar</button>
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


             <!--Modal Empresas--->
            <div class="modal fade hmodal-success" id="ModalAsignar" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h4 class="modal-title">Listado de Empresas</h4>
                    </div>
                    <div class="modal-body">
                        
                        <!--Empresas--->
                        <div id="TblEmpresas"  >

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" id="BtnCEmpresa">Crear Empresa</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"  id="BtnCancelar">Cerrar</button>
                         
                    </div>
                </div>
            </div>
        </div>



          <div class="modal fade hmodal-danger" id="asociado" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Persona Asociada</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Nombres</label>
                                        <input id="nomasocioado" type="text" value="" class="form-control">
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="label6">Primer Apellido</label>
                                        <input id="Txtapeasociado" type="text" value="" class="form-control">
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="label10">Segundo Apellido</label>
                                        <input id="Txtapeasociado2" type="text" value="" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="Btnregis_asc">Crear asociado</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>

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
                                        <label>Descricpion de Tarea</label>
                                        <textarea id="Txtdetalle" class="form-control" rows="2" cols="3" readonly=""></textarea>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Fecha de inicio tarea</label>
                                        <input id="fechainfo" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-12">
                                        <label id="labelfin">Fecha de Finalazacion</label>
                                        <input id="Fechafin" type="text" value="" class="form-control" readonly="">
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <label id="labelmotivo">descripcion</label>
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
                        <button class="btn btn-success " type="button" id="BtnEditar">Editar</button>
                        <button class="btn btn-success " type="button" id="BtnPost">Posponer</button>
                        <button class="btn btn-primary " type="button" id="BtnTerminada">Completado</button>
                        <button class="btn btn-warning " type="button" id="ButnCerrarG">Cancelar gestion</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
          
          <div class="modal fade hmodal-danger" id="Desistirseparacion" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Desistimiento de inmuebles</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Cliente</label>
                                        <input id="TxtclienteD" type="text" class="form-control">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>inmueble</label>
                                        <input id="TxtInmueD" type="text" class="form-control">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Dias faltantes</label>
                                        <input id="Txtdias" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="BtnLiberar">Liberar Inmueble</button>
                        <button class="btn btn-warning " type="button" id="Btnconfitse">Confirmar separacion</button>
                       <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                     </div>
                </div>
            </div>
        </div>

          <div class="modal fade hmodal-danger" id="Empresar" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Crear empresa</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Nombre de Empresa</label>
                                        <input id="Empresa" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button class="btn btn-success " type="button" id="Btnempresa">Registrar</button>
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

        <!--Informacion detallada cliente---->
          <div class="modal fade hmodal-danger" id="infoCLiente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Documento de Identidad</label>
                                        <input type="text" value="" id="Text1" class="form-control" maxlength="10" autofocus="" readonly=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Nombre</label>
                                        <input type="text" value="" id="Text2" class="form-control" name="" placeholder="" readonly=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Primer Apelido</label>
                                        <input type="text" value="" id="Text3" class="form-control" placeholder="" readonly=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label2">Segundo Apellido</label>
                                        <input type="text" value="" id="Text4" class="form-control" placeholder="" readonly=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label4">Estado Civil</label>
                                        <select id="Text5" class="form-control" readonly="">
                                            <option>CASADO</option>
                                            <option>SOLTERO</option>
                                            <option>UNION LIBRE</option>
                                            <option>DIVORCIADO</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Direccion de residencia</label>
                                        <input type="text" value="" id="Text6" class="form-control" placeholder="" readonly=""/>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label>Barrio</label>
                                        <input type="text" value="" id="Text16" class="form-control" placeholder="" readonly=""/>
                                    </div>
                                      <div class="form-group col-lg-6">
                                        <label>Proyecto interes</label>
                                        <select id="Txt15" class="form-control" readonly="">
                                        </select>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Telefono Celular</label>
                                        <input type="text" value="" id="Text7" class="form-control" name="" placeholder="" readonly=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Correo Elecrtonico</label>
                                        <input type="text" value="" id="Text8" class="form-control" name="" placeholder="" readonly="" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Empresa donde labora</label>
                                        <select id="Text9" class="form-control" readonly="">
                                        </select>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Sueldo</label>
                                        <select id="Text10" class="form-control" readonly="">
                                             <option>Seleccionar..</option>
                                            <option>MENOS DE 3'000.000</option>
                                            <option>3'000.000 - 5'999.999</option> 
                                            <option>6'000.000 - 9'999.999</option>
                                            <option>10'000.000 EN ADELANTE.</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Presupuesto de Compra</label>
                                        <select id="Text11" class="form-control" readonly="">
                                            <option>Seleccionar..</option>
                                            <option>ENTRE 50Y 100 MILLONES</option>
                                            <option>ENTRE 100 A 150 MILLONES</option>
                                            <option>ENTRE 150 A 200 MILLONES</option>
                                            <option>> 200 MILLONES</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Que esta buscando</label>
                                        <select id="Text12" class="form-control" readonly="">
                                            <option>Seleccionar..</option>
                                            <option>CASA</option>
                                            <option>APARTAMENTO</option>
                                        </select>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="label3">Le gustaria vivir en</label>
                                        <select id="Text17" class="form-control" readonly="">
                                            <option>SELECCIONAR..</option>
                                            <option>Conjunto cerrado</option>
                                            <option>Urabnizacion abierta</option>
                                        </select>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="label5">Motivo de compra</label>
                                        <select id="Text18" class="form-control" readonly="">
                                            <option>SELECCIONAR..</option>
                                            <option>Vivienda</option>
                                            <option>Inversion</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="panel-body" style="display:none;" id="Tabla">
                                 </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-default" id="BtnEditarC">Editar</button>
                            <button type="button" class="btn btn-warning" id="BtnAdsocioado">Asociado</button>
                            <button type="button" class="btn btn-success" id="BtnGuardarC">Guardar</button>
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
    <script src="js/proyecInfo.js"></script>
    <script src="../scripts_crm/bootstrap-datepicker.js"></script>
    <script src="../scripts_crm/accounting.js"></script>
</asp:Content>
