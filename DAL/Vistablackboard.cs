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
    
    public partial class Vistablackboard
    {
        public int ID_INMUEBLES_ENTREGAS { get; set; }
        public Nullable<int> ID_ENTREGA { get; set; }
        public string MZA { get; set; }
        public string INMUEBLE { get; set; }
        public string REFERENCIA_INMUEBLE { get; set; }
        public Nullable<System.DateTime> FECHAREG { get; set; }
        public Nullable<int> CONFIRMAOBRA { get; set; }
        public Nullable<System.DateTime> FECHACONFIRMA { get; set; }
        public Nullable<int> ESTADOAVAL { get; set; }
        public string INSPECCIONCAL { get; set; }
        public Nullable<System.DateTime> RADICADOVENTA { get; set; }
        public Nullable<System.DateTime> ENTREGAOBRA { get; set; }
        public Nullable<System.DateTime> FECHACLIENTE { get; set; }
        public Nullable<int> ESTADOENTREGA { get; set; }
        public Nullable<System.DateTime> FECHAENTREGA { get; set; }
        public string OBSERVACIONES { get; set; }
        public string SUC { get; set; }
        public Nullable<System.DateTime> ENVIADO { get; set; }
        public string ENVIADOA { get; set; }
        public string ENVIADOPOR { get; set; }
        public Nullable<int> id { get; set; }
        public string USUARIO { get; set; }
        public int CONSECUTIVO { get; set; }

    }
}
