using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.VClientes
{
   public class HistorialCientes
    {
        public int id_historial { get; set; }
        public string clienteh { get; set; }
        public string descripcionh { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public Nullable<int> accion { get; set; }
        public string tipo { get; set; }
        public string trabajador { get; set; }

    }
}
