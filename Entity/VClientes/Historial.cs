using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.VClientes
{
   public class Historial
    {

        public int ID_HISTORIAL { get; set; }
        public string CLIENTEH { get; set; }
        public string NOMBRES { get; set; }
        public string TRABAJADOR { get; set; }
        public string DESCRIPCIONH { get; set; }
        public Nullable<System.DateTime> FECHA { get; set; }
    }
}
