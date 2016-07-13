
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.VClientes
{
    public class VclienteInmu
    {
        public string CEDULA { get; set; }
        public string NOMBRES { get; set; }
        public string P_APELLIDO { get; set; }
        public string S_APELLIDO { get; set; }
        public string DIRECCION { get; set; }
        public string EMAIL { get; set; }
        public Nullable<System.DateTime> FECHASEPARACION { get; set; }
        public Nullable<System.DateTime> FECHAFINAL { get; set; }
        public string PROYEC_INTERES { get; set; }
        public string ASESOR { get; set; }
        public string INMUDECS { get; set; }
        public Nullable<decimal> VAL_INMUEBLE { get; set; }
        public string REFERENCIA { get; set; }
        public string ESTADO_I { get; set; }
        public string ESTADO_C { get; set; }
    }
}
