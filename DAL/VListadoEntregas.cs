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
    
    public partial class VListadoEntregas
    {
        public int ID_INMUEBLES_ENTREGAS { get; set; }
        public Nullable<int> ID_ENTREGA { get; set; }
        public string REFERENCIA_INMUEBLE { get; set; }
        public string MZA { get; set; }
        public string INMUEBLE { get; set; }
        public Nullable<int> CONFIRMAOBRA { get; set; }
        public string INSPECCIONCAL { get; set; }
        public Nullable<int> ESTADOAVAL { get; set; }
        public Nullable<System.DateTime> RADICADOVENTA { get; set; }
        public Nullable<System.DateTime> ENTREGAOBRA { get; set; }
        public Nullable<System.DateTime> FECHACLIENTE { get; set; }
        public Nullable<System.DateTime> FECHAENTREGA { get; set; }
        public Nullable<int> ESTADOENTREGA { get; set; }
        public string NOMBRE_BLO { get; set; }
        public string NOMBRE_PROYEC { get; set; }
        public string ID_PROYEC { get; set; }
        public string OBSERVACIONES { get; set; }
        public int CONTADOR { get; set; }
    }
}
