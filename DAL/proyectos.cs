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
    
    public partial class proyectos
    {
        public proyectos()
        {
            this.bloques = new HashSet<bloques>();
            this.planos_Proyectos = new HashSet<planos_Proyectos>();
            this.proyectos_trabajador = new HashSet<proyectos_trabajador>();
        }
    
        public string ID_PROYEC { get; set; }
        public string NOMBRE_PROYEC { get; set; }
        [XmlIgnore]
        public virtual ICollection<bloques> bloques { get; set; }
        [XmlIgnore]
        public virtual ICollection<planos_Proyectos> planos_Proyectos { get; set; }
        [XmlIgnore]
        public virtual ICollection<proyectos_trabajador> proyectos_trabajador { get; set; }
    }
}
