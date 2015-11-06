using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class Entiacuerdo_pago
    {
        public int ID_AC_PF { get; set; }
        public string NO_ACUERDO { get; set; }
        public Nullable<System.DateTime> FECHA_PAGO { get; set; }
        public Nullable<decimal> VALOR_CUOTA { get; set; }
        public string DETALLE { get; set; }
    }
}
