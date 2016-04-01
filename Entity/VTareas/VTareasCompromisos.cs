using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.VTareas
{
  public  class VTareasCompromisos
    {
        public string T_CEDULA { get; set; }
        public string CEDULA { get; set; }
        public string NOMBRES { get; set; }
        public string P_APELLIDO { get; set; }
        public string CONCEPTO { get; set; }
        public string ESTADO { get; set; }
        public int ID_TAREA { get; set; }
        public Nullable<System.DateTime> FECHAINICIO { get; set; }
        public Nullable<System.DateTime> FECHAFIN { get; set; }
        public string DIRECCION { get; set; }
        public string TELEFONO2 { get; set; }
        public string S_APELLIDO { get; set; }
        public string PROYEC_INTERES { get; set; }
        public string ASESOR { get; set; }
    }
}
