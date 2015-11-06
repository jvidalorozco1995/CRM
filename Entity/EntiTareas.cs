using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class EntiTareas
    {
        public int ID_TAREA { get; set; }
        public string CLIENTE { get; set; }
        public string TRABAJADOR { get; set; }
        public string CONCEPTO { get; set; }
        public Nullable<System.DateTime> FECHAINICIO { get; set; }
        public Nullable<System.DateTime> FECHAFIN { get; set; }
        public string ESTADO { get; set; }
        public int CONTADOR { get; set; }
    }
}
