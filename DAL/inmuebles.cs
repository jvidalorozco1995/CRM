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
    
    public partial class inmuebles
    {
        public inmuebles()
        {
            this.inmueble_separacion = new HashSet<inmueble_separacion>();
        }
    
        public string REFERENCIA { get; set; }
        public string INMUOBRA { get; set; }
        public string INMUDECS { get; set; }
        public string SUC { get; set; }
        public string PPTO { get; set; }
        public string MZA { get; set; }
        public string INMUEBLE { get; set; }
        public string AREA { get; set; }
        public Nullable<decimal> VAL_INMUEBLE { get; set; }
        public string INMUESTADO { get; set; }
    
        public virtual bloques bloques { get; set; }
          [XmlIgnore]
        public virtual ICollection<inmueble_separacion> inmueble_separacion { get; set; }
    }
}
