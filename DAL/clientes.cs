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
    
   using System.Xml.Serialization;        public partial class clientes
    {
        public clientes()
        {
            this.historial_clientes = new HashSet<historial_clientes>();
            this.historial_inmueble = new HashSet<historial_inmueble>();
            this.inmueble_separacion = new HashSet<inmueble_separacion>();
            this.tareas = new HashSet<tareas>();
        }
    
        public string CEDULA { get; set; }
        public string NOMBRES { get; set; }
        public string P_APELLIDO { get; set; }
        public string S_APELLIDO { get; set; }
        public string ESTADO_CIVIL { get; set; }
        public string DIRECCION { get; set; }
        public string BARRIO { get; set; }
        public string TELEFONO2 { get; set; }
        public string PROYEC_INTERES { get; set; }
        public string EMAIL { get; set; }
        public Nullable<int> EMPRESA { get; set; }
        public string SUELDO { get; set; }
        public string PRESU_COMPRA { get; set; }
        public string INMU_INTERES { get; set; }
        public string INTERES_VI { get; set; }
        public string MOT_COMPRA { get; set; }
        public Nullable<int> SALA_VENTA { get; set; }
        public string ASESOR { get; set; }
        public Nullable<System.DateTime> FECHACREACION { get; set; }
        public Nullable<System.DateTime> FECHAMOD { get; set; }
        public string INFORMACION { get; set; }
        public string ESTADO { get; set; }
        public string ASOCIADO { get; set; }
    
        [XmlIgnore]   public virtual ICollection<historial_clientes> historial_clientes { get; set; }
        [XmlIgnore]   public virtual ICollection<historial_inmueble> historial_inmueble { get; set; }
        [XmlIgnore]   public virtual ICollection<inmueble_separacion> inmueble_separacion { get; set; }
        [XmlIgnore]   public virtual ICollection<tareas> tareas { get; set; }
    }
}
