//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    using System.Xml.Serialization;
    public partial class Actividades
    {
        public Actividades()
        {
            this.ActividadxTramite = new HashSet<ActividadxTramite>();
            this.Documento = new HashSet<Documento>();
            this.Notificaciones = new HashSet<Notificaciones>();
        }
    
        public int id { get; set; }
        public string Nombre { get; set; }
        public string Usuario { get; set; }
        public Nullable<int> Duracion { get; set; }
        public string Descripcion { get; set; }
        public Nullable<int> Simultaneo { get; set; }
        public Nullable<int> Actividad_Dependiente { get; set; }
    
        [XmlIgnore]
        public virtual ICollection<ActividadxTramite> ActividadxTramite { get; set; }
            [XmlIgnore]
            public virtual ICollection<Documento> Documento { get; set; }
            [XmlIgnore]
            public virtual ICollection<Notificaciones> Notificaciones { get; set; }
    }
}
