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
    
    public partial class Notificaciones
    {
        public int Id { get; set; }
        public Nullable<int> Estado { get; set; }
        public Nullable<System.DateTime> Fecha { get; set; }
        public string Usuario { get; set; }
        public string Descripcion { get; set; }
        public Nullable<int> Enviado { get; set; }
        public Nullable<int> TipoFecha { get; set; }
    }
}
