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
    
    public partial class Actividades_Inmueble
    {
        public int id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Duracion { get; set; }
        public string Simultaneo { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<System.DateTime> FechaFin { get; set; }
        public Nullable<int> Posicion { get; set; }
    }
}