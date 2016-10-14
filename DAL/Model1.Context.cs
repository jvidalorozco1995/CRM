﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Objects;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    
    public partial class CRMEntiti : DbContext
    {
        public CRMEntiti()
            : base("name=CRMEntiti")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<ActInmuebles> ActInmuebles { get; set; }
        public DbSet<Actividades> Actividades { get; set; }
        public DbSet<Actividades_Inmueble> Actividades_Inmueble { get; set; }
        public DbSet<ActividadxTramite> ActividadxTramite { get; set; }
        public DbSet<acuerdo_fox> acuerdo_fox { get; set; }
        public DbSet<acuerdo_pago> acuerdo_pago { get; set; }
        public DbSet<acuerdo_pago_banco> acuerdo_pago_banco { get; set; }
        public DbSet<Ambiente> Ambiente { get; set; }
        public DbSet<Aval> Aval { get; set; }
        public DbSet<bancos> bancos { get; set; }
        public DbSet<bitacora_tareas> bitacora_tareas { get; set; }
        public DbSet<bloques> bloques { get; set; }
        public DbSet<clientes> clientes { get; set; }
        public DbSet<compromisosxcuota> compromisosxcuota { get; set; }
        public DbSet<configuracion> configuracion { get; set; }
        public DbSet<Configuracion_negocio> Configuracion_negocio { get; set; }
        public DbSet<Documento> Documento { get; set; }
        public DbSet<Documento_ActInmueble> Documento_ActInmueble { get; set; }
        public DbSet<documentos_negocio> documentos_negocio { get; set; }
        public DbSet<empresas> empresas { get; set; }
        public DbSet<Entregas> Entregas { get; set; }
        public DbSet<FechasAval> FechasAval { get; set; }
        public DbSet<historial_clientes> historial_clientes { get; set; }
        public DbSet<historial_inmueble> historial_inmueble { get; set; }
        public DbSet<historialIngreso> historialIngreso { get; set; }
        public DbSet<informacion> informacion { get; set; }
        public DbSet<inmueble_separacion> inmueble_separacion { get; set; }
        public DbSet<inmuebles> inmuebles { get; set; }
        public DbSet<INMUEBLES_ENTREGAS> INMUEBLES_ENTREGAS { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<ItemAval> ItemAval { get; set; }
        public DbSet<ItemXambiente> ItemXambiente { get; set; }
        public DbSet<negocio> negocio { get; set; }
        public DbSet<negocio_fox> negocio_fox { get; set; }
        public DbSet<Notificaciones> Notificaciones { get; set; }
        public DbSet<pagos_fox> pagos_fox { get; set; }
        public DbSet<planos_Proyectos> planos_Proyectos { get; set; }
        public DbSet<proyectos> proyectos { get; set; }
        public DbSet<proyectos_trabajador> proyectos_trabajador { get; set; }
        public DbSet<ResponsableCalidad> ResponsableCalidad { get; set; }
        public DbSet<sala_ventas> sala_ventas { get; set; }
        public DbSet<sysdiagrams> sysdiagrams { get; set; }
        public DbSet<tareas> tareas { get; set; }
        public DbSet<tipo_documentos> tipo_documentos { get; set; }
        public DbSet<tipo_personas> tipo_personas { get; set; }
        public DbSet<trabajadores> trabajadores { get; set; }
        public DbSet<Tramites> Tramites { get; set; }
        public DbSet<Tramites_Inmueble> Tramites_Inmueble { get; set; }
        public DbSet<historial_acuerdos_pagos> historial_acuerdos_pagos { get; set; }
        public DbSet<NegocioView> NegocioView { get; set; }
        public DbSet<VActInmuebles> VActInmuebles { get; set; }
        public DbSet<VActxtramite> VActxtramite { get; set; }
        public DbSet<VacuerdosFox> VacuerdosFox { get; set; }
        public DbSet<VAsesoresT> VAsesoresT { get; set; }
        public DbSet<VCantidadcompromisos> VCantidadcompromisos { get; set; }
        public DbSet<VCLienteinmueble> VCLienteinmueble { get; set; }
        public DbSet<Vclientes> Vclientes { get; set; }
        public DbSet<Vclienteseparacion> Vclienteseparacion { get; set; }
        public DbSet<VClientesTareas> VClientesTareas { get; set; }
        public DbSet<VCod_SP> VCod_SP { get; set; }
        public DbSet<Vdetallesp> Vdetallesp { get; set; }
        public DbSet<VDocumentosActividades> VDocumentosActividades { get; set; }
        public DbSet<VFechasProyectos> VFechasProyectos { get; set; }
        public DbSet<Vinmuebles> Vinmuebles { get; set; }
        public DbSet<VInmueblesConTramites> VInmueblesConTramites { get; set; }
        public DbSet<VinteresProyect> VinteresProyect { get; set; }
        public DbSet<VistaAmbiente> VistaAmbiente { get; set; }
        public DbSet<VistaAVal> VistaAVal { get; set; }
        public DbSet<VistaAvalAntes> VistaAvalAntes { get; set; }
        public DbSet<VListadoEntegrasC> VListadoEntegrasC { get; set; }
        public DbSet<VListadoEntregas> VListadoEntregas { get; set; }
        public DbSet<VnegocioFox> VnegocioFox { get; set; }
        public DbSet<VNegocioscompromisos> VNegocioscompromisos { get; set; }
        public DbSet<Vsepracioninmuebles> Vsepracioninmuebles { get; set; }
        public DbSet<Vspt> Vspt { get; set; }
        public DbSet<VTareas> VTareas { get; set; }
        public DbSet<VTareasCompromiso> VTareasCompromiso { get; set; }
        public DbSet<VtareasNegocio> VtareasNegocio { get; set; }
        public DbSet<VTracliente> VTracliente { get; set; }
        public DbSet<VTramitesBancos> VTramitesBancos { get; set; }
    
        public virtual int sp_alterdiagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_alterdiagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_creatediagram(string diagramname, Nullable<int> owner_id, Nullable<int> version, byte[] definition)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var versionParameter = version.HasValue ?
                new ObjectParameter("version", version) :
                new ObjectParameter("version", typeof(int));
    
            var definitionParameter = definition != null ?
                new ObjectParameter("definition", definition) :
                new ObjectParameter("definition", typeof(byte[]));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_creatediagram", diagramnameParameter, owner_idParameter, versionParameter, definitionParameter);
        }
    
        public virtual int sp_dropdiagram(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_dropdiagram", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagramdefinition_Result> sp_helpdiagramdefinition(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagramdefinition_Result>("sp_helpdiagramdefinition", diagramnameParameter, owner_idParameter);
        }
    
        public virtual ObjectResult<sp_helpdiagrams_Result> sp_helpdiagrams(string diagramname, Nullable<int> owner_id)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_helpdiagrams_Result>("sp_helpdiagrams", diagramnameParameter, owner_idParameter);
        }
    
        public virtual int sp_renamediagram(string diagramname, Nullable<int> owner_id, string new_diagramname)
        {
            var diagramnameParameter = diagramname != null ?
                new ObjectParameter("diagramname", diagramname) :
                new ObjectParameter("diagramname", typeof(string));
    
            var owner_idParameter = owner_id.HasValue ?
                new ObjectParameter("owner_id", owner_id) :
                new ObjectParameter("owner_id", typeof(int));
    
            var new_diagramnameParameter = new_diagramname != null ?
                new ObjectParameter("new_diagramname", new_diagramname) :
                new ObjectParameter("new_diagramname", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_renamediagram", diagramnameParameter, owner_idParameter, new_diagramnameParameter);
        }
    
        public virtual int sp_upgraddiagrams()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("sp_upgraddiagrams");
        }
    
        public virtual int tareas_actualizar()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("tareas_actualizar");
        }
    }
}
