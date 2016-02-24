using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity.VInmuebles
{
   public class Vdetalleseparacion
    {
        public string REFERENCIA { get; set; }
        public string NOMBRES { get; set; }
        public string P_APELLIDO { get; set; }
        public string S_APELLIDO { get; set; }
        public string DIRECCION { get; set; }
        public string TELEFONO2 { get; set; }
        public Nullable<System.DateTime> FECHASEPARACION { get; set; }
        public Nullable<System.DateTime> FECHAFINAL { get; set; }
        public string INMUDECS { get; set; }
        public Nullable<decimal> VAL_INMUEBLE { get; set; }
        public string NOMBRE_BLO { get; set; }
        public string INMUEBLE { get; set; }
        public string ESTADO { get; set; }

        public class SepracionInmueble {

            public string NOMBRES { get; set; }
            public string P_APELLIDO { get; set; }
            public string S_APELLIDO { get; set; }
            public string ASESOR { get; set; }
            public Nullable<System.DateTime> FECHASEPARACION { get; set; }
            public Nullable<System.DateTime> FECHAFINAL { get; set; }
            public string DIRECCION { get; set; }
            public string BARRIO { get; set; }
            public string TELEFONO2 { get; set; }
            public string NOMBRE_PROYEC { get; set; }
            public Nullable<int> DIAS { get; set; }
            public string CLIENTE { get; set; }
            public string INMUEBLE { get; set; }
            public string CASA { get; set; }
            public string ESTADO { get; set; }
            public int  ID_S { get; set; }

            public string CODIGO_F { get; set; }
            public string ID_NEGOCIO { get; set; }
        }
    }
}
